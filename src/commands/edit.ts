import * as vscode from "vscode";

import type { Argument, InputOr, RegisterOr } from ".";
import { insert as apiInsert, Context, deindentLines, Direction, edit, indentLines, insertByIndex, insertByIndexWithFullLines, insertFlagsAtEdge, joinLines, keypress, Positions, replace, replaceByIndex, Selections, Shift } from "../api";
import type { Register } from "../state/registers";
import { ArgumentError, LengthMismatchError } from "../utils/errors";

/**
 * Perform changes on the text content of the document.
 *
 * See https://github.com/mawww/kakoune/blob/master/doc/pages/keys.asciidoc#changes.
 */
declare module "./edit";

/**
 * Insert contents of register.
 *
 * A `where` argument may be specified to state where the text should be
 * inserted relative to each selection. If unspecified, each selection will be
 * replaced by the text.
 *
 * Specify `"shift": "select"` to select the inserted selection,
 * `"shift": "extend"` to extend to the inserted text, and nothing to keep the
 * current selections.
 *
 * Specify `all` to paste all contents next to each selection.
 *
 * @keys `s-a-r` (kakoune: move), `s-r` (helix: move)
 *
 * #### Additional commands
 *
 * | Title                              | Identifier               | Keybinding                                       | Commands                                                                                                                       |
 * | ---------------------------------- | ------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
 * | Pick register and replace          | `selectRegister-insert`  | `c-r` (kakoune: move), `c-r` (kakoune: modify) | `[".selectRegister", { +register }], [".edit.insert", { ... }]`                                                                |
 * | Paste before                       | `paste.before`           |                                                  | `[".edit.insert", { handleNewLine: true, where: "start", ... }]`                                                               |
 * | Paste after                        | `paste.after`            |                                                  | `[".edit.insert", { handleNewLine: true, where: "end"  , ... }]`                                                               |
 * | Paste before and select            | `paste.before.select`    | `s-p` (core: move)                             | `[".edit.insert", { handleNewLine: true, where: "start", shift: "select", ... }]`                                              |
 * | Paste after and select             | `paste.after.select`     | `p` (core: move)                               | `[".edit.insert", { handleNewLine: true, where: "end"  , shift: "select", ... }]`                                              |
 * | Paste all before                   | `pasteAll.before`        |                                                  | `[".edit.insert", { handleNewLine: true, where: "start", all: true, ... }]`                                                    |
 * | Paste all after                    | `pasteAll.after`         |                                                  | `[".edit.insert", { handleNewLine: true, where: "end"  , all: true, ... }]`                                                    |
 * | Paste all before and select        | `pasteAll.before.select` | `s-a-p` (kakoune: move)                        | `[".edit.insert", { handleNewLine: true, where: "start", all: true, shift: "select", ... }]`                                   |
 * | Paste all after and select         | `pasteAll.after.select`  | `a-p` (kakoune: move)                          | `[".edit.insert", { handleNewLine: true, where: "end"  , all: true, shift: "select", ... }]`                                   |
 * | Delete                             | `delete`                 | `a-d` (core: move)                             | `[".edit.insert", { register: "_", ... }]`                                                                                     |
 * | Delete and switch to Modify        | `delete-modify`          | `a-c` (kakoune: move)                          | `[".modes.set", { mode: "modify", +mode }], [".edit.insert", { register: "_", ... }]`                                          |
 * | Copy and delete                    | `yank-delete`            | `d` (core: move)                               | `[".selections.saveText", { +register }],                                            [".edit.insert", { register: "_", ... }]` |
 * | Copy, delete and switch to Modify  | `yank-delete-modify`     | `c` (core: move; helix: select)                | `[".selections.saveText", { +register }], [".modes.set.modify"], [".edit.insert", { register: "_", ... }]` |
 * | Copy and replace                   | `yank-replace`           | `s-r` (kakoune: move)                          | `[".selections.saveText", { register: "tmp" }], [".edit.insert"], [".updateRegister", { copyFrom: "tmp", ... }]`               |
 * |                                    |                          | `s-r` (helix: select)                            | `[".edit.insert"], [".modes.set.move"]`                                                                                        |
 * |                                    |                          | `a-d` (helix: select)                            | `[".edit.delete"], [".modes.set.move"]`                                                                                        |
 * |                                    |                          | `d` (helix: select)                              | `[".edit.yank-delete"], [".modes.set.move"]`                                                                                  |
 * |                                    |                          | `s-p` (helix: select)                            | `[".edit.paste.before"], [".modes.set.move"]`                                                                                 |
 * |                                    |                          | `p` (helix: select)                              | `[".edit.paste.after"], [".modes.set.move"]`                                                                                  |
 * | Replace                            | `replace`                |                                                  | `[".edit.insert"]`                                                                                                          |
 */
