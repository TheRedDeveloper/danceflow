import * as vscode from "vscode";

import { Context } from "../api";

/**
 * Jumppoints are a way to navigate to a specific position in the editor.
 */
declare module "./jumppoint";

/**
 * Add current position to jump list.
 */
export function create(_: Context) {
  const editor = vscode.window.activeTextEditor;
  if (editor) {
    const position = _.mainSelection.active;
    const oldSelections = editor.selections;
    editor.selections = [new vscode.Selection(position, position)];
    editor.selections = oldSelections;
  }
}