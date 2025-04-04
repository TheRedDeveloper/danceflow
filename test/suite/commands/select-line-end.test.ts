import * as vscode from "vscode";

import { executeCommand, ExpectedDocument, groupTestsByParentName } from "../utils";

suite("./test/suite/commands/select-line-end.md", function () {
  // Set up document.
  let document: vscode.TextDocument,
      editor: vscode.TextEditor;

  this.beforeAll(async () => {
    document = await vscode.workspace.openTextDocument({ language: "plaintext" });
    editor = await vscode.window.showTextDocument(document);
    editor.options.insertSpaces = true;
    editor.options.tabSize = 2;

    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "normal", value: "caret" });
  });

  this.afterAll(async () => {
    await executeCommand("workbench.action.closeActiveEditor");
  });

  test("1 > line-start", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      the quick brown fox
                ^^^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.select.lineStart");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/select-line-end.md:8:1", 6, String.raw`
      the quick brown fox
      |^^^^^^^^^^^^ 0
    `);
  });

  test("1 > line-start-extend", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      the quick brown fox
                ^^^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.select.lineStart.extend");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/select-line-end.md:18:1", 6, String.raw`
      the quick brown fox
      |^^^^^^^^^ 0
    `);
  });

  test("1 > line-start-extend-character", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      the quick brown fox
                ^^^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "normal", value: "character" });
    await executeCommand("danceflow.select.lineStart.extend");
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/select-line-end.md:28:1", 6, String.raw`
      the quick brown fox
      |^^^^^^^^^^ 0
    `);
  });

  test("1 > line-end", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      the quick brown fox
                ^^^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.select.lineEnd");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/select-line-end.md:40:1", 6, String.raw`
      the quick brown fox
                   ^^^^^^ 0
    `);
  });

  test("1 > line-end-character", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      the quick brown fox
                ^^^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "normal", value: "character" });
    await executeCommand("danceflow.select.lineEnd");
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "normal", value: "caret" });

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/select-line-end.md:50:1", 6, String.raw`
      the quick brown fox
                  ^^^^^^^ 0
    `);
  });

  test("1 > line-end-extend", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      the quick brown fox
                ^^^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.select.lineEnd.extend");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/select-line-end.md:62:1", 6, String.raw`
      the quick brown fox
                ^^^^^^^^^ 0
    `);
  });

  groupTestsByParentName(this);
});