export async function insert(
  _: Context,
  selections: readonly vscode.Selection[],
  register: RegisterOr<"dquote", Register.Flags.CanRead>,

  adjust: Argument<boolean> = true,
  all: Argument<boolean> = false,
  handleNewLine: Argument<boolean> = false,
  repetitions: number,
  shift?: Argument<Shift>,
  text?: Argument<string>,
  where?: Argument<"active" | "anchor" | "start" | "end" | undefined>,
) {
  let contents = text?.length
    ? (shift === Shift.Select ? [text] : selections.map(() => text))
    : await register.get();

  if (contents === undefined || contents.length === 0) {
    throw new Error(`register "${register.name}" does not contain any saved text`);
  }

  if (all) {
    if (shift !== Shift.Select) {
      throw new ArgumentError("`all` is only compatible with `shift: \"select\"`");
    }

    contents = [...contents].reverse();

    const textToInsert = contents.join(""),
          insert = handleNewLine ? insertByIndexWithFullLines : insertByIndex,
          flags = insertFlagsAtEdge(where) | apiInsert.Flags.Select;

    const insertedRanges = await insert(flags, () => textToInsert, selections),
          allSelections = [] as vscode.Selection[],
          document = _.document;

    for (const insertedRange of insertedRanges) {
      let offset = document.offsetAt(insertedRange.start);

      for (const content of contents) {
        const newSelection = Selections.fromLength(offset, content.length, false, document);

        allSelections.push(newSelection);
        offset += content.length;
      }
    }

    Selections.set(Selections.bottomToTop(allSelections));
    return;
  }

  if (adjust) {
    contents = extendArrayToLength(contents, selections.length);
  } else {
    LengthMismatchError.throwIfLengthMismatch(selections, contents);
  }

  if (repetitions > 1) {
    contents = contents.map((content) => content.repeat(repetitions));
  }

  if (where === undefined) {
    Selections.set(await replaceByIndex((i) => contents![i], selections));
    return;
  }

  if (!["active", "anchor", "start", "end"].includes(where)) {
    throw new Error(`"where" must be one of "active", "anchor", "start", "end", or undefined`);
  }

  const keepOrExtend = shift === Shift.Extend
    ? apiInsert.Flags.Extend
    : shift === Shift.Select
      ? apiInsert.Flags.Select
      : apiInsert.Flags.Keep,
        flags = insertFlagsAtEdge(where) | keepOrExtend;

  Selections.set(
    handleNewLine
      ? await insertByIndexWithFullLines(flags, (i) => contents![i], selections)
      : await insertByIndex(flags, (i) => contents![i], selections),
  );
}

/**
 * Join lines.
 *
 * @keys `a-j` (kakoune: move), `s-j` (helix: move; helix: select)
 */
export function join(_: Context, separator?: Argument<string>) {
  return joinLines(Selections.lines(), separator);
}

/**
 * Join lines and select inserted separators.
 *
 * @keys `s-a-j` (core: move; helix: select)
 */
export async function join_select(_: Context, separator?: Argument<string>) {
  Selections.set(await joinLines(Selections.lines(), separator));
}

/**
 * Indent selected lines.
 *
 * @keys `>` (core: move)
 * | Keybindings         | Commands                                  |
 * | -----------         | --------                                  |
 * | `>` (helix: select) | `[".edit.indent"], [".modes.set.move"]` |
 */
export function indent(_: Context, repetitions: number) {
  return indentLines(Selections.lines(), repetitions, /* indentEmpty= */ false);
}

/**
 * Indent selected lines (including empty lines).
 *
 * @keys `a->` (kakoune: move)
 */
