import * as vscode from "vscode";

import { executeCommand, ExpectedDocument, groupTestsByParentName } from "../utils";

suite("./test/suite/commands/switch-mode.md", function () {
  // Set up document.
  let document: vscode.TextDocument,
      editor: vscode.TextEditor;

  this.beforeAll(async () => {
    document = await vscode.workspace.openTextDocument({ language: "plaintext" });
    editor = await vscode.window.showTextDocument(document);
    editor.options.insertSpaces = true;
    editor.options.tabSize = 2;

    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "caret" });
  });

  this.afterAll(async () => {
    await executeCommand("workbench.action.closeActiveEditor");
  });

  test("1 > modify-before", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      abc def
        ^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "character" });
    await executeCommand("danceflow.modes.modify.before");
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "caret" });

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/switch-mode.md:10:1", 6, String.raw`
      abc def
        | 0
    `);
  });

  test("1 > modify-before > restore", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      abc def
        | 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "character" });
    await executeCommand("danceflow.modes.set.move");
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "caret" });

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/switch-mode.md:20:1", 6, String.raw`
      abc def
        ^ 0
    `);
  });

  test("1 > modify-after", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      abc def
        ^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "character" });
    await executeCommand("danceflow.modes.modify.after");
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "caret" });

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/switch-mode.md:30:1", 6, String.raw`
      abc def
         | 0
    `);
  });

  test("2 > modify-next-line-below", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      abc
      def
       ^ 0
      ghi
    `);

    // Perform all operations.
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "character" });
    await executeCommand("danceflow.edit.newLine.below.modify");
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "caret" });

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/switch-mode.md:54:1", 6, String.raw`
      abc
      def

      | 0
      ghi
    `);
  });

  test("2 > modify-next-line-above", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      abc
      def
       ^ 0
      ghi
    `);

    // Perform all operations.
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "character" });
    await executeCommand("danceflow.edit.newLine.above.modify");
    await executeCommand("danceflow.dev.setSelectionBehavior", { mode: "move", value: "caret" });

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/switch-mode.md:70:1", 6, String.raw`
      abc

      | 0
      def
      ghi
    `);
  });

  groupTestsByParentName(this);
});
