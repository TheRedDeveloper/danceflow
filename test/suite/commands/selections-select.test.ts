import * as vscode from "vscode";

import { executeCommand, ExpectedDocument, groupTestsByParentName } from "../utils";

suite("./test/suite/commands/selections-select.md", function () {
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

  test("1 > select", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      foo bar
      ^^^^^^^^ 0
      baz
      ^^^ 0
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.select", { re: "b" });

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-select.md:10:1", 6, String.raw`
      foo bar
          ^ 0
      baz
      ^ 1
    `);
  });

  groupTestsByParentName(this);
});