export function indent_withEmpty(_: Context, repetitions: number) {
  return indentLines(Selections.lines(), repetitions, /* indentEmpty= */ true);
}

/**
 * Deindent selected lines.
 *
 * @keys `a-<` (kakoune: move)
 */
export function deindent(_: Context, repetitions: number) {
  return deindentLines(Selections.lines(), repetitions, /* deindentIncomplete= */ false);
}

/**
 * Deindent selected lines (including incomplete indent).
 *
 * @keys `<` (core: move)
 * | Keybindings         | Commands                                    |
 * | -----------         | --------                                    |
 * | `<` (helix: select) | `[".edit.deindent"], [".modes.set.move"]` |
 */
export function deindent_withIncomplete(_: Context, repetitions: number) {
  return deindentLines(Selections.lines(), repetitions, /* deindentIncomplete= */ true);
}

/**
 * Transform to lower case.
 *
 * @keys `` ` `` (core: move)
 * | Keybindings             | Commands                                        |
 * | -----------             | --------                                        |
 * | `` ` `` (helix: select) | `[".edit.case.toLower"], [".modes.set.move"]` |
 */
export function case_toLower(_: Context) {
  return replace((text) => text.toLocaleLowerCase());
}

/**
 * Transform to upper case.
 *
 * @keys `` s-` `` (kakoune: move), `` a-` `` (helix: move)
 * | Keybindings               | Commands                                        |
 * | -----------               | --------                                        |
 * | `` a-` `` (helix: select) | `[".edit.case.toUpper"], [".modes.set.move"]` |
 */
export function case_toUpper(_: Context) {
  return replace((text) => text.toLocaleUpperCase());
}

/**
 * Swap case.
 *
 * @keys `` a-` `` (kakoune: move), `` s-` `` (helix: move)
 * | Keybindings               | Commands                                     |
 * | -----------               | --------                                     |
 * | `` s-` `` (helix: select) | `[".edit.case.swap"], [".modes.set.move"]` |
 */
export function case_swap(_: Context) {
  return replace((text) => {
    let builtText = "";

    for (let i = 0, len = text.length; i < len; i++) {
      const x = text[i],
            loCase = x.toLocaleLowerCase();

      builtText += loCase === x ? x.toLocaleUpperCase() : loCase;
    }

    return builtText;
  });
}

/**
 * Replace characters.
 *
 * @keys `r` (core: move)
 * | Keybindings         | Commands                                             |
 * | -----------         | --------                                             |
 * | `r` (helix: select) | `[".edit.replaceCharacters"], [".modes.set.move"]` |
 */
export async function replaceCharacters(
  _: Context,
  repetitions: number,
  inputOr: InputOr<"input", string>,
) {
  const input = (await inputOr(() => keypress(_))).repeat(repetitions);

  return _.run(() => edit((editBuilder, selections, document) => {
    for (const selection of selections) {
      let i = selection.start.line;

      if (selection.end.line === i) {
        // A single line-selection; replace the selection directly
        editBuilder.replace(
          selection,
          input!.repeat(selection.end.character - selection.start.character),
        );

        continue;
      }

      // Replace in first line
      const firstLine = document.lineAt(i).range.with(selection.start);

      editBuilder.replace(
        firstLine,
        input!.repeat(firstLine.end.character - firstLine.start.character),
      );

      // Replace in intermediate lines
      while (++i < selection.end.line) {
        const line = document.lineAt(i);

        editBuilder.replace(line.range, input!.repeat(line.text.length));
      }

      // Replace in last line
      const lastLine = document.lineAt(i).range.with(undefined, selection.end);

      editBuilder.replace(
        lastLine,
        input!.repeat(lastLine.end.character - lastLine.start.character),
      );
    }
  }));
}

/**
 * Align selections.
 *
 * Align selections, aligning the cursor of each selection by inserting spaces
 * before the first character of each selection.
 *
 * @keys `&` (core: move)
 */
export function align(_: Context, fill: Argument<string> = " ") {
  return edit((builder, selections) => {
    const sortedSelections = Selections.sort(Direction.Forward, [
      ...selections,
    ]);

    // Build groups of selections that should be aligned together, each group
    // containing the nth selection of each line.
    const selectionGroups: vscode.Selection[][] = [];
    let currentLine = -1;
    let currentColumn = 0;
    for (const selection of sortedSelections) {
      if (selection.start.line !== selection.end.line) {
        throw new Error("cannot align selections that span multiple lines");
      }

      if (selection.start.line !== currentLine) {
        currentLine = selection.start.line;
        currentColumn = 0;
      }

      if (currentColumn === selectionGroups.length) {
        selectionGroups.push([]);
      }

      selectionGroups[currentColumn].push(selection);
      currentColumn++;
    }

    // Selections aren't updated as we fill each line, so we keep track of how
    // many characters we added to each line as we go.
    const lineFillCounters = new Map<number, number>();
    const getAlignChar = (sel: vscode.Selection) =>
      sel.active.character + (lineFillCounters.get(sel.active.line) ?? 0);

    for (const selectionsInGroup of selectionGroups) {
      const furthestChar = Math.max(...selectionsInGroup.map(getAlignChar));
      for (const selection of selectionsInGroup) {
        const addCount = furthestChar - getAlignChar(selection);
        builder.insert(selection.start, fill.repeat(addCount));
        const line = selection.start.line;
        lineFillCounters.set(
          line,
          (lineFillCounters.get(line) ?? 0) + addCount,
        );
      }
    }
  });
}

/**
 * Copy indentation.
 *
 * Copy the indentation of the main selection (or the count one if a count is
 * given) to all other ones.
 *
 * @keys `a-&` (kakoune: move)
 */
export function copyIndentation(
  _: Context,
  document: vscode.TextDocument,
  selections: readonly vscode.Selection[],
  count: number,
) {
  const sourceSelection = selections[count] ?? selections[0],
        sourceIndent = document
          .lineAt(sourceSelection.start)
          .firstNonWhitespaceCharacterIndex;

  return edit((builder, selections, document) => {
    for (let i = 0, len = selections.length; i < len; i++) {
      if (i === sourceSelection.start.line) {
        continue;
      }

      const line = document.lineAt(selections[i].start),
            indent = line.firstNonWhitespaceCharacterIndex;

      if (indent > sourceIndent) {
        builder.delete(
          line.range.with(
            undefined,
            line.range.start.translate(undefined, indent - sourceIndent),
          ),
        );
      } else if (indent < sourceIndent) {
        builder.insert(line.range.start, " ".repeat(indent - sourceIndent));
      }
    }
  });
}

/**
 * Insert new line above each selection.
 *
 * Specify `"shift": "select"` to select the inserted selections, and nothing to
 * keep the current selections.
 *
 * @keys `s-a-o` (kakoune: move)
 *
 * #### Additional keybindings
 *
 * | Title                                      | Identifier             | Keybinding                          | Commands                                                                          |
 * | ------------------------------------------ | ---------------------- | ------------------------------------| --------------------------------------------------------------------------------- |
 * | Insert new line above and switch to modify | `newLine.above.modify` | `s-o` (core: move; helix: select) | `[".edit.newLine.above", { shift: "select" }], [".modes.modify.before", { ... }]` |
 */
export function newLine_above(
  _: Context,
  repetitions: number,
  shift?: Argument<Shift>,
) {
  if (shift === Shift.Select) {
    return insertLinesNativelyAndCopySelections(_, repetitions, "editor.action.insertLineBefore");
  }

  return edit((builder, selections, document) => {
    const newLine = (document.eol === vscode.EndOfLine.LF ? "\n" : "\r\n").repeat(repetitions),
          processedLines = new Set<number>();

    for (let i = 0, len = selections.length; i < len; i++) {
      const selection = selections[i],
            activeLine = Selections.activeLine(selection);

      if (processedLines.size !== processedLines.add(activeLine).size) {
        builder.insert(new vscode.Position(activeLine, 0), newLine);
      }
    }
  });
}

/**
 * Insert new line below each selection.
 *
 * Specify `"shift": "select"` to select the inserted selections, and nothing to
 * keep the current selections.
 *
 * @keys `a-o` (kakoune: move)
 *
 * #### Additional keybindings
 *
 * | Title                                      | Identifier             | Keybinding                        | Commands                                                                          |
 * | ------------------------------------------ | ---------------------- | --------------------------------- | --------------------------------------------------------------------------------- |
 * | Insert new line below and switch to modify | `newLine.below.modify` | `o` (core: move; helix: select) | `[".edit.newLine.below", { shift: "select" }], [".modes.modify.before", { ... }]` |
 */
export function newLine_below(
  _: Context,
  repetitions: number,
  shift?: Argument<Shift>,
) {
  if (shift === Shift.Select) {
    return insertLinesNativelyAndCopySelections(_, repetitions, "editor.action.insertLineAfter");
  }

  return edit((builder, selections, document) => {
    const newLine = (document.eol === vscode.EndOfLine.LF ? "\n" : "\r\n").repeat(repetitions),
          processedLines = new Set<number>();

    for (let i = 0, len = selections.length; i < len; i++) {
      const selection = selections[i],
            activeLine = Selections.activeLine(selection);

      if (processedLines.size !== processedLines.add(activeLine).size) {
        builder.insert(new vscode.Position(activeLine + 1, 0), newLine);
      }
    }
  });
}

function prepareSelectionForLineInsertion(_: number, selection: vscode.Selection) {
  const activeLine = Selections.activeLine(selection);

  if (selection.active.line !== activeLine) {
    return new vscode.Selection(selection.anchor, selection.active.with(activeLine));
  }

  return selection;
}

function extendArrayToLength<T>(array: readonly T[], length: number) {
  const arrayLen = array.length;

  if (length > arrayLen) {
    const newArray = array.slice(),
          last = array[arrayLen - 1];

    for (let i = arrayLen; i < length; i++) {
      newArray.push(last);
    }

    return newArray;
  } else {
    return array.slice(0, length);
  }
}

/**
 * Inserts lines below or above each current selection, and copies the new
 * selections the given number of times.
 *
 * This function uses the native VS Code insertion strategy to get a valid
 * indentation for the new selections, and copies the inserted selections down
 * if more than one repetition is requested.
 */
async function insertLinesNativelyAndCopySelections(
  _: Context,
  repetitions: number,
  command: "editor.action.insertLineAfter" | "editor.action.insertLineBefore",
) {
  Selections.updateByIndex(prepareSelectionForLineInsertion);

  if (repetitions === 1) {
    await vscode.commands.executeCommand(command);
    return;
  }

  const isLastCharacterAt = [] as boolean[];

  await vscode.commands.executeCommand(command);

  await _.edit((builder, selections, document) => {
    for (const selection of selections) {
      const active = selection.active,
            lineStart = Positions.lineStart(active.line),
            indentationRange = new vscode.Range(lineStart, active),
            indentation = (document.getText(indentationRange) + "\n").repeat(repetitions - 1);

      if (active.line === document.lineCount - 1) {
        isLastCharacterAt.push(true);
        builder.insert(Positions.lineEnd(active.line), "\n" + indentation.slice(0, -1));
      } else {
        isLastCharacterAt.push(false);
        builder.insert(lineStart.translate(1), indentation);
      }
    }
  });

  const selections = [] as vscode.Selection[];
  let selectionIndex = 0;

  for (let selection of _.selections) {
    if (isLastCharacterAt[selectionIndex++]) {
      // Selection corresponds to the last character in the document. We
      // couldn't simply insert a line above, so we must correct the current
      // selection.
      selection = Selections.fromAnchorActive(
        selection.anchor.translate(-repetitions + 1),
        selection.active.translate(-repetitions + 1),
      );
    }

    const active = selection.active,
          anchor = selection.anchor;

    for (let i = repetitions - 1; i > 0; i--) {
      selections.push(Selections.fromAnchorActive(anchor.translate(i), active.translate(i)));
    }

    selections.push(selection);
  }

  _.selections = selections;
}

/**
 * Add a space before each selection.
 */
export function addSpace_before(
  _: Context,
  repetitions: number,
) {
  return edit((builder, selections) => {
    for (const selection of selections) {
      builder.insert(selection.start, " ".repeat(repetitions));
    }
  });
}

/**
 * Add a space after each selection.
 */
