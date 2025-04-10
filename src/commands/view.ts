import * as vscode from "vscode";

import type { Argument } from ".";
import { Context, Selections } from "../api";
import { makeZen } from "../api/ui";

/**
 * Moving the editor view.
 *
 * #### Predefined keybindings
 *
 * | Title                   | Keybinding                                                    | Command                                              |
 * | ----------------------- | ------------------------------------------------------------- | ---------------------------------------------------- |
 * | Show view menu          | `v` (kakoune: move), `z` (helix: move; helix: select)     | `[".openMenu", { menu: "view", ...               }]` |
 * | Show view menu (locked) | `s-v` (kakoune: move), `s-z` (helix: move; helix: select) | `[".openMenu", { menu: "view", locked: true, ... }]` |
 */
declare module "./view";

/**
 * Reveals a position based on the main cursor.
 */
export function line(
  _: Context,
  at: Argument<"top" | "center" | "bottom"> = "center",
) {
  return vscode.commands.executeCommand(
    "revealLine",
    { at, lineNumber: Selections.activeLine(_.mainSelection) },
  );
}

/**
 * Zenmax the editor.
 */
export function zen() {
  makeZen();
}