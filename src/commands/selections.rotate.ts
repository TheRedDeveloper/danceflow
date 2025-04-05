import type { Argument } from ".";
import { Context, rotate, rotateContents, rotateSelections } from "../api";

/**
 * Rotate selection indices and contents.
 */
declare module "./selections.rotate";

/**
 * Rotate selections clockwise.
 *
 * @keys `a-)` (kakoune: move)
 *
 * The following keybinding is also available:
 *
 * | Title                               | Identifier     | Keybinding              | Command                                          |
 * | ----------------------------------- | -------------- | ----------------------- | ------------------------------------------------ |
 * | Rotate selections counter-clockwise | `both.reverse` | `a-(` (kakoune: move) | `[".selections.rotate.both", { reverse: true }]` |
 */
export function both(_: Context, repetitions: number, reverse: Argument<boolean> = false) {
  if (reverse) {
    repetitions = -repetitions;
  }

  return rotate(repetitions);
}

/**
 * Rotate selections clockwise (contents only).
 *
 * @keys `a-)` (helix: move; helix: select)
 *
 * The following command is also available:
 *
 * | Title                                               | Identifier         | Keybinding                           | Command                                              |
 * | --------------------------------------------------- | ------------------ | ------------------------------------ | ---------------------------------------------------- |
 * | Rotate selections counter-clockwise (contents only) | `contents.reverse` | `a-(` (helix: move; helix: select) | `[".selections.rotate.contents", { reverse: true }]` |
 */
export function contents(_: Context, repetitions: number, reverse: Argument<boolean> = false) {
  if (reverse) {
    repetitions = -repetitions;
  }

  return rotateContents(repetitions);
}

/**
 * Rotate selections clockwise (selections only).
 *
 * @keys `)` (core: move; helix: select)
 *
 * The following keybinding is also available:
 *
 * | Title                                                 | Identifier           | Keybinding                        | Command                                                |
 * | ----------------------------------------------------- | -------------------- | --------------------------------- | ------------------------------------------------------ |
 * | Rotate selections counter-clockwise (selections only) | `selections.reverse` | `(` (core: move; helix: select) | `[".selections.rotate.selections", { reverse: true }]` |
 */
export function selections(_: Context, repetitions: number, reverse: Argument<boolean> = false) {
  if (reverse) {
    repetitions = -repetitions;
  }

  return rotateSelections(repetitions);
}
