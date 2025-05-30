import * as vscode from "vscode";

import { executeCommand, ExpectedDocument, groupTestsByParentName } from "../utils";

suite("./test/suite/commands/edit-paste-many.md", function () {
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

  test("1 > paste-after-select", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      foo bar quux
      ^^^ 0   ^^^^ 2
          ^^^ 1
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.saveText");
    await executeCommand("danceflow.edit.paste.after.select");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/edit-paste-many.md:9:1", 6, String.raw`
      foofoo barbar quuxquux
         ^^^ 0          ^^^^ 2
                ^^^ 1
    `);
  });

  test("1 > paste-before-select", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      foo bar quux
      ^^^ 0   ^^^^ 2
          ^^^ 1
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.saveText");
    await executeCommand("danceflow.edit.paste.before.select");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/edit-paste-many.md:21:1", 6, String.raw`
      foofoo barbar quuxquux
      ^^^ 0         ^^^^ 2
             ^^^ 1
    `);
  });

  test("1 > paste-all-after-select", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      foo bar quux
      ^^^ 0   ^^^^ 2
          ^^^ 1
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.saveText");
    await executeCommand("danceflow.edit.pasteAll.after.select");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/edit-paste-many.md:33:1", 6, String.raw`
      fooquuxbarfoo barquuxbarfoo quuxquuxbarfoo
         ^^^^ 0 ^^^ 2  ^^^^ 3 ^^^ 5   ^^^^ 6 ^^^ 8
             ^^^ 1         ^^^ 4          ^^^ 7
    `);
  });

  test("1 > paste-all-before-select", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      foo bar quux
      ^^^ 0   ^^^^ 2
          ^^^ 1
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.saveText");
    await executeCommand("danceflow.edit.pasteAll.before.select");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/edit-paste-many.md:45:1", 6, String.raw`
      quuxbarfoofoo quuxbarfoobar quuxbarfooquux
      ^^^^ 0 ^^^ 2  ^^^^ 3 ^^^ 5  ^^^^ 6 ^^^ 8
          ^^^ 1         ^^^ 4         ^^^ 7
    `);
  });

  groupTestsByParentName(this);
});
