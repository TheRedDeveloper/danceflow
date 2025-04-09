import * as vscode from "vscode";

import { executeCommand, ExpectedDocument, groupTestsByParentName } from "../utils";

suite("./test/suite/commands/selections-copy.md", function () {
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

  test("1 > copy", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      foo
      ^ 0
      bar
      baz
      qux
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.copy");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-copy.md:11:1", 6, String.raw`
      foo
      ^ 0
      bar
      ^ 1
      baz
      qux
    `);
  });

  test("1 > copy > x", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      foo
      ^ 0
      bar
      ^ 1
      baz
      qux
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.copy");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-copy.md:25:1", 6, String.raw`
      foo
      ^ 0
      bar
      ^ 1
      baz
      ^ 2
      qux
    `);
  });

  test("2 > copy", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      aaa aaa aaa
        bb bb bb bb
         ^ 0     ^^ 1
          cc cc cc cc
            ddd
           ee
          f
        gg gg gg gg gg
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.copy");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-copy.md:53:1", 6, String.raw`
      aaa aaa aaa
        bb bb bb bb
         ^ 0     ^^ 1
          cc cc cc cc
         ^ 2     ^^ 3
            ddd
           ee
          f
        gg gg gg gg gg
    `);
  });

  test("2 > copy > x", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      aaa aaa aaa
        bb bb bb bb
         ^ 0     ^^ 1
          cc cc cc cc
         ^ 2     ^^ 3
            ddd
           ee
          f
        gg gg gg gg gg
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.copy");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-copy.md:72:1", 6, String.raw`
      aaa aaa aaa
        bb bb bb bb
         ^ 0     ^^ 1
          cc cc cc cc
         ^ 2     ^^ 3
            ddd
         ^ 4
           ee
          f
        gg gg gg gg gg
                 ^^ 5
    `);
  });

  test("2 > copy > x > x", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      aaa aaa aaa
        bb bb bb bb
         ^ 0     ^^ 1
          cc cc cc cc
         ^ 2     ^^ 3
            ddd
         ^ 4
           ee
          f
        gg gg gg gg gg
                 ^^ 5
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.copy");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-copy.md:93:1", 6, String.raw`
      aaa aaa aaa
        bb bb bb bb
         ^ 0     ^^ 1
          cc cc cc cc
         ^ 2     ^^ 3
            ddd
         ^ 4
           ee
         ^ 5
          f
        gg gg gg gg gg
                 ^^ 6
    `);
  });

  test("3 > copy", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      ab
        ^ 0
      cd
      efg
      hi
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.copy");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-copy.md:125:1", 6, String.raw`
      ab
        ^ 0
      cd
        ^ 1
      efg
      hi
    `);
  });

  test("3 > copy > x", async function () {
    // Set-up document to be in expected initial state.
    await ExpectedDocument.apply(editor, 6, String.raw`
      ab
        ^ 0
      cd
        ^ 1
      efg
      hi
    `);

    // Perform all operations.
    await executeCommand("danceflow.selections.copy");

    // Ensure document is as expected.
    ExpectedDocument.assertEquals(editor, "./test/suite/commands/selections-copy.md:139:1", 6, String.raw`
      ab
        ^ 0
      cd
        ^ 1
      efg
        ^ 2
      hi
    `);
  });

  groupTestsByParentName(this);
});