export function addSpace_after(
  _: Context,
  repetitions: number,
) {
  return edit((builder, selections) => {
    for (const selection of selections) {
      builder.insert(selection.end, " ".repeat(repetitions));
    }
  });
}

/**
 * Remove empty lines from selections.
 *
 * Removes all empty or whitespace-only lines that are within each selection.
 * 
 * @author Copilot
 */
export function removeEmptyLines(
  _: Context,
) {
  return _.run(async () => {
    // Store original selections
    const originalSelections = _.selections;
    const document = _.document;
    
    // We'll track which lines will be deleted and adjust selections accordingly
    const deletedLines = new Set<number>();
    const newSelections: vscode.Selection[] = [];
    
    // First pass: identify all empty lines to delete
    await _.edit((builder, selections, document) => {
      // Process each selection independently
      for (const selection of selections) {
        const startLine = selection.start.line;
        let endLine = selection.end.line;
        
        // Skip if selection is on a single line
        if (startLine === endLine) continue;
        
        // If the selection ends at column 0 of a line, don't include that line
        // as it's not actually part of the visual selection
        if (selection.end.character === 0 && endLine > startLine) {
          endLine--;
        }
        
        // Collect all ranges to delete
        const rangesToDelete: vscode.Range[] = [];
        
        // Find all empty lines in the selection
        for (let lineNum = startLine; lineNum <= endLine; lineNum++) {
          // Check if we're still within the document bounds
          if (lineNum >= document.lineCount) break;
          
          const line = document.lineAt(lineNum);
          const lineText = line.text;
          
          // Check if the line is empty or contains only whitespace
          if (lineText.trim().length === 0) {
            // Record this line as empty
            deletedLines.add(lineNum);
            
            // Get the full range of the line, including the line ending
            rangesToDelete.push(line.rangeIncludingLineBreak);
          }
        }
        
        // Delete ranges in reverse order (from bottom to top)
        // to avoid position shifts affecting other deletions
        for (let i = rangesToDelete.length - 1; i >= 0; i--) {
          builder.delete(rangesToDelete[i]);
        }
      }
    });
    
    // Now calculate adjusted selections
    for (const selection of originalSelections) {
      let anchorLine = selection.anchor.line;
      let anchorChar = selection.anchor.character;
      let activeLine = selection.active.line;
      let activeChar = selection.active.character;
      
      // Handle start point on an empty line
      if (deletedLines.has(anchorLine)) {
        // Find the next non-empty line
        let nextLine = anchorLine + 1;
        while (nextLine < document.lineCount && deletedLines.has(nextLine)) {
          nextLine++;
        }
        
        if (nextLine < document.lineCount) {
          // Move to the beginning of the next non-empty line
          anchorLine = nextLine;
          anchorChar = 0;
        } else {
          // If no next line, move to the end of the previous available line
          let prevLine = anchorLine - 1;
          while (prevLine >= 0 && deletedLines.has(prevLine)) {
            prevLine--;
          }
          anchorLine = prevLine >= 0 ? prevLine : 0;
          anchorChar = prevLine >= 0 ? document.lineAt(prevLine).text.length : 0;
        }
      }
      
      // Handle end point on an empty line
      if (deletedLines.has(activeLine)) {
        // Find the next non-empty line
        let nextLine = activeLine + 1;
        while (nextLine < document.lineCount && deletedLines.has(nextLine)) {
          nextLine++;
        }
        
        if (nextLine < document.lineCount) {
          // Move to the beginning of the next non-empty line
          activeLine = nextLine;
          activeChar = 0;
        } else {
          // If no next line, move to the end of the previous available line
          let prevLine = activeLine - 1;
          while (prevLine >= 0 && deletedLines.has(prevLine)) {
            prevLine--;
          }
          activeLine = prevLine >= 0 ? prevLine : 0;
          activeChar = prevLine >= 0 ? document.lineAt(prevLine).text.length : 0;
        }
      }
      
      // Adjust for lines deleted before this position
      let anchorLineOffset = 0;
      let activeLineOffset = 0;
      
      for (const deletedLine of deletedLines) {
        if (deletedLine < anchorLine) anchorLineOffset++;
        if (deletedLine < activeLine) activeLineOffset++;
      }
      
      const newAnchor = new vscode.Position(anchorLine - anchorLineOffset, anchorChar);
      const newActive = new vscode.Position(activeLine - activeLineOffset, activeChar);
      
      newSelections.push(new vscode.Selection(newAnchor, newActive));
    }
    
    // Set the adjusted selections
    _.selections = newSelections;
  });
}

