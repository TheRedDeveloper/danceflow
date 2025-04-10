import * as vscode from "vscode";

import { Context } from "../api";

/**
 * Inspects the symbol at the current cursor position.
 */
declare module "./inspect";

/**
 * Renames the inspected symbol to the content of the clipboard.
 */
export async function renameToClipboard(_: Context) {
  const uri = _.editor.document.uri;
  const position = _.mainSelection.active;
  const clipboardContent = await vscode.env.clipboard.readText();
  if (!clipboardContent) {
    return;
  }
  await vscode.commands.executeCommand("vscode.executeDocumentRenameProvider", uri, position, clipboardContent);
}