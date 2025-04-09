import * as vscode from "vscode";

import { executeCommand, ExpectedDocument, groupTestsByParentName } from "../utils";

suite("./test/suite/commands/selections-rotate.md", function () {
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

  test("1 > rotate-by-1", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      0 3 1 2
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.rotate.both");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-rotate.md:9:1", 6, String.raw`
      2 0 3 1
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);
  });

  test("1 > rotate-contents-by-1", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      0 3 1 2
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.rotate.contents");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-rotate.md:20:1", 6, String.raw`
      2 0 3 1
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);
  });

  test("1 > rotate-selections-by-1", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      0 3 1 2
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.rotate.selections");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-rotate.md:31:1", 6, String.raw`
      0 3 1 2
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);
  });

  test("1 > rotate-by-1-reverse", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      0 3 1 2
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.rotate.both.reverse");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-rotate.md:42:1", 6, String.raw`
      3 1 2 0
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);
  });

  test("1 > rotate-contents-by-1-reverse", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      0 3 1 2
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.rotate.contents.reverse");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-rotate.md:53:1", 6, String.raw`
      3 1 2 0
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);
  });

  test("1 > rotate-selections-by-1-reverse", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      0 3 1 2
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.rotate.selections.reverse");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-rotate.md:64:1", 6, String.raw`
      0 3 1 2
      ^ 0 ^ 2
        ^ 1 ^ 3
    `);
  });

  groupTestsByParentName(this);
});