/**
 * Select all numbers within current selections.
 * 
 * This is a helper function that finds whole numbers within each selection
 * and creates new selections that focus on just those numbers. It handles
 * negative numbers properly and avoids selecting decimal parts of numbers.
 */
export function selectNumbers(_: Context) {
  return _.run(() => {
    const document = _.document;
    const currentSelections = _.selections;
    const numberSelections: vscode.Selection[] = [];
    
    for (const selection of currentSelections) {
      const text = document.getText(selection);
      const selectionStart = document.offsetAt(selection.start);
      
      // Match all sequences of digits, including those with a leading minus sign
      // But don't match numbers after a decimal point
      const numberRegex = /(-?\d+)(?!\.\d)/g;
      
      let match;
      while ((match = numberRegex.exec(text)) !== null) {
        const matchStart = selectionStart + match.index;
        const matchEnd = matchStart + match[0].length;
        
        const startPos = document.positionAt(matchStart);
        const endPos = document.positionAt(matchEnd);
        
        numberSelections.push(new vscode.Selection(startPos, endPos));
      }
    }
    
    // If we found any numbers, update the selections
    if (numberSelections.length > 0) {
      _.selections = numberSelections;
    }
    // If no numbers were found, keep the original selections
  });
}

/**
 * Increment numbers within selections.
 * 
 * This function first selects all numbers within the current selections,
 * then increments those numbers by the specified amount.
 * If a repetitions count is provided, it will increment by that amount.
 */
export function number_increment(
  _: Context,
  repetitions: number,
) {
  return _.run(async () => {
    // First select all numbers
    await selectNumbers(_);
    
    // Track the selections and their new values
    const originalSelections = _.selections;
    const newSelections: vscode.Selection[] = [];
    
    // Then increment them
    await edit((builder, selections, document) => {
      for (let i = 0; i < selections.length; i++) {
        const selection = selections[i];
        const text = document.getText(selection);
        
        // Skip if not a valid number to avoid NaN
        if (!/^-?\d+$/.test(text)) {
          // Keep the original selection
          newSelections.push(selection);
          continue;
        }
        
        const num = parseInt(text, 10);
        const incremented = (num + repetitions).toString();
        
        // Record the new selection with adjusted length
        const startPos = selection.start;
        const endPos = document.positionAt(
          document.offsetAt(startPos) + incremented.length
        );
        newSelections.push(new vscode.Selection(startPos, endPos));
        
        // Replace with the new value
        builder.replace(selection, incremented);
      }
    });
    
    // Update selections to match the new values
    _.selections = newSelections;
  });
}

/**
 * Decrement numbers within selections.
 * 
 * This function first selects all numbers within the current selections,
 * then decrements those numbers by the specified amount.
 * If a repetitions count is provided, it will decrement by that amount.
 */
export function number_decrement(
  _: Context,
  repetitions: number,
) {
  return _.run(async () => {
    // First select all numbers
    await selectNumbers(_);
    
    // Track the selections and their new values
    const originalSelections = _.selections;
    const newSelections: vscode.Selection[] = [];
    
    // Then decrement them
    await edit((builder, selections, document) => {
      for (let i = 0; i < selections.length; i++) {
        const selection = selections[i];
        const text = document.getText(selection);
        
        // Skip if not a valid number to avoid NaN
        if (!/^-?\d+$/.test(text)) {
          // Keep the original selection
          newSelections.push(selection);
          continue;
        }
        
        const num = parseInt(text, 10);
        const decremented = (num - repetitions).toString();
        
        // Record the new selection with adjusted length
        const startPos = selection.start;
        const endPos = document.positionAt(
          document.offsetAt(startPos) + decremented.length
        );
        newSelections.push(new vscode.Selection(startPos, endPos));
        
        // Replace with the new value
        builder.replace(selection, decremented);
      }
    });
    
    // Update selections to match the new values
    _.selections = newSelections;
  });
}
