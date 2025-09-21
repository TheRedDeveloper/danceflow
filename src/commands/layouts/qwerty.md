# Commands: `qwerty`

<details>
<summary><b>Quick reference</b></summary>
<table>
<thead>
<tr>
<th>Category</th><th>Identifier</th><th>Title</th><th>Default keybindings</th>
</tr>
</thead>
<tbody>
<tr><td rowspan=2><a href="#dev"><code>dev</code></a></td><td><a href="#dev.copyLastErrorMessage"><code>dev.copyLastErrorMessage</code></a></td><td>Copies the last encountered error message</td><td></td></tr>
<tr><td><a href="#dev.setSelectionBehavior"><code>dev.setSelectionBehavior</code></a></td><td>Set the selection behavior of the specified mode</td><td></td></tr>
<tr><td rowspan=38><a href="#edit"><code>edit</code></a></td><td><a href="#edit.addSpace.after"><code>edit.addSpace.after</code></a></td><td>Add a space after each selection</td><td></td></tr>
<tr><td><a href="#edit.addSpace.before"><code>edit.addSpace.before</code></a></td><td>Add a space before each selection</td><td></td></tr>
<tr><td><a href="#edit.align"><code>edit.align</code></a></td><td>Align selections</td><td><code>Shift+7</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.case.swap"><code>edit.case.swap</code></a></td><td>Swap case</td><td><code>Alt+`</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+`</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.case.toLower"><code>edit.case.toLower</code></a></td><td>Transform to lower case</td><td><code>`</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.case.toUpper"><code>edit.case.toUpper</code></a></td><td>Transform to upper case</td><td><code>Shift+`</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+`</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.copyIndentation"><code>edit.copyIndentation</code></a></td><td>Copy indentation</td><td><code>Shift+Alt+7</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.deindent"><code>edit.deindent</code></a></td><td>Deindent selected lines</td><td><code>Shift+Alt+,</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.deindent.withIncomplete"><code>edit.deindent.withIncomplete</code></a></td><td>Deindent selected lines (including incomplete indent)</td><td><code>Shift+,</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../edit.ts#L43"><code>edit.delete</code></a></td><td>Delete</td><td><code>Alt+D</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../edit.ts#L44"><code>edit.delete-modify</code></a></td><td>Delete and switch to Modify</td><td><code>Alt+C</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../edit.ts#L413"><code>edit.newLine.above.modify</code></a></td><td>Insert new line above and switch to modify</td><td><code>Shift+O</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+O</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../edit.ts#L451"><code>edit.newLine.below.modify</code></a></td><td>Insert new line below and switch to modify</td><td><code>O</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>O</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../edit.ts#L36"><code>edit.paste.after</code></a></td><td>Paste after</td><td></td></tr>
<tr><td><a href="../edit.ts#L38"><code>edit.paste.after.select</code></a></td><td>Paste after and select</td><td><code>P</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../edit.ts#L35"><code>edit.paste.before</code></a></td><td>Paste before</td><td></td></tr>
<tr><td><a href="../edit.ts#L37"><code>edit.paste.before.select</code></a></td><td>Paste before and select</td><td><code>Shift+P</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../edit.ts#L40"><code>edit.pasteAll.after</code></a></td><td>Paste all after</td><td></td></tr>
<tr><td><a href="../edit.ts#L42"><code>edit.pasteAll.after.select</code></a></td><td>Paste all after and select</td><td><code>Alt+P</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../edit.ts#L39"><code>edit.pasteAll.before</code></a></td><td>Paste all before</td><td></td></tr>
<tr><td><a href="../edit.ts#L41"><code>edit.pasteAll.before.select</code></a></td><td>Paste all before and select</td><td><code>Shift+Alt+P</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../edit.ts#L53"><code>edit.replace</code></a></td><td>Replace</td><td></td></tr>
<tr><td><a href="../edit.ts#L34"><code>edit.selectRegister-insert</code></a></td><td>Pick register and replace</td><td><code>Ctrl+R</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Ctrl+R</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)</td></tr>
<tr><td><a href="../edit.ts#L45"><code>edit.yank-delete</code></a></td><td>Copy and delete</td><td><code>D</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../edit.ts#L46"><code>edit.yank-delete-modify</code></a></td><td>Copy, delete and switch to Modify</td><td><code>C</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>C</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../edit.ts#L47"><code>edit.yank-replace</code></a></td><td>Copy and replace</td><td><code>Shift+R</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.indent"><code>edit.indent</code></a></td><td>Indent selected lines</td><td><code>Shift+.</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.indent.withEmpty"><code>edit.indent.withEmpty</code></a></td><td>Indent selected lines (including empty lines)</td><td><code>Shift+Alt+.</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.insert"><code>edit.insert</code></a></td><td>Insert contents of register</td><td><code>Shift+Alt+R</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+R</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.join"><code>edit.join</code></a></td><td>Join lines</td><td><code>Alt+J</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+J</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+J</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#edit.join.select"><code>edit.join.select</code></a></td><td>Join lines and select inserted separators</td><td><code>Shift+Alt+J</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Alt+J</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#edit.newLine.above"><code>edit.newLine.above</code></a></td><td>Insert new line above each selection</td><td><code>Shift+Alt+O</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.newLine.below"><code>edit.newLine.below</code></a></td><td>Insert new line below each selection</td><td><code>Alt+O</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.number.decrement"><code>edit.number.decrement</code></a></td><td>Decrement numbers within selections</td><td></td></tr>
<tr><td><a href="#edit.number.increment"><code>edit.number.increment</code></a></td><td>Increment numbers within selections</td><td></td></tr>
<tr><td><a href="#edit.removeEmptyLines"><code>edit.removeEmptyLines</code></a></td><td>Remove empty lines from selections</td><td></td></tr>
<tr><td><a href="#edit.replaceCharacters"><code>edit.replaceCharacters</code></a></td><td>Replace characters</td><td><code>R</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#edit.selectNumbers"><code>edit.selectNumbers</code></a></td><td>Select all numbers within current selections</td><td></td></tr>
<tr><td rowspan=11><a href="#history"><code>history</code></a></td><td><a href="../history.ts#L59"><code>history.repeat.seek</code></a></td><td>Repeat last seek</td><td><code>Alt+.</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+.</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../history.ts#L58"><code>history.repeat.selection</code></a></td><td>Repeat last selection change</td><td></td></tr>
<tr><td><a href="#history.recording.play"><code>history.recording.play</code></a></td><td>Replay recording</td><td><code>Q</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#history.recording.start"><code>history.recording.start</code></a></td><td>Start recording</td><td><code>Shift+Q</code> (<code>editorTextFocus && danceflow.mode == 'move' && !danceflow.isRecording</code>)</td></tr>
<tr><td><a href="#history.recording.stop"><code>history.recording.stop</code></a></td><td>Stop recording</td><td><code>Escape</code> (<code>editorTextFocus && danceflow.mode == 'move' && danceflow.isRecording</code>)<code>Shift+Q</code> (<code>editorTextFocus && danceflow.mode == 'move' && danceflow.isRecording</code>)</td></tr>
<tr><td><a href="#history.redo"><code>history.redo</code></a></td><td>Redo</td><td><code>Shift+U</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+U</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#history.redo.selections"><code>history.redo.selections</code></a></td><td>Redo a change of selections</td><td><code>Shift+Alt+U</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#history.repeat"><code>history.repeat</code></a></td><td>Repeat last change</td><td></td></tr>
<tr><td><a href="#history.repeat.edit"><code>history.repeat.edit</code></a></td><td>Repeat last edit without a command</td><td><code>.</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>NumPad_Decimal</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#history.undo"><code>history.undo</code></a></td><td>Undo</td><td><code>U</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>U</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#history.undo.selections"><code>history.undo.selections</code></a></td><td>Undo a change of selections</td><td><code>Alt+U</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td rowspan=1><a href="#inspect"><code>inspect</code></a></td><td><a href="#inspect.renameToClipboard"><code>inspect.renameToClipboard</code></a></td><td>Renames the inspected symbol to the content of the clipboard</td><td></td></tr>
<tr><td rowspan=11><a href="#misc"><code>misc</code></a></td><td><a href="#cancel"><code>cancel</code></a></td><td>Cancel Danceflow operation</td><td><code>Escape</code> (<code>editorTextFocus && danceflow.mode == 'move' && !danceflow.isRecording && !markersNavigationVisible</code>)<code>Escape</code> (<code>editorTextFocus && danceflow.mode == 'input'</code>)</td></tr>
<tr><td><a href="#changeInput"><code>changeInput</code></a></td><td>Change current input</td><td></td></tr>
<tr><td><a href="#ifEmpty"><code>ifEmpty</code></a></td><td>Executes one of the specified commands depending on whether the current
selections are empty</td><td></td></tr>
<tr><td><a href="#ignore"><code>ignore</code></a></td><td>Ignore key</td><td></td></tr>
<tr><td><a href="#openMenu"><code>openMenu</code></a></td><td>Open menu</td><td></td></tr>
<tr><td><a href="#run"><code>run</code></a></td><td>Run code</td><td></td></tr>
<tr><td><a href="#selectRegister"><code>selectRegister</code></a></td><td>Select register for next command</td><td><code>Shift+'</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#updateCount"><code>updateCount</code></a></td><td>Update Danceflow count</td><td></td></tr>
<tr><td><a href="#updateRegister"><code>updateRegister</code></a></td><td>Update the contents of a register</td><td></td></tr>
<tr><td><a href="#withCompleteSelection"><code>withCompleteSelection</code></a></td><td>Execute a command with what is under the cursor selected too</td><td></td></tr>
<tr><td><a href="#withCompleteSelectionSpawning"><code>withCompleteSelectionSpawning</code></a></td><td>Execute a command with what is under the cursor selected too</td><td></td></tr>
<tr><td rowspan=12><a href="#modes"><code>modes</code></a></td><td><a href="../modes.ts#L26"><code>modes.modify.after</code></a></td><td>Modify after</td><td><code>A</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>A</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../modes.ts#L25"><code>modes.modify.before</code></a></td><td>Modify before</td><td><code>I</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>I</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../modes.ts#L28"><code>modes.modify.lineEnd</code></a></td><td>Modify at line end</td><td><code>Shift+A</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+A</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../modes.ts#L27"><code>modes.modify.lineStart</code></a></td><td>Modify at line start</td><td><code>Shift+I</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+I</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../modes.ts#L19"><code>modes.set.inspect</code></a></td><td>Set mode to Inspect</td><td></td></tr>
<tr><td><a href="../modes.ts#L17"><code>modes.set.modify</code></a></td><td>Set mode to Modify</td><td></td></tr>
<tr><td><a href="../modes.ts#L16"><code>modes.set.move</code></a></td><td>Set mode to Move</td><td><code>Escape</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)<code>Escape</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)<code>V</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../modes.ts#L18"><code>modes.set.select</code></a></td><td>Set mode to Select</td><td><code>V</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../modes.ts#L44"><code>modes.set.temporarily.modify</code></a></td><td>Temporary Modify mode</td><td><code>Ctrl+V</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../modes.ts#L43"><code>modes.set.temporarily.move</code></a></td><td>Temporary Move mode</td><td><code>Ctrl+V</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)</td></tr>
<tr><td><a href="#modes.set"><code>modes.set</code></a></td><td>Set Danceflow mode</td><td></td></tr>
<tr><td><a href="#modes.set.temporarily"><code>modes.set.temporarily</code></a></td><td>Set Danceflow mode temporarily</td><td></td></tr>
<tr><td rowspan=6><a href="#selections.rotate"><code>selections.rotate</code></a></td><td><a href="#selections.rotate.both"><code>selections.rotate.both</code></a></td><td>Rotate selections clockwise</td><td><code>Shift+Alt+0</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#selections.rotate.contents"><code>selections.rotate.contents</code></a></td><td>Rotate selections clockwise (contents only)</td><td><code>Shift+Alt+0</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Alt+0</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.rotate.selections"><code>selections.rotate.selections</code></a></td><td>Rotate selections clockwise (selections only)</td><td><code>Shift+0</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+0</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.rotate.ts#L18"><code>selections.rotate.both.reverse</code></a></td><td>Rotate selections counter-clockwise</td><td><code>Shift+Alt+9</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../selections.rotate.ts#L37"><code>selections.rotate.contents.reverse</code></a></td><td>Rotate selections counter-clockwise (contents only)</td><td><code>Shift+Alt+9</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Alt+9</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.rotate.ts#L56"><code>selections.rotate.selections.reverse</code></a></td><td>Rotate selections counter-clockwise (selections only)</td><td><code>Shift+9</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+9</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td rowspan=2><a href="#view"><code>view</code></a></td><td><a href="#view.line"><code>view.line</code></a></td><td>Reveals a position based on the main cursor</td><td></td></tr>
<tr><td><a href="#view.zen"><code>view.zen</code></a></td><td>Zenmax the editor</td><td></td></tr>
</tbody>
</table>

</details>

## [`dev`](../dev.ts)

Developer utilities for Danceflow.

<a name="dev.setSelectionBehavior" />

### [`dev.setSelectionBehavior`](../dev.ts#L12-L21)

Set the selection behavior of the specified mode.

This command:
- takes an argument `mode` of type `string`.
- takes an argument `value` of type `"caret" | "character"`.

<a name="dev.copyLastErrorMessage" />

### [`dev.copyLastErrorMessage`](../dev.ts#L36-L39)

Copies the last encountered error message.

This command:
- does not require an active text editor.

## [`edit`](../edit.ts)

Perform changes on the text content of the document.

See https://github.com/mawww/kakoune/blob/master/doc/pages/keys.asciidoc#changes.

<a name="edit.insert" />

### [`edit.insert`](../edit.ts#L15-L67)

Insert contents of register.

A `where` argument may be specified to state where the text should be
inserted relative to each selection. If unspecified, each selection will be
replaced by the text.

Specify `"shift": "select"` to select the inserted selection,
`"shift": "extend"` to extend to the inserted text, and nothing to keep the
current selections.

Specify `all` to paste all contents next to each selection.


#### Additional commands

| Title                              | Identifier               | Keybinding                                       | Commands                                                                                                                       |
| ---------------------------------- | ------------------------ | ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| Pick register and replace          | `selectRegister-insert`  | `c-r` (kakoune: move), `c-r` (kakoune: modify) | `[".selectRegister", { +register }], [".edit.insert", { ... }]`                                                                |
| Paste before                       | `paste.before`           |                                                  | `[".edit.insert", { handleNewLine: true, where: "start", ... }]`                                                               |
| Paste after                        | `paste.after`            |                                                  | `[".edit.insert", { handleNewLine: true, where: "end"  , ... }]`                                                               |
| Paste before and select            | `paste.before.select`    | `s-p` (core: move)                             | `[".edit.insert", { handleNewLine: true, where: "start", shift: "select", ... }]`                                              |
| Paste after and select             | `paste.after.select`     | `p` (core: move)                               | `[".edit.insert", { handleNewLine: true, where: "end"  , shift: "select", ... }]`                                              |
| Paste all before                   | `pasteAll.before`        |                                                  | `[".edit.insert", { handleNewLine: true, where: "start", all: true, ... }]`                                                    |
| Paste all after                    | `pasteAll.after`         |                                                  | `[".edit.insert", { handleNewLine: true, where: "end"  , all: true, ... }]`                                                    |
| Paste all before and select        | `pasteAll.before.select` | `s-a-p` (kakoune: move)                        | `[".edit.insert", { handleNewLine: true, where: "start", all: true, shift: "select", ... }]`                                   |
| Paste all after and select         | `pasteAll.after.select`  | `a-p` (kakoune: move)                          | `[".edit.insert", { handleNewLine: true, where: "end"  , all: true, shift: "select", ... }]`                                   |
| Delete                             | `delete`                 | `a-d` (core: move)                             | `[".edit.insert", { register: "_", ... }]`                                                                                     |
| Delete and switch to Modify        | `delete-modify`          | `a-c` (kakoune: move)                          | `[".modes.set", { mode: "modify", +mode }], [".edit.insert", { register: "_", ... }]`                                          |
| Copy and delete                    | `yank-delete`            | `d` (core: move)                               | `[".selections.saveText", { +register }],                                            [".edit.insert", { register: "_", ... }]` |
| Copy, delete and switch to Modify  | `yank-delete-modify`     | `c` (core: move; helix: select)                | `[".selections.saveText", { +register }], [".modes.set.modify"], [".edit.insert", { register: "_", ... }]` |
| Copy and replace                   | `yank-replace`           | `s-r` (kakoune: move)                          | `[".selections.saveText", { register: "tmp" }], [".edit.insert"], [".updateRegister", { copyFrom: "tmp", ... }]`               |
|                                    |                          | `s-r` (helix: select)                            | `[".edit.insert"], [".modes.set.move"]`                                                                                        |
|                                    |                          | `a-d` (helix: select)                            | `[".edit.delete"], [".modes.set.move"]`                                                                                        |
|                                    |                          | `d` (helix: select)                              | `[".edit.yank-delete"], [".modes.set.move"]`                                                                                  |
|                                    |                          | `s-p` (helix: select)                            | `[".edit.paste.before"], [".modes.set.move"]`                                                                                 |
|                                    |                          | `p` (helix: select)                              | `[".edit.paste.after"], [".modes.set.move"]`                                                                                  |
| Replace                            | `replace`                |                                                  | `[".edit.insert"]`                                                                                                          |

This command:
- accepts a register (by default, it uses `dquote`).
- may be repeated with a given number of repetitions.
- takes an argument `adjust` of type `boolean`.
- takes an argument `all` of type `boolean`.
- takes an argument `handleNewLine` of type `boolean`.
- takes an argument `shift` of type `Shift`.
- takes an argument `text` of type `string`.
- takes an argument `where` of type `"active" | "anchor" | "start" | "end" | undefined`.

Default keybinding: `s-a-r` (kakoune: move)
`s-r` (helix: move)

<a name="edit.join" />

### [`edit.join`](../edit.ts#L139-L144)

Join lines.


This command:
- takes an argument `separator` of type `string`.

Default keybinding: `a-j` (kakoune: move)
`s-j` (helix: move; helix: select)

<a name="edit.join.select" />

### [`edit.join.select`](../edit.ts#L148-L153)

Join lines and select inserted separators.


This command:
- takes an argument `separator` of type `string`.

Default keybinding: `s-a-j` (core: move; helix: select)

<a name="edit.indent" />

### [`edit.indent`](../edit.ts#L157-L165)

Indent selected lines.

| Keybindings         | Commands                                  |
| -----------         | --------                                  |
| `>` (helix: select) | `[".edit.indent"], [".modes.set.move"]` |

This command:
- may be repeated with a given number of repetitions.

Default keybinding: `>` (core: move)

<a name="edit.indent.withEmpty" />

### [`edit.indent.withEmpty`](../edit.ts#L169-L174)

Indent selected lines (including empty lines).


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `a->` (kakoune: move)

<a name="edit.deindent" />

### [`edit.deindent`](../edit.ts#L178-L183)

Deindent selected lines.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `a-<` (kakoune: move)

<a name="edit.deindent.withIncomplete" />

### [`edit.deindent.withIncomplete`](../edit.ts#L187-L195)

Deindent selected lines (including incomplete indent).

| Keybindings         | Commands                                    |
| -----------         | --------                                    |
| `<` (helix: select) | `[".edit.deindent"], [".modes.set.move"]` |

This command:
- may be repeated with a given number of repetitions.

Default keybinding: `<` (core: move)

<a name="edit.case.toLower" />

### [`edit.case.toLower`](../edit.ts#L199-L207)

Transform to lower case.

| Keybindings             | Commands                                        |
| -----------             | --------                                        |
| `` ` `` (helix: select) | `[".edit.case.toLower"], [".modes.set.move"]` |


