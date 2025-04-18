import * as vscode from "vscode";

import { executeCommand, ExpectedDocument, groupTestsByParentName } from "../utils";

suite("./test/suite/commands/selections-split.md", function () {
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

  test("1 > split", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      first line
      ^^^^^^^^^^^ 0
      second line
      ^^^^^^^^^^^^ 0
      third line
      ^^^^^^^^^^^ 0

    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.splitLines");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-split.md:13:1", 6, String.raw`
      first line
      ^^^^^^^^^^ 0
      second line
      ^^^^^^^^^^^ 1
      third line
      ^^^^^^^^^^ 2

    `);
  });

  test("2 > split", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      first line
      ^^^^^^^^^^^ 0
      second line
      ^^^^^ 0 ^^^^ 1
      third line
      ^^^^^ 1

    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.splitLines");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-split.md:40:1", 6, String.raw`
      first line
      ^^^^^^^^^^ 0
      second line
      ^^^^^ 1 ^^^ 2
      third line
      ^^^^^ 3

    `);
  });

  groupTestsByParentName(this);
});
