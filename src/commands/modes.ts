import type { InputOr } from ".";
import { Context, prompt, toMode } from "../api";

/**
 * Set modes.
 */
declare module "./modes";

/**
 * Set Danceflow mode.
 *
 * #### Variants
 *
 * | Title              | Identifier   | Keybinding                                                  | Command                                                     |
 * | ------------------ | ------------ | ----------------------------------------------------------- | ----------------------------------------------------------- |
 * | Set mode to Move | `set.move` | `escape` (core: insert; helix: select), `v` (helix: select) | `[".modes.set", { mode: "move" }], ["hideSuggestWidget"]` |
 * | Set mode to Insert | `set.insert` |                                                             | `[".modes.set", { mode: "insert" }]`                        |
 * | Set mode to Select | `set.select` | `v` (helix: move)                                         | `[".modes.set", { mode: "select" }]`                        |
 *
 * Other variants are provided to switch to insert mode:
 *
 * | Title                | Identifier         | Keybinding                          | Commands                                                                                                                                                                            |
 * | -------------------- | ------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
 * | Insert before        | `insert.before`    | `i` (core: move; helix: select)   | `[".selections.faceBackward", { record: false }],           [".modes.set", { mode: "insert", +mode }], [".selections.reduce", { where: "start", record: false, empty: true, ... }]` |
 * | Insert after         | `insert.after`     | `a` (core: move; helix: select)   | `[".selections.faceForward" , { record: false }],           [".modes.set", { mode: "insert", +mode }], [".selections.reduce", { where: "end"  , record: false, empty: true, ... }]` |
 * | Insert at line start | `insert.lineStart` | `s-i` (core: move; helix: select) | `[".select.lineStart", { shift: "jump", skipBlank: true }], [".modes.set", { mode: "insert", +mode }], [".selections.reduce", { where: "start", record: false, empty: true, ... }]` |
 * | Insert at line end   | `insert.lineEnd`   | `s-a` (core: move; helix: select) | `[".select.lineEnd"  , { shift: "jump"                  }], [".modes.set", { mode: "insert", +mode }], [".selections.reduce", { where: "end"  , record: false, empty: true, ... }]` |
 *
 * @noreplay
 */
export async function set(_: Context, modeOr: InputOr<"mode", string>) {
  await toMode(await modeOr(() => prompt(validateModeName())));
}

/**
 * Set Danceflow mode temporarily.
 *
 * #### Variants
 *
 * | Title                 | Identifier               | Keybindings             | Commands                                         |
 * | --------------------- | ------------------------ | ----------------------- | ------------------------------------------------ |
 * | Temporary Move mode | `set.temporarily.move` | `c-v` (kakoune: insert) | `[".modes.set.temporarily", { mode: "move" }]` |
 * | Temporary Insert mode | `set.temporarily.insert` | `c-v` (kakoune: move) | `[".modes.set.temporarily", { mode: "insert" }]` |
 *
 * @noreplay
 */
export async function set_temporarily(_: Context, modeOr: InputOr<"mode", string>, repetitions: number) {
  await toMode(await modeOr(() => prompt(validateModeName())), repetitions);
}

const modeHistory: string[] = [];

function validateModeName(ctx = Context.WithoutActiveEditor.current) {
  const modes = ctx.extension.modes;

  return {
    prompt: "Mode name",
    validateInput(value) {
      if (modes.get(value) !== undefined) {
        return;
      }

      return `mode ${JSON.stringify(value)} does not exist`;
    },
    placeHolder: [...modes.userModes()].map((m) => m.name).sort().join(", "),
    history: modeHistory,
  } as prompt.Options;
}
