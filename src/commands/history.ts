import * as vscode from "vscode";

import type { Argument, CommandDescriptor, RegisterOr } from ".";
import type { Context } from "../api";
import { ActiveRecording, Cursor, Entry } from "../state/recorder";
import type { Register } from "../state/registers";
import { ArgumentError } from "../utils/errors";
import { newRegExp } from "../utils/regexp";

/**
 * Interact with history.
 */
declare module "./history";

/**
 * Undo.
 *
 * @keys `u` (core: move; helix: select)
 */
export function undo() {
  return vscode.commands.executeCommand("undo");
}

/**
 * Redo.
 *
 * @keys `s-u` (core: move; helix: select)
 */
export function redo() {
  return vscode.commands.executeCommand("redo");
}

/**
 * Undo a change of selections.
 *
 * @keys `a-u` (kakoune: move)
 */
export function undo_selections() {
  return vscode.commands.executeCommand("cursorUndo");
}

/**
 * Redo a change of selections.
 *
 * @keys `s-a-u` (kakoune: move)
 */
export function redo_selections() {
  return vscode.commands.executeCommand("cursorRedo");
}

/**
 * Repeat last change.
 *
 * @noreplay
 *
 * | Title                        | Identifier         | Keybinding                          | Commands                                                                      |
 * | ---------------------------- | ------------------ | ------------------------------------| ----------------------------------------------------------------------------- |
 * | Repeat last selection change | `repeat.selection` |                                     | `[".history.repeat", { filter: "danceflow\\.(seek|select|selections)", +count }]` |
 * | Repeat last seek             | `repeat.seek`      | `a-.` (core: move; helix: select) | `[".history.repeat", { filter: "danceflow\\.seek", +count }]`                     |
 */
export async function repeat(
  _: Context,
  repetitions: number,

  filter: Argument<string | RegExp> = /.+/,
) {
  if (typeof filter === "string") {
    filter = newRegExp(filter, "u");
  }

  let commandDescriptor: CommandDescriptor,
      commandArgument: object;

  const cursor = _.extension.recorder.cursorFromEnd();

  for (;;) {
    if (cursor.is(Entry.ExecuteCommand)) {
      const entry = cursor.entry(),
            descriptor = entry.descriptor();

      if (descriptor.shouldBeReplayed && filter.test(descriptor.identifier)) {
        commandDescriptor = descriptor;
        commandArgument = entry.argument();
        break;
      }
    }

    if (!cursor.previous()) {
      throw new Error("no previous command matching " + filter);
    }
  }

  for (let i = 0; i < repetitions; i++) {
    await commandDescriptor.replay(_, commandArgument);
  }
}

/**
 * Repeat last edit without a command.
 *
 * @keys `.` (core: move), `NumPad_Decimal` (core: move)
 * @noreplay
 */
export async function repeat_edit(_: Context, repetitions: number) {
  _.doNotRecord();

  const recorder = _.extension.recorder,
        cursor = recorder.cursorFromEnd();
  let startCursor: Cursor | undefined,
      endCursor: Cursor | undefined;

  for (;;) {
    if (cursor.is(Entry.ChangeTextEditorMode)) {
      const modeName = cursor.entry().mode().name;

      if (modeName === "move") {
        cursor.previous();

        endCursor = cursor.clone();
      } else if (modeName === "modify" && endCursor !== undefined) {
        cursor.next();

        startCursor = cursor.clone();
        break;
      }
    }

    if (!cursor.previous()) {
      throw new Error("cannot find switch to move or modify mode");
    }
  }

  for (let i = 0; i < repetitions; i++) {
    for (let cursor = startCursor.clone(); cursor.isBeforeOrEqual(endCursor); cursor.next()) {
      await cursor.replay(_);
    }
  }
}

/**
 * Replay recording.
 *
 * @keys `q` (kakoune: move)
 * @noreplay
 */
export async function recording_play(
  _: Context.WithoutActiveEditor,

  repetitions: number,
  register: RegisterOr<"arobase", Register.Flags.CanReadWriteMacros>,
) {
  const recording = register.getRecording();

  ArgumentError.validate(
    "recording",
    recording !== undefined,
    () => `register "${register.name}" does not hold a recording`,
  );

  for (let i = 0; i < repetitions; i++) {
    await recording.replay(_);
  }
}

const recordingPerRegister = new WeakMap<Register, ActiveRecording>();

/**
 * Start recording.
 *
 * @keys `s-q` (kakoune: move, !recording)
 * @noreplay
 */
export function recording_start(
  _: Context,
  register: RegisterOr<"arobase", Register.Flags.CanReadWriteMacros>,
) {
  ArgumentError.validate(
    "register",
    !recordingPerRegister.has(register),
    "a recording is already active",
  );

  const recording = _.extension.recorder.startRecording();

  recordingPerRegister.set(register, recording);
}

/**
 * Stop recording.
 *
 * @keys `escape` (kakoune: move, recording), `s-q` (kakoune: move, recording)
 * @noreplay
 */
export function recording_stop(
  _: Context,
  register: RegisterOr<"arobase", Register.Flags.CanReadWriteMacros>,
) {
  const recording = recordingPerRegister.get(register);

  ArgumentError.validate(
    "register",
    recording !== undefined,
    "no recording is active in the given register",
  );

  recordingPerRegister.delete(register);
  register.setRecording(recording.complete());
}