Default keybinding: `` ` `` (core: move)

<a name="edit.case.toUpper" />

### [`edit.case.toUpper`](../edit.ts#L211-L219)

Transform to upper case.

| Keybindings               | Commands                                        |
| -----------               | --------                                        |
| `` a-` `` (helix: select) | `[".edit.case.toUpper"], [".modes.set.move"]` |


Default keybinding: `` s-` `` (kakoune: move)
`` a-` `` (helix: move)

<a name="edit.case.swap" />

### [`edit.case.swap`](../edit.ts#L223-L231)

Swap case.

| Keybindings               | Commands                                     |
| -----------               | --------                                     |
| `` s-` `` (helix: select) | `[".edit.case.swap"], [".modes.set.move"]` |


Default keybinding: `` a-` `` (kakoune: move)
`` s-` `` (helix: move)

<a name="edit.replaceCharacters" />

### [`edit.replaceCharacters`](../edit.ts#L246-L258)

Replace characters.

| Keybindings         | Commands                                             |
| -----------         | --------                                             |
| `r` (helix: select) | `[".edit.replaceCharacters"], [".modes.set.move"]` |

This command:
- may be repeated with a given number of repetitions.
- takes an input `input` of type `string`.

Default keybinding: `r` (core: move)

<a name="edit.align" />

### [`edit.align`](../edit.ts#L301-L309)

Align selections.

Align selections, aligning the cursor of each selection by inserting spaces
before the first character of each selection.


This command:
- takes an argument `fill` of type `string`.

Default keybinding: `&` (core: move)

<a name="edit.copyIndentation" />

### [`edit.copyIndentation`](../edit.ts#L359-L372)

Copy indentation.

Copy the indentation of the main selection (or the count one if a count is
given) to all other ones.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `a-&` (kakoune: move)

<a name="edit.newLine.above" />

### [`edit.newLine.above`](../edit.ts#L401-L419)

Insert new line above each selection.

Specify `"shift": "select"` to select the inserted selections, and nothing to
keep the current selections.


#### Additional keybindings

| Title                                      | Identifier             | Keybinding                          | Commands                                                                          |
| ------------------------------------------ | ---------------------- | ------------------------------------| --------------------------------------------------------------------------------- |
| Insert new line above and switch to modify | `newLine.above.modify` | `s-o` (core: move; helix: select) | `[".edit.newLine.above", { shift: "select" }], [".modes.modify.before", { ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `shift` of type `Shift`.

Default keybinding: `s-a-o` (kakoune: move)

<a name="edit.newLine.below" />

### [`edit.newLine.below`](../edit.ts#L439-L457)

Insert new line below each selection.

Specify `"shift": "select"` to select the inserted selections, and nothing to
keep the current selections.


#### Additional keybindings

| Title                                      | Identifier             | Keybinding                        | Commands                                                                          |
| ------------------------------------------ | ---------------------- | --------------------------------- | --------------------------------------------------------------------------------- |
| Insert new line below and switch to modify | `newLine.below.modify` | `o` (core: move; helix: select) | `[".edit.newLine.below", { shift: "select" }], [".modes.modify.before", { ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `shift` of type `Shift`.

Default keybinding: `a-o` (kakoune: move)

<a name="edit.addSpace.before" />

### [`edit.addSpace.before`](../edit.ts#L572-L578)

Add a space before each selection.

This command:
- may be repeated with a given number of repetitions.

<a name="edit.addSpace.after" />

### [`edit.addSpace.after`](../edit.ts#L586-L592)

Add a space after each selection.

This command:
- may be repeated with a given number of repetitions.

<a name="edit.removeEmptyLines" />

### [`edit.removeEmptyLines`](../edit.ts#L600-L609)

Remove empty lines from selections.

Removes all empty or whitespace-only lines that are within each selection.

<a name="edit.selectNumbers" />

### [`edit.selectNumbers`](../edit.ts#L737-L744)

Select all numbers within current selections.

This is a helper function that finds whole numbers within each selection
and creates new selections that focus on just those numbers. It handles
negative numbers properly and avoids selecting decimal parts of numbers.

<a name="edit.number.increment" />

### [`edit.number.increment`](../edit.ts#L778-L788)

Increment numbers within selections.

This function first selects all numbers within the current selections,
then increments those numbers by the specified amount.
If a repetitions count is provided, it will increment by that amount.

This command:
- may be repeated with a given number of repetitions.

<a name="edit.number.decrement" />

### [`edit.number.decrement`](../edit.ts#L830-L840)

Decrement numbers within selections.

This function first selects all numbers within the current selections,
then decrements those numbers by the specified amount.
If a repetitions count is provided, it will decrement by that amount.

This command:
- may be repeated with a given number of repetitions.

## [`history`](../history.ts)

Interact with history.

<a name="history.undo" />

### [`history.undo`](../history.ts#L15-L20)

Undo.


This command:
- does not require an active text editor.

Default keybinding: `u` (core: move; helix: select)

<a name="history.redo" />

### [`history.redo`](../history.ts#L24-L29)

Redo.


This command:
- does not require an active text editor.

Default keybinding: `s-u` (core: move; helix: select)

<a name="history.undo.selections" />

### [`history.undo.selections`](../history.ts#L33-L38)

Undo a change of selections.


This command:
- does not require an active text editor.

Default keybinding: `a-u` (kakoune: move)

<a name="history.redo.selections" />

### [`history.redo.selections`](../history.ts#L42-L47)

Redo a change of selections.


This command:
- does not require an active text editor.

Default keybinding: `s-a-u` (kakoune: move)

<a name="history.repeat" />

### [`history.repeat`](../history.ts#L51-L66)

Repeat last change.


| Title                        | Identifier         | Keybinding                          | Commands                                                                      |
| ---------------------------- | ------------------ | ------------------------------------| ----------------------------------------------------------------------------- |
| Repeat last selection change | `repeat.selection` |                                     | `[".history.repeat", { filter: "danceflow\\.(seek\|select\|selections)", +count }]` |
| Repeat last seek             | `repeat.seek`      | `a-.` (core: move; helix: select) | `[".history.repeat", { filter: "danceflow\\.seek", +count }]`                     |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `filter` of type `string | RegExp`.

<a name="history.repeat.edit" />

### [`history.repeat.edit`](../history.ts#L98-L104)

Repeat last edit without a command.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `.` (core: move)
`NumPad_Decimal` (core: move)

<a name="history.recording.play" />

### [`history.recording.play`](../history.ts#L140-L151)

Replay recording.


This command:
- accepts a register (by default, it uses `arobase`).
- does not require an active text editor.
- may be repeated with a given number of repetitions.

Default keybinding: `q` (kakoune: move)

<a name="history.recording.start" />

### [`history.recording.start`](../history.ts#L167-L176)

Start recording.


This command:
- accepts a register (by default, it uses `arobase`).

Default keybinding: `s-q` (kakoune: move, !recording)

<a name="history.recording.stop" />

### [`history.recording.stop`](../history.ts#L188-L197)

Stop recording.


This command:
- accepts a register (by default, it uses `arobase`).

Default keybinding: `escape` (kakoune: move, recording)
`s-q` (kakoune: move, recording)

## [`inspect`](../inspect.ts)

Inspects the symbol at the current cursor position.

<a name="inspect.renameToClipboard" />

### [`inspect.renameToClipboard`](../inspect.ts#L10-L13)

Renames the inspected symbol to the content of the clipboard.

## [`misc`](../misc.ts)

Miscellaneous commands that don't deserve their own category.

By default, Danceflow also exports the following keybindings for existing
commands:

| Keybinding           | Command                                      |
| -------------------- | -------------------------------------------- |
| `s-;` (core: move) | `["workbench.action.showCommands", { ... }]` |

<a name="cancel" />

### [`cancel`](../misc.ts#L21-L26)

Cancel Danceflow operation.


This command:
- does not require an active text editor.

Default keybinding: `escape` (core: move, !recording, "!markersNavigationVisible")
`escape` (core: input)

<a name="ignore" />

### [`ignore`](../misc.ts#L32-L35)

Ignore key.

This command:
- does not require an active text editor.

<a name="run" />

### [`run`](../misc.ts#L41-L150)

Run code.

There are two ways to invoke this command. The first one is to provide an
`code` string argument. This code must be a valid JavaScript string, and will
be executed with full access to the [Danceflow API](../api/README.md). For
instance,

```json
{
  "command": "danceflow.run",
  "args": {
    "code": "Selections.set(Selections.filter(text => text.includes('foo')))",
  },
},
```

If no argument is provided, a prompt will be shown asking for an input.
Furthermore, an array of strings can be passed to make longer functions
easier to read:

```json
{
  "command": "danceflow.run",
  "args": {
    "code": [
      "for (const selection of Selections.current) {",
      "  console.log(text(selection));",
      "}",
    ],
  },
},
```

The second way to use this command is with the `commands` argument. This
argument must be an array of "command-like" values. The simplest
"command-like" value is a string corresponding to the command itself:

```json
{
  "command": "danceflow.run",
  "args": {
    "commands": [
      "danceflow.modes.set.move",
    ],
  },
},
```

But arguments can also be provided by passing an array:

```json
{
  "command": "danceflow.run",
  "args": {
    "commands": [
      ["danceflow.modes.set", { "mode": "move" }],
    ],
  },
},
```

Or by passing an object, like regular VS Code key bindings:

```json
{
  "command": "danceflow.run",
  "args": {
    "commands": [
      {
        "command": "danceflow.modes.set",
        "args": { "mode": "move" },
      },
    ],
  },
},
```

These values can be mixed:

```json
{
  "command": "danceflow.run",
  "args": {
    "commands": [
      ["danceflow.selections.saveText", { "register": "^" }],
      {
        "command": "danceflow.modes.set",
        "args": { "mode": "move" },
      },
      "hideSuggestWidget",
    ],
  },
},
```

If both `code` and `commands` are given, Danceflow will use `code` if arbitrary
code execution is enabled, or `commands` otherwise.

This command:
- accepts a register (by default, it uses `null`).
- accepts an argument of type `{ code?: string | readonly string[] }`.
- may be repeated with a given number of repetitions.
- may be repeated with a given number of repetitions.
- takes an argument `commands` of type `command.Any[]`.
- takes an input `code` of type `string | readonly string[]`.

<a name="selectRegister" />

### [`selectRegister`](../misc.ts#L186-L200)

Select register for next command.

When selecting a register, the next key press is used to determine what
register is selected. If this key is a `space` character, then a new key
press is awaited again and the returned register will be specific to the
current document.


This command:
- takes an input `register` of type `string | Register`.

Default keybinding: `"` (core: move)

<a name="updateRegister" />

### [`updateRegister`](../misc.ts#L216-L227)

Update the contents of a register.


This command:
- accepts a register (by default, it uses `dquote`).
- takes an input `input` of type `string`.

<a name="updateCount" />

### [`updateCount`](../misc.ts#L253-L282)

Update Danceflow count.

Update the current counter used to repeat the next command.

#### Additional keybindings

| Title                          | Keybinding                                                                 | Command                              |
| ------------------------------ | -------------------------------------------------------------------------- | ------------------------------------ |
| Add the digit 0 to the counter | `0` (core: move; helix: select), `NumPad0` (core: move; helix: select) | `[".updateCount", { addDigits: 0 }]` |
| Add the digit 1 to the counter | `1` (core: move; helix: select), `NumPad1` (core: move; helix: select) | `[".updateCount", { addDigits: 1 }]` |
| Add the digit 2 to the counter | `2` (core: move; helix: select), `NumPad2` (core: move; helix: select) | `[".updateCount", { addDigits: 2 }]` |
| Add the digit 3 to the counter | `3` (core: move; helix: select), `NumPad3` (core: move; helix: select) | `[".updateCount", { addDigits: 3 }]` |
| Add the digit 4 to the counter | `4` (core: move; helix: select), `NumPad4` (core: move; helix: select) | `[".updateCount", { addDigits: 4 }]` |
| Add the digit 5 to the counter | `5` (core: move; helix: select), `NumPad5` (core: move; helix: select) | `[".updateCount", { addDigits: 5 }]` |
| Add the digit 6 to the counter | `6` (core: move; helix: select), `NumPad6` (core: move; helix: select) | `[".updateCount", { addDigits: 6 }]` |
| Add the digit 7 to the counter | `7` (core: move; helix: select), `NumPad7` (core: move; helix: select) | `[".updateCount", { addDigits: 7 }]` |
| Add the digit 8 to the counter | `8` (core: move; helix: select), `NumPad8` (core: move; helix: select) | `[".updateCount", { addDigits: 8 }]` |
| Add the digit 9 to the counter | `9` (core: move; helix: select), `NumPad9` (core: move; helix: select) | `[".updateCount", { addDigits: 9 }]` |


This command:
- may be repeated with a given number of repetitions.
- takes an argument `addDigits` of type `number`.
- takes an input `count` of type `number`.

<a name="openMenu" />

### [`openMenu`](../misc.ts#L310-L332)

Open menu.

If no menu is specified, a prompt will ask for the name of the menu to open.

Alternatively, a `menu` can be inlined in the arguments.

Pass a `prefix` argument to insert the prefix string followed by the typed
key if it does not match any menu entry. This can be used to implement chords
like `jj`.


This command:
- does not require an active text editor.
- takes an argument `delay` of type `number`.
- takes an argument `locked` of type `boolean`.
- takes an argument `pass` of type `any[]`.
- takes an argument `prefix` of type `string`.
- takes an argument `title` of type `string`.
- takes an input `menu` of type `string | Menu`.

<a name="changeInput" />

### [`changeInput`](../misc.ts#L373-L387)

Change current input.

When showing some menus, Danceflow can navigate their history:

| Keybinding            | Command                                    |
| --------------------- | ------------------------------------------ |
| `up` (core: prompt)   | `[".changeInput", { action: "previous" }]` |
| `down` (core: prompt) | `[".changeInput", { action: "next"     }]` |


This command:
- does not require an active text editor.

<a name="ifEmpty" />

### [`ifEmpty`](../misc.ts#L397-L408)

Executes one of the specified commands depending on whether the current
selections are empty.

This command:
- accepts an argument of type `{}`.
- takes an argument `otherwise` of type `command.Any[]`.
- takes an argument `then` of type `command.Any[]`.

<a name="withCompleteSelection" />

### [`withCompleteSelection`](../misc.ts#L431-L438)

Execute a command with what is under the cursor selected too.

<a name="withCompleteSelectionSpawning" />

### [`withCompleteSelectionSpawning`](../misc.ts#L452-L459)

Execute a command with what is under the cursor selected too.

## [`modes`](../modes.ts)

Set modes.

<a name="modes.set" />

### [`modes.set`](../modes.ts#L9-L32)

Set Danceflow mode.

#### Variants

| Title              | Identifier   | Keybinding                                                  | Command                                                     |
| ------------------ | ------------ | ----------------------------------------------------------- | ----------------------------------------------------------- |
| Set mode to Move | `set.move` | `escape` (core: modify; helix: select), `v` (helix: select) | `[".modes.set", { mode: "move" }], ["hideSuggestWidget"]` |
| Set mode to Modify | `set.modify` |                                                             | `[".modes.set", { mode: "modify" }]`                        |
| Set mode to Select | `set.select` | `v` (helix: move)                                         | `[".modes.set", { mode: "select" }]`                        |
| Set mode to Inspect | `set.inspect` |                                                           | `[".modes.set", { mode: "inspect" }]`                        |

Other variants are provided to switch to modify mode:

| Title                | Identifier         | Keybinding                          | Commands                                                                                                                                                                            |
| -------------------- | ------------------ | ----------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Modify before        | `modify.before`    | `i` (core: move; helix: select)   | `[".selections.faceBackward", { record: false }],           [".modes.set", { mode: "modify", +mode }], [".selections.reduce", { where: "start", record: false, empty: true, ... }]` |
| Modify after         | `modify.after`     | `a` (core: move; helix: select)   | `[".selections.faceForward" , { record: false }],           [".modes.set", { mode: "modify", +mode }], [".selections.reduce", { where: "end"  , record: false, empty: true, ... }]` |
| Modify at line start | `modify.lineStart` | `s-i` (core: move; helix: select) | `[".select.lineStart", { shift: "jump", skipBlank: true }], [".modes.set", { mode: "modify", +mode }], [".selections.reduce", { where: "start", record: false, empty: true, ... }]` |
| Modify at line end   | `modify.lineEnd`   | `s-a` (core: move; helix: select) | `[".select.lineEnd"  , { shift: "jump"                  }], [".modes.set", { mode: "modify", +mode }], [".selections.reduce", { where: "end"  , record: false, empty: true, ... }]` |


This command:
- takes an input `mode` of type `string`.

<a name="modes.set.temporarily" />

### [`modes.set.temporarily`](../modes.ts#L36-L48)

Set Danceflow mode temporarily.

#### Variants

| Title                 | Identifier               | Keybindings             | Commands                                         |
| --------------------- | ------------------------ | ----------------------- | ------------------------------------------------ |
| Temporary Move mode | `set.temporarily.move` | `c-v` (kakoune: modify) | `[".modes.set.temporarily", { mode: "move" }]` |
| Temporary Modify mode | `set.temporarily.modify` | `c-v` (kakoune: move) | `[".modes.set.temporarily", { mode: "modify" }]` |


This command:
- may be repeated with a given number of repetitions.
- takes an input `mode` of type `string`.

## [`selections.rotate`](../selections.rotate.ts)

Rotate selection indices and contents.

<a name="selections.rotate.both" />

### [`selections.rotate.both`](../selections.rotate.ts#L9-L20)

Rotate selections clockwise.


The following keybinding is also available:

| Title                               | Identifier     | Keybinding              | Command                                          |
| ----------------------------------- | -------------- | ----------------------- | ------------------------------------------------ |
| Rotate selections counter-clockwise | `both.reverse` | `a-(` (kakoune: move) | `[".selections.rotate.both", { reverse: true }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `reverse` of type `boolean`.

Default keybinding: `a-)` (kakoune: move)

<a name="selections.rotate.contents" />

### [`selections.rotate.contents`](../selections.rotate.ts#L28-L39)

Rotate selections clockwise (contents only).


The following command is also available:

| Title                                               | Identifier         | Keybinding                           | Command                                              |
| --------------------------------------------------- | ------------------ | ------------------------------------ | ---------------------------------------------------- |
| Rotate selections counter-clockwise (contents only) | `contents.reverse` | `a-(` (helix: move; helix: select) | `[".selections.rotate.contents", { reverse: true }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `reverse` of type `boolean`.

Default keybinding: `a-)` (helix: move; helix: select)

<a name="selections.rotate.selections" />

### [`selections.rotate.selections`](../selections.rotate.ts#L47-L58)

Rotate selections clockwise (selections only).


The following keybinding is also available:

| Title                                                 | Identifier           | Keybinding                        | Command                                                |
| ----------------------------------------------------- | -------------------- | --------------------------------- | ------------------------------------------------------ |
| Rotate selections counter-clockwise (selections only) | `selections.reverse` | `(` (core: move; helix: select) | `[".selections.rotate.selections", { reverse: true }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `reverse` of type `boolean`.

Default keybinding: `)` (core: move; helix: select)

## [`view`](../view.ts)

Moving the editor view.

#### Predefined keybindings

| Title                   | Keybinding                                                    | Command                                              |
| ----------------------- | ------------------------------------------------------------- | ---------------------------------------------------- |
| Show view menu          | `v` (kakoune: move), `z` (helix: move; helix: select)     | `[".openMenu", { menu: "view", ...               }]` |
| Show view menu (locked) | `s-v` (kakoune: move), `s-z` (helix: move; helix: select) | `[".openMenu", { menu: "view", locked: true, ... }]` |

<a name="view.line" />

### [`view.line`](../view.ts#L19-L25)

Reveals a position based on the main cursor.

This command:
- takes an argument `at` of type `"top" | "center" | "bottom"`.

<a name="view.zen" />

### [`view.zen`](../view.ts#L32-L35)

Zenmax the editor.

This command:
- does not require an active text editor.

