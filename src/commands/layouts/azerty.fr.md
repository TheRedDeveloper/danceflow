# Commands: `azerty`

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
<tr><td rowspan=32><a href="#edit"><code>edit</code></a></td><td><a href="#edit.align"><code>edit.align</code></a></td><td>Align selections</td><td><code>Shift+7</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
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
<tr><td><a href="#edit.replaceCharacters"><code>edit.replaceCharacters</code></a></td><td>Replace characters</td><td><code>R</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
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
<tr><td rowspan=1><a href="#jumppoint"><code>jumppoint</code></a></td><td><a href="#jumppoint.create"><code>jumppoint.create</code></a></td><td>Add current position to jump list</td><td></td></tr>
<tr><td rowspan=10><a href="#misc"><code>misc</code></a></td><td><a href="#cancel"><code>cancel</code></a></td><td>Cancel Danceflow operation</td><td><code>Escape</code> (<code>editorTextFocus && danceflow.mode == 'move' && !danceflow.isRecording && !markersNavigationVisible</code>)<code>Escape</code> (<code>editorTextFocus && danceflow.mode == 'input'</code>)</td></tr>
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
<tr><td rowspan=10><a href="#search"><code>search</code></a></td><td><a href="#search.next"><code>search.next</code></a></td><td>Select next match</td><td><code>N</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#search.search"><code>search.search</code></a></td><td>Search</td><td><code>/</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>NumPad_Divide</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../search.ts#L22"><code>search.backward</code></a></td><td>Search backward</td><td><code>Alt+/</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+/</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../search.ts#L23"><code>search.backward.extend</code></a></td><td>Search backward (extend)</td><td><code>Shift+Alt+/</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+/</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../search.ts#L21"><code>search.extend</code></a></td><td>Search (extend)</td><td><code>Shift+/</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>/</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../search.ts#L158"><code>search.next.add</code></a></td><td>Add next match</td><td><code>Shift+N</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>N</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../search.ts#L159"><code>search.previous</code></a></td><td>Select previous match</td><td><code>Alt+N</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+N</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../search.ts#L160"><code>search.previous.add</code></a></td><td>Add previous match</td><td><code>Shift+Alt+N</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+N</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../search.ts#L90"><code>search.selection.smart</code></a></td><td>Search current selection (smart)</td><td><code>Shift+8</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>NumPad_Multiply</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#search.selection"><code>search.selection</code></a></td><td>Search current selection</td><td><code>Shift+Alt+8</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+NumPad_Multiply</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td rowspan=42><a href="#seek"><code>seek</code></a></td><td><a href="#seek.enclosing"><code>seek.enclosing</code></a></td><td>Select to next enclosing character</td><td><code>M</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#seek.leap"><code>seek.leap</code></a></td><td>Leap forward</td><td></td></tr>
<tr><td><a href="#seek.object"><code>seek.object</code></a></td><td>Select object</td><td></td></tr>
<tr><td><a href="#seek.seek"><code>seek.seek</code></a></td><td>Select to character (excluded)</td><td><code>T</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L278"><code>seek.askObject</code></a></td><td>Select whole object</td><td><code>Alt+A</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+A</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)</td></tr>
<tr><td><a href="../seek.ts#L284"><code>seek.askObject.end</code></a></td><td>Select to whole object end</td><td><code>]</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L285"><code>seek.askObject.end.extend</code></a></td><td>Extend to whole object end</td><td><code>Shift+]</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L279"><code>seek.askObject.inner</code></a></td><td>Select inner object</td><td><code>Alt+I</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+I</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)</td></tr>
<tr><td><a href="../seek.ts#L286"><code>seek.askObject.inner.end</code></a></td><td>Select to inner object end</td><td><code>Alt+]</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L287"><code>seek.askObject.inner.end.extend</code></a></td><td>Extend to inner object end</td><td><code>Shift+Alt+]</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L282"><code>seek.askObject.inner.start</code></a></td><td>Select to inner object start</td><td><code>Alt+[</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L283"><code>seek.askObject.inner.start.extend</code></a></td><td>Extend to inner object start</td><td><code>Shift+Alt+[</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L280"><code>seek.askObject.start</code></a></td><td>Select to whole object start</td><td><code>[</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L281"><code>seek.askObject.start.extend</code></a></td><td>Extend to whole object start</td><td><code>Shift+[</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L33"><code>seek.backward</code></a></td><td>Select to character (excluded, backward)</td><td><code>Alt+T</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+T</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L98"><code>seek.enclosing.backward</code></a></td><td>Select to previous enclosing character</td><td><code>Alt+M</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L97"><code>seek.enclosing.extend</code></a></td><td>Extend to next enclosing character</td><td><code>Shift+M</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L99"><code>seek.enclosing.extend.backward</code></a></td><td>Extend to previous enclosing character</td><td><code>Shift+Alt+M</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L32"><code>seek.extend</code></a></td><td>Extend to character (excluded)</td><td><code>Shift+T</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>T</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L34"><code>seek.extend.backward</code></a></td><td>Extend to character (excluded, backward)</td><td><code>Shift+Alt+T</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+T</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L35"><code>seek.included</code></a></td><td>Select to character (included)</td><td><code>F</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L37"><code>seek.included.backward</code></a></td><td>Select to character (included, backward)</td><td><code>Alt+F</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+F</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L36"><code>seek.included.extend</code></a></td><td>Extend to character (included)</td><td><code>Shift+F</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>F</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L38"><code>seek.included.extend.backward</code></a></td><td>Extend to character (included, backward)</td><td><code>Shift+Alt+F</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+F</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L633"><code>seek.leap.backward</code></a></td><td>Leap backward</td><td></td></tr>
<tr><td><a href="../seek.ts#L581"><code>seek.syntax.child.experimental</code></a></td><td>Select child syntax object</td><td></td></tr>
<tr><td><a href="../seek.ts#L578"><code>seek.syntax.next.experimental</code></a></td><td>Select next syntax object</td><td></td></tr>
<tr><td><a href="../seek.ts#L580"><code>seek.syntax.parent.experimental</code></a></td><td>Select parent syntax object</td><td></td></tr>
<tr><td><a href="../seek.ts#L579"><code>seek.syntax.previous.experimental</code></a></td><td>Select previous syntax object</td><td></td></tr>
<tr><td><a href="../seek.ts#L193"><code>seek.word.backward</code></a></td><td>Select to previous word start</td><td><code>B</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L192"><code>seek.word.extend</code></a></td><td>Extend to next word start</td><td><code>Shift+W</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>W</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L194"><code>seek.word.extend.backward</code></a></td><td>Extend to previous word start</td><td><code>Shift+B</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>B</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L195"><code>seek.word.ws</code></a></td><td>Select to next non-whitespace word start</td><td><code>Alt+W</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+W</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L197"><code>seek.word.ws.backward</code></a></td><td>Select to previous non-whitespace word start</td><td><code>Alt+B</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+B</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L196"><code>seek.word.ws.extend</code></a></td><td>Extend to next non-whitespace word start</td><td><code>Shift+Alt+W</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+W</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L198"><code>seek.word.ws.extend.backward</code></a></td><td>Extend to previous non-whitespace word start</td><td><code>Shift+Alt+B</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+B</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L199"><code>seek.wordEnd</code></a></td><td>Select to next word end</td><td><code>E</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L200"><code>seek.wordEnd.extend</code></a></td><td>Extend to next word end</td><td><code>Shift+E</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>E</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../seek.ts#L201"><code>seek.wordEnd.ws</code></a></td><td>Select to next non-whitespace word end</td><td><code>Alt+E</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+E</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../seek.ts#L202"><code>seek.wordEnd.ws.extend</code></a></td><td>Extend to next non-whitespace word end</td><td><code>Shift+Alt+E</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+E</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#seek.syntax.experimental"><code>seek.syntax.experimental</code></a></td><td>Select syntax object</td><td></td></tr>
<tr><td><a href="#seek.word"><code>seek.word</code></a></td><td>Select to next word start</td><td><code>W</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td rowspan=49><a href="#select"><code>select</code></a></td><td><a href="#select.buffer"><code>select.buffer</code></a></td><td>Select whole buffer</td><td><code>Shift+5</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+5</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#select.firstVisibleLine"><code>select.firstVisibleLine</code></a></td><td>Select to first visible line</td><td></td></tr>
<tr><td><a href="#select.horizontally"><code>select.horizontally</code></a></td><td>Select horizontally</td><td></td></tr>
<tr><td><a href="#select.lastLine"><code>select.lastLine</code></a></td><td>Select to last line</td><td></td></tr>
<tr><td><a href="#select.lastVisibleLine"><code>select.lastVisibleLine</code></a></td><td>Select to last visible line</td><td></td></tr>
<tr><td><a href="#select.line.above"><code>select.line.above</code></a></td><td>Select line above</td><td></td></tr>
<tr><td><a href="#select.line.above.extend"><code>select.line.above.extend</code></a></td><td>Extend to line above</td><td></td></tr>
<tr><td><a href="#select.line.below"><code>select.line.below</code></a></td><td>Select line below</td><td></td></tr>
<tr><td><a href="#select.line.below.extend"><code>select.line.below.extend</code></a></td><td>Extend to line below</td><td><code>X</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>X</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#select.lineEnd"><code>select.lineEnd</code></a></td><td>Select to line end</td><td><code>Alt+L</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>End</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#select.lineStart"><code>select.lineStart</code></a></td><td>Select to line start</td><td><code>Alt+H</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Home</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#select.middleVisibleLine"><code>select.middleVisibleLine</code></a></td><td>Select to middle visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L510"><code>select.documentEnd.extend</code></a></td><td>Extend to last character</td><td></td></tr>
<tr><td><a href="../select.ts#L509"><code>select.documentEnd.jump</code></a></td><td>Jump to last character</td><td></td></tr>
<tr><td><a href="../select.ts#L42"><code>select.down.extend</code></a></td><td>Extend down</td><td><code>Shift+J</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Down</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>J</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)<code>Down</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L41"><code>select.down.jump</code></a></td><td>Jump down</td><td><code>J</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Down</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../select.ts#L463"><code>select.firstLine.extend</code></a></td><td>Extend to first line</td><td></td></tr>
<tr><td><a href="../select.ts#L462"><code>select.firstLine.jump</code></a></td><td>Jump to first line</td><td></td></tr>
<tr><td><a href="../select.ts#L575"><code>select.firstVisibleLine.extend</code></a></td><td>Extend to first visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L574"><code>select.firstVisibleLine.jump</code></a></td><td>Jump to first visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L46"><code>select.halfPageDown.extend</code></a></td><td>Half page down</td><td><code>Ctrl+D</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L45"><code>select.halfPageDown.jump</code></a></td><td>Half page down</td><td><code>Ctrl+D</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Ctrl+D</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)</td></tr>
<tr><td><a href="../select.ts#L48"><code>select.halfPageUp.extend</code></a></td><td>Half page up</td><td><code>Ctrl+U</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L47"><code>select.halfPageUp.jump</code></a></td><td>Half page up</td><td><code>Ctrl+U</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Ctrl+U</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)</td></tr>
<tr><td><a href="../select.ts#L554"><code>select.lastLine.extend</code></a></td><td>Extend to last line</td><td></td></tr>
<tr><td><a href="../select.ts#L553"><code>select.lastLine.jump</code></a></td><td>Jump to last line</td><td></td></tr>
<tr><td><a href="../select.ts#L609"><code>select.lastVisibleLine.extend</code></a></td><td>Extend to last visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L608"><code>select.lastVisibleLine.jump</code></a></td><td>Jump to last visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L229"><code>select.left.extend</code></a></td><td>Extend left</td><td><code>Shift+H</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Left</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>H</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)<code>Left</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L228"><code>select.left.jump</code></a></td><td>Jump left</td><td><code>H</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Left</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../select.ts#L508"><code>select.lineEnd.extend</code></a></td><td>Extend to line end</td><td><code>Shift+Alt+L</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+End</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>End</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L459"><code>select.lineStart.extend</code></a></td><td>Extend to line start</td><td><code>Shift+Alt+H</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Home</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Home</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L458"><code>select.lineStart.jump</code></a></td><td>Jump to line start</td><td></td></tr>
<tr><td><a href="../select.ts#L461"><code>select.lineStart.skipBlank.extend</code></a></td><td>Extend to line start (skip blank)</td><td></td></tr>
<tr><td><a href="../select.ts#L460"><code>select.lineStart.skipBlank.jump</code></a></td><td>Jump to line start (skip blank)</td><td></td></tr>
<tr><td><a href="../select.ts#L592"><code>select.middleVisibleLine.extend</code></a></td><td>Extend to middle visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L591"><code>select.middleVisibleLine.jump</code></a></td><td>Jump to middle visible line</td><td></td></tr>
<tr><td><a href="../select.ts#L50"><code>select.pageDown.extend</code></a></td><td>Page down</td><td><code>Ctrl+F</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L49"><code>select.pageDown.jump</code></a></td><td>Page down</td><td><code>Ctrl+F</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Ctrl+F</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)</td></tr>
<tr><td><a href="../select.ts#L52"><code>select.pageUp.extend</code></a></td><td>Page up</td><td><code>Ctrl+B</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L51"><code>select.pageUp.jump</code></a></td><td>Page up</td><td><code>Ctrl+B</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Ctrl+B</code> (<code>editorTextFocus && danceflow.mode == 'modify'</code>)</td></tr>
<tr><td><a href="../select.ts#L227"><code>select.right.extend</code></a></td><td>Extend right</td><td><code>Shift+L</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Right</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>L</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)<code>Right</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L226"><code>select.right.jump</code></a></td><td>Jump right</td><td><code>L</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Right</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../select.ts#L296"><code>select.to.extend</code></a></td><td>Extend to</td><td><code>Shift+G</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>G</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L295"><code>select.to.jump</code></a></td><td>Go to</td><td><code>G</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../select.ts#L44"><code>select.up.extend</code></a></td><td>Extend up</td><td><code>Shift+K</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Up</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>K</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)<code>Up</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../select.ts#L43"><code>select.up.jump</code></a></td><td>Jump up</td><td><code>K</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Up</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#select.to"><code>select.to</code></a></td><td>Select to</td><td></td></tr>
<tr><td><a href="#select.vertically"><code>select.vertically</code></a></td><td>Select vertically</td><td></td></tr>
<tr><td rowspan=37><a href="#selections"><code>selections</code></a></td><td><a href="#selections.changeDirection"><code>selections.changeDirection</code></a></td><td>Change direction of selections</td><td><code>Alt+;</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+;</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.changeOrder"><code>selections.changeOrder</code></a></td><td>Reverse selections</td><td></td></tr>
<tr><td><a href="#selections.copy"><code>selections.copy</code></a></td><td>Copy selections below</td><td><code>Shift+C</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+C</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.expandToLines"><code>selections.expandToLines</code></a></td><td>Expand to lines</td><td><code>X</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+X</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+X</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.filter"><code>selections.filter</code></a></td><td>Filter selections</td><td><code>Shift+4</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+4</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.merge"><code>selections.merge</code></a></td><td>Merge contiguous selections</td><td><code>Shift+Alt+-</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#selections.open"><code>selections.open</code></a></td><td>Open selected file</td><td></td></tr>
<tr><td><a href="#selections.pipe"><code>selections.pipe</code></a></td><td>Pipe selections</td><td><code>Shift+Alt+\</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Alt+\</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.reduce"><code>selections.reduce</code></a></td><td>Reduce selections to their cursor</td><td><code>;</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>;</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.restore"><code>selections.restore</code></a></td><td>Restore selections</td><td><code>Z</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#selections.restore.withCurrent"><code>selections.restore.withCurrent</code></a></td><td>Combine register selections with current ones</td><td><code>Alt+Z</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#selections.save"><code>selections.save</code></a></td><td>Save selections</td><td><code>Shift+Z</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#selections.saveText"><code>selections.saveText</code></a></td><td>Copy selections text</td><td><code>Y</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="#selections.select"><code>selections.select</code></a></td><td>Select within selections</td><td></td></tr>
<tr><td><a href="../selections.ts#L304"><code>selections.clear.main</code></a></td><td>Clear main selections</td><td><code>Alt+,</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+,</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L303"><code>selections.clear.secondary</code></a></td><td>Clear secondary selections</td><td><code>,</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>,</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L809"><code>selections.copy.above</code></a></td><td>Copy selections above</td><td><code>Shift+Alt+C</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Alt+C</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L661"><code>selections.faceBackward</code></a></td><td>Backward selections</td><td></td></tr>
<tr><td><a href="../selections.ts#L660"><code>selections.faceForward</code></a></td><td>Forward selections</td><td><code>Shift+Alt+;</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../selections.ts#L301"><code>selections.filter.regexp</code></a></td><td>Keep matching selections</td><td><code>Alt+K</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+K</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L302"><code>selections.filter.regexp.inverse</code></a></td><td>Clear matching selections</td><td><code>Shift+Alt+K</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Alt+K</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L887"><code>selections.hideIndices</code></a></td><td>Hide selection indices</td><td></td></tr>
<tr><td><a href="../selections.ts#L700"><code>selections.orderAscending</code></a></td><td>Order selections ascending</td><td></td></tr>
<tr><td><a href="../selections.ts#L699"><code>selections.orderDescending</code></a></td><td>Order selections descending</td><td></td></tr>
<tr><td><a href="../selections.ts#L258"><code>selections.pipe.append</code></a></td><td>Pipe and append</td><td><code>Shift+1</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+1</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L259"><code>selections.pipe.prepend</code></a></td><td>Pipe and prepend</td><td><code>Shift+Alt+1</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+Alt+1</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L257"><code>selections.pipe.replace</code></a></td><td>Pipe and replace</td><td><code>Shift+\</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+\</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L579"><code>selections.reduce.edges</code></a></td><td>Reduce selections to their ends</td><td><code>Shift+Alt+S</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)</td></tr>
<tr><td><a href="../selections.ts#L354"><code>selections.select.orLeap</code></a></td><td>Leap or select</td><td><code>S</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>S</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="../selections.ts#L886"><code>selections.showIndices</code></a></td><td>Show selection indices</td><td></td></tr>
<tr><td><a href="../selections.ts#L423"><code>selections.splitLines.orLeap.backward</code></a></td><td>Split selections at line boundaries or leap backwards</td><td><code>Alt+S</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+S</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.sort"><code>selections.sort</code></a></td><td>Sort selections</td><td></td></tr>
<tr><td><a href="#selections.split"><code>selections.split</code></a></td><td>Split selections</td><td><code>Shift+S</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+S</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.splitLines"><code>selections.splitLines</code></a></td><td>Split selections at line boundaries</td><td></td></tr>
<tr><td><a href="#selections.toggleIndices"><code>selections.toggleIndices</code></a></td><td>Toggle selection indices</td><td><code>Enter</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Enter</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.trimLines"><code>selections.trimLines</code></a></td><td>Trim lines</td><td><code>Alt+X</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Alt+X</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
<tr><td><a href="#selections.trimWhitespace"><code>selections.trimWhitespace</code></a></td><td>Trim whitespace</td><td><code>Shift+-</code> (<code>editorTextFocus && danceflow.mode == 'move'</code>)<code>Shift+-</code> (<code>editorTextFocus && danceflow.mode == 'select'</code>)</td></tr>
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

## [`jumppoint`](../jumppoint.ts)

Jumppoints are a way to navigate to a specific position in the editor.

<a name="jumppoint.create" />

### [`jumppoint.create`](../jumppoint.ts#L10-L13)

Add current position to jump list.

## [`misc`](../misc.ts)

Miscellaneous commands that don't deserve their own category.

By default, Danceflow also exports the following keybindings for existing
commands:

| Keybinding           | Command                                      |
| -------------------- | -------------------------------------------- |
| `s-;` (core: move) | `["workbench.action.showCommands", { ... }]` |

<a name="cancel" />

### [`cancel`](../misc.ts#L20-L25)

Cancel Danceflow operation.


This command:
- does not require an active text editor.

Default keybinding: `escape` (core: move, !recording, "!markersNavigationVisible")
`escape` (core: input)

<a name="ignore" />

### [`ignore`](../misc.ts#L31-L34)

Ignore key.

This command:
- does not require an active text editor.

<a name="run" />

### [`run`](../misc.ts#L40-L149)

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

### [`selectRegister`](../misc.ts#L185-L199)

Select register for next command.

When selecting a register, the next key press is used to determine what
register is selected. If this key is a `space` character, then a new key
press is awaited again and the returned register will be specific to the
current document.


This command:
- takes an input `register` of type `string | Register`.

Default keybinding: `"` (core: move)

<a name="updateRegister" />

### [`updateRegister`](../misc.ts#L215-L226)

Update the contents of a register.


This command:
- accepts a register (by default, it uses `dquote`).
- takes an input `input` of type `string`.

<a name="updateCount" />

### [`updateCount`](../misc.ts#L252-L281)

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

### [`openMenu`](../misc.ts#L309-L331)

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

### [`changeInput`](../misc.ts#L372-L386)

Change current input.

When showing some menus, Danceflow can navigate their history:

| Keybinding            | Command                                    |
| --------------------- | ------------------------------------------ |
| `up` (core: prompt)   | `[".changeInput", { action: "previous" }]` |
| `down` (core: prompt) | `[".changeInput", { action: "next"     }]` |


This command:
- does not require an active text editor.

<a name="ifEmpty" />

### [`ifEmpty`](../misc.ts#L396-L407)

Executes one of the specified commands depending on whether the current
selections are empty.

This command:
- accepts an argument of type `{}`.
- takes an argument `otherwise` of type `command.Any[]`.
- takes an argument `then` of type `command.Any[]`.

<a name="withCompleteSelection" />

### [`withCompleteSelection`](../misc.ts#L418-L425)

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

## [`search`](../search.ts)

Search for patterns and replace or add selections.

<a name="search.search" />

### [`search.search`](../search.ts#L14-L36)

Search.


| Title                    | Identifier        | Keybinding                                   | Command                                                |
| ------------------------ | ----------------- | -------------------------------------------- | ------------------------------------------------------ |
| Search (extend)          | `extend`          | `?` (kakoune: move), `/` (helix: select)   | `[".search", {                shift: "extend", ... }]` |
| Search backward          | `backward`        | `a-/` (kakoune: move), `?` (helix: move) | `[".search", { direction: -1                 , ... }]` |
| Search backward (extend) | `backward.extend` | `a-?` (kakoune: move), `?` (helix: select) | `[".search", { direction: -1, shift: "extend", ... }]` |

This command:
- accepts a register (by default, it uses `slash`).
- accepts an argument of type `{ re?: string | (RegExp & { originalSource?: string }) }`.
- may be repeated with a given number of repetitions.
- takes an argument `add` of type `boolean`.
- takes an argument `interactive` of type `boolean`.

Default keybinding: `/` (core: move)
`NumPad_Divide` (core: move)

<a name="search.selection" />

### [`search.selection`](../search.ts#L83-L98)

Search current selection.


| Title                            | Identifier        | Keybinding                                           | Command                                             |
| -------------------------------- | ----------------- | ---------------------------------------------------- | --------------------------------------------------- |
| Search current selection (smart) | `selection.smart` | `*` (core: move), `NumPad_Multiply` (core: move) | `[".search.selection", { smart: true, +register }]` |

This command:
- accepts a register (by default, it uses `slash`).
- takes an argument `smart` of type `boolean`.

Default keybinding: `a-*` (core: move)
`a-NumPad_Multiply` (core: move)

<a name="search.next" />

### [`search.next`](../search.ts#L151-L170)

Select next match.


| Title                 | Identifier     | Keybinding                                       | Command                                               |
| --------------------- | -------------- | ------------------------------------------------ | ----------------------------------------------------- |
| Add next match        | `next.add`     | `s-n` (kakoune: move), `n` (helix: select)     | `[".search.next", {                add: true, ... }]` |
| Select previous match | `previous`     | `a-n` (kakoune: move), `s-n` (helix: move)   | `[".search.next", { direction: -1           , ... }]` |
| Add previous match    | `previous.add` | `s-a-n` (kakoune: move), `s-n` (helix: select) | `[".search.next", { direction: -1, add: true, ... }]` |

This command:
- accepts a register (by default, it uses `slash`).
- may be repeated with a given number of repetitions.
- takes an argument `add` of type `boolean`.

Default keybinding: `n` (core: move)

## [`seek`](../seek.ts)

Update selections based on the text surrounding them.

#### Predefined keybindings

| Title                       | Keybinding          | Command                                                         |
| --------------------------- | ------------------- | --------------------------------------------------------------- |
| Open match menu             | `m` (helix: move) | `[".openMenu", { menu: "match"                              }]` |
| Open match menu with extend | `m` (helix: select) | `[".openMenu", { menu: "match", pass: [{ shift: "extend" }] }]` |

<a name="seek.seek" />

### [`seek.seek`](../seek.ts#L23-L48)

Select to character (excluded).


#### Variants

| Title                                    | Identifier                 | Keybinding                                       | Command                                                             |
| ---------------------------------------- | -------------------------- | ------------------------------------------------ | ------------------------------------------------------------------- |
| Extend to character (excluded)           | `extend`                   | `s-t` (kakoune: move), `t` (helix: select)     | `[".seek", {                shift: "extend"               , ... }]` |
| Select to character (excluded, backward) | `backward`                 | `a-t` (kakoune: move), `s-t` (helix: move)   | `[".seek", {                                 direction: -1, ... }]` |
| Extend to character (excluded, backward) | `extend.backward`          | `s-a-t` (kakoune: move), `s-t` (helix: select) | `[".seek", {                shift: "extend", direction: -1, ... }]` |
| Select to character (included)           | `included`                 | `f` (core: move)                               | `[".seek", { include: true                                , ... }]` |
| Extend to character (included)           | `included.extend`          | `s-f` (kakoune: move), `f` (helix: select)     | `[".seek", { include: true, shift: "extend"               , ... }]` |
| Select to character (included, backward) | `included.backward`        | `a-f` (kakoune: move), `s-f` (helix: move)   | `[".seek", { include: true,                  direction: -1, ... }]` |
| Extend to character (included, backward) | `included.extend.backward` | `s-a-f` (kakoune: move), `s-f` (helix: select) | `[".seek", { include: true, shift: "extend", direction: -1, ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `include` of type `boolean`.
- takes an input `input` of type `string`.

Default keybinding: `t` (core: move)

<a name="seek.enclosing" />

### [`seek.enclosing`](../seek.ts#L88-L108)

Select to next enclosing character.


#### Variants

| Title                                  | Identifier                  | Keybinding                | Command                                                        |
| -------------------------------------- | --------------------------- | ------------------------- | -------------------------------------------------------------- |
| Extend to next enclosing character     | `enclosing.extend`          | `s-m` (kakoune: move)   | `[".seek.enclosing", { shift: "extend"               , ... }]` |
| Select to previous enclosing character | `enclosing.backward`        | `a-m` (kakoune: move)   | `[".seek.enclosing", {                  direction: -1, ... }]` |
| Extend to previous enclosing character | `enclosing.extend.backward` | `s-a-m` (kakoune: move) | `[".seek.enclosing", { shift: "extend", direction: -1, ... }]` |

This command:
- takes an argument `open` of type `boolean`.
- takes an argument `pairs` of type `readonly string[]`.

Default keybinding: `m` (kakoune: move)

<a name="seek.word" />

### [`seek.word`](../seek.ts#L181-L212)

Select to next word start.

Select the word and following whitespaces on the right of the end of each selection.


#### Variants

| Title                                        | Identifier                | Keybinding                                       | Command                                                                               |
| -------------------------------------------- | ------------------------- | ------------------------------------------------ | ------------------------------------------------------------------------------------- |
| Extend to next word start                    | `word.extend`             | `s-w` (kakoune: move), `w` (helix: select)     | `[".seek.word", {                             shift: "extend"               , ... }]` |
| Select to previous word start                | `word.backward`           | `b` (core: move)                               | `[".seek.word", {                                              direction: -1, ... }]` |
| Extend to previous word start                | `word.extend.backward`    | `s-b` (kakoune: move), `b` (helix: select)     | `[".seek.word", {                             shift: "extend", direction: -1, ... }]` |
| Select to next non-whitespace word start     | `word.ws`                 | `a-w` (kakoune: move), `s-w` (helix: move)   | `[".seek.word", {                   ws: true                                , ... }]` |
| Extend to next non-whitespace word start     | `word.ws.extend`          | `s-a-w` (kakoune: move), `s-w` (helix: select) | `[".seek.word", {                   ws: true, shift: "extend"               , ... }]` |
| Select to previous non-whitespace word start | `word.ws.backward`        | `a-b` (kakoune: move), `s-b` (helix: move)   | `[".seek.word", {                   ws: true,                  direction: -1, ... }]` |
| Extend to previous non-whitespace word start | `word.ws.extend.backward` | `s-a-b` (kakoune: move), `s-b` (helix: select) | `[".seek.word", {                   ws: true, shift: "extend", direction: -1, ... }]` |
| Select to next word end                      | `wordEnd`                 | `e` (core: move)                               | `[".seek.word", { stopAtEnd: true                                           , ... }]` |
| Extend to next word end                      | `wordEnd.extend`          | `s-e` (kakoune: move), `e` (helix: select)     | `[".seek.word", { stopAtEnd: true ,           shift: "extend"               , ... }]` |
| Select to next non-whitespace word end       | `wordEnd.ws`              | `a-e` (kakoune: move), `s-e` (helix: move)   | `[".seek.word", { stopAtEnd: true , ws: true                                , ... }]` |
| Extend to next non-whitespace word end       | `wordEnd.ws.extend`       | `s-a-e` (kakoune: move), `s-e` (helix: select) | `[".seek.word", { stopAtEnd: true , ws: true, shift: "extend"               , ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `stopAtEnd` of type `boolean`.
- takes an argument `ws` of type `boolean`.

Default keybinding: `w` (core: move)

<a name="seek.object" />

### [`seek.object`](../seek.ts#L256-L298)

Select object.


#### Object patterns

- Pairs: `<regexp>(?#inner)<regexp>`.

- Character sets: `[<characters>]+`.

  - Can be preceded by `(?<before>[<characters>]+)` and followed by
    `(?<after>[<character>]+)` for whole objects.

- Matches that may only span a single line: `(?#singleline)<regexp>`.

- Predefined: `(?#predefined=<argument | paragraph | sentence>)`.

#### Variants

| Title                        | Identifier                     | Keybinding                                       | Command                                                                                       |
| ---------------------------- | ------------------------------ | ------------------------------------------------ | --------------------------------------------------------------------------------------------- |
| Select whole object          | `askObject`                    | `a-a` (kakoune: move), `a-a` (kakoune: modify) | `[".openMenu", { menu: "object",                          title: "Select whole object..." }]` |
| Select inner object          | `askObject.inner`              | `a-i` (kakoune: move), `a-i` (kakoune: modify) | `[".openMenu", { menu: "object", pass: [{ inner: true }], title: "Select inner object..." }]` |
| Select to whole object start | `askObject.start`              | `[` (kakoune: move)                            | `[".openMenu", { menu: "object", pass: [{              where: "start"                  }] }]` |
| Extend to whole object start | `askObject.start.extend`       | `{` (kakoune: move)                            | `[".openMenu", { menu: "object", pass: [{              where: "start", shift: "extend" }] }]` |
| Select to inner object start | `askObject.inner.start`        | `a-[` (kakoune: move)                          | `[".openMenu", { menu: "object", pass: [{ inner: true, where: "start"                  }] }]` |
| Extend to inner object start | `askObject.inner.start.extend` | `a-{` (kakoune: move)                          | `[".openMenu", { menu: "object", pass: [{ inner: true, where: "start", shift: "extend" }] }]` |
| Select to whole object end   | `askObject.end`                | `]` (kakoune: move)                            | `[".openMenu", { menu: "object", pass: [{              where: "end"                    }] }]` |
| Extend to whole object end   | `askObject.end.extend`         | `}` (kakoune: move)                            | `[".openMenu", { menu: "object", pass: [{              where: "end"  , shift: "extend" }] }]` |
| Select to inner object end   | `askObject.inner.end`          | `a-]` (kakoune: move)                          | `[".openMenu", { menu: "object", pass: [{ inner: true, where: "end"                    }] }]` |
| Extend to inner object end   | `askObject.inner.end.extend`   | `a-}` (kakoune: move)                          | `[".openMenu", { menu: "object", pass: [{ inner: true, where: "end"  , shift: "extend" }] }]` |

This command:
- takes an argument `inner` of type `boolean`.
- takes an argument `where` of type `"start" | "end"`.
- takes an input `input` of type `string`.

<a name="seek.syntax.experimental" />

### [`seek.syntax.experimental`](../seek.ts#L571-L590)

Select syntax object.

#### Variants

| Title                         | Identifier                     | Command                                                |
| ----------------------------- | ------------------------------ | ------------------------------------------------------ |
| Select next syntax object     | `syntax.next.experimental`     | `[".seek.syntax.experimental", { where: "next"     }]` |
| Select previous syntax object | `syntax.previous.experimental` | `[".seek.syntax.experimental", { where: "previous" }]` |
| Select parent syntax object   | `syntax.parent.experimental`   | `[".seek.syntax.experimental", { where: "parent"   }]` |
| Select child syntax object    | `syntax.child.experimental`    | `[".seek.syntax.experimental", { where: "child"    }]` |

This command:
- takes an argument `where` of type `"next" | "previous" | "parent" | "child"`.

<a name="seek.leap" />

### [`seek.leap`](../seek.ts#L624-L640)

Leap forward.

Inspired by [`leap.nvim`](https://github.com/ggandor/leap.nvim).

#### Variants

| Title         | Identifier      | Command                                  |
| ------------- | --------------- | ---------------------------------------- |
| Leap backward | `leap.backward` | `[".seek.leap", { direction: -1, ... }]` |

This command:
- takes an argument `labels` of type `string`.

## [`select`](../select.ts)

Update selections based on their position in the document.

<a name="select.buffer" />

### [`select.buffer`](../select.ts#L13-L18)

Select whole buffer.



Default keybinding: `%` (core: move; helix: select)

<a name="select.vertically" />

### [`select.vertically`](../select.ts#L31-L63)

Select vertically.


#### Variants

| Title       | Identifier    | Keybinding                                                                                        | Command                                                           |
| ----------- | ------------- | ------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------- |
| Jump down   | `down.jump`   | `j` (core: move)  , `down` (core: move)                                                       | `[".select.vertically", { direction:  1, shift: "jump"  , ... }]` |
| Extend down | `down.extend` | `s-j` (kakoune: move), `s-down` (kakoune: move), `j` (helix: select), `down` (helix: select)  | `[".select.vertically", { direction:  1, shift: "extend", ... }]` |
| Jump up     | `up.jump`     | `k` (core: move)  , `up` (core: move)                                                         | `[".select.vertically", { direction: -1, shift: "jump"  , ... }]` |
| Extend up   | `up.extend`   | `s-k` (kakoune: move), `s-up` (kakoune: move)  , `k` (helix: select), `up` (helix: select)    | `[".select.vertically", { direction: -1, shift: "extend", ... }]` |
| Half page down   | `halfPageDown.jump`   | `c-d` (core: move; core: modify)                                                | `[".select.vertically", { direction:  1, by: "halfPage", shift: "jump" }]`   |
| Half page down   | `halfPageDown.extend` | `c-d` (helix: select)                                                           | `[".select.vertically", { direction:  1, by: "halfPage", shift: "extend" }]` |
| Half page up     | `halfPageUp.jump`     | `c-u` (core: move; core: modify)                                                | `[".select.vertically", { direction: -1, by: "halfPage", shift: "jump" }]`   |
| Half page up     | `halfPageUp.extend`   | `c-u` (helix: select)                                                           | `[".select.vertically", { direction: -1, by: "halfPage", shift: "extend" }]` |
| Page down        | `pageDown.jump`       | `c-f` (core: move; core: modify)                                                | `[".select.vertically", { direction:  1, by: "page", shift: "jump" }]`      |
| Page down        | `pageDown.extend`     | `c-f` (helix: select)                                                           | `[".select.vertically", { direction:  1, by: "page", shift: "extend" }]`    |
| Page up          | `pageUp.jump`         | `c-b` (core: move; core: modify)                                                | `[".select.vertically", { direction: -1, by: "page", shift: "jump" }]`      |
| Page up          | `pageUp.extend`       | `c-b` (helix: select)                                                           | `[".select.vertically", { direction: -1, by: "page", shift: "extend" }]`    |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `avoidEol` of type `boolean`.
- takes an argument `by` of type `"page" | "halfPage"`.

<a name="select.horizontally" />

### [`select.horizontally`](../select.ts#L216-L238)

Select horizontally.


#### Variants

| Title        | Identifier     | Keybinding                                                                                         | Command                                                             |
| ------------ | -------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------- |
| Jump right   | `right.jump`   | `l` (core: move)  , `right` (core: move)                                                       | `[".select.horizontally", { direction:  1, shift: "jump"  , ... }]` |
| Extend right | `right.extend` | `s-l` (kakoune: move), `s-right` (kakoune: move), `l` (helix: select), `right` (helix: select) | `[".select.horizontally", { direction:  1, shift: "extend", ... }]` |
| Jump left    | `left.jump`    | `h` (core: move)  , `left` (core: move)                                                        | `[".select.horizontally", { direction: -1, shift: "jump"  , ... }]` |
| Extend left  | `left.extend`  | `s-h` (kakoune: move), `s-left` (kakoune: move), `h` (helix: select), `left` (helix: select)   | `[".select.horizontally", { direction: -1, shift: "extend", ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `avoidEol` of type `boolean`.

<a name="select.to" />

### [`select.to`](../select.ts#L285-L303)

Select to.

If a count is specified, this command will shift to the start of the given
line. If no count is specified, this command will shift open the `goto` menu.

#### Variants

| Title     | Identifier  | Keybinding                                   | Command                                    |
| --------- | ----------- | -------------------------------------------- | ------------------------------------------ |
| Go to     | `to.jump`   | `g` (core: move)                           | `[".select.to", { shift: "jump"  , ... }]` |
| Extend to | `to.extend` | `s-g` (kakoune: move), `g` (helix: select) | `[".select.to", { shift: "extend", ... }]` |

This command:
- accepts an argument of type `object`.
- may be repeated with a given number of repetitions.

<a name="select.line.below" />

### [`select.line.below`](../select.ts#L313-L316)

Select line below.

This command:
- may be repeated with a given number of repetitions.

<a name="select.line.below.extend" />

### [`select.line.below.extend`](../select.ts#L341-L346)

Extend to line below.


This command:
- may be repeated with a given number of repetitions.

Default keybinding: `x` (helix: move; helix: select)

<a name="select.line.above" />

### [`select.line.above`](../select.ts#L373-L376)

Select line above.

This command:
- may be repeated with a given number of repetitions.

<a name="select.line.above.extend" />

### [`select.line.above.extend`](../select.ts#L400-L403)

Extend to line above.

This command:
- may be repeated with a given number of repetitions.

<a name="select.lineStart" />

### [`select.lineStart`](../select.ts#L449-L471)

Select to line start.


#### Variants

| Title                             | Identifier                   | Keybinding                                                                    | Command                                                            |
| --------------------              | ------------------           | ----------------------------------------------------------------------------- | ------------------------------------------------------------------ |
| Jump to line start                | `lineStart.jump`             |                                                                               | `[".select.lineStart", {                  shift: "jump"  , ... }]` |
| Extend to line start              | `lineStart.extend`           | `s-a-h` (kakoune: move), `s-home` (kakoune: move), `home` (helix: select) | `[".select.lineStart", {                  shift: "extend", ... }]` |
| Jump to line start (skip blank)   | `lineStart.skipBlank.jump`   |                                                                               | `[".select.lineStart", { skipBlank: true, shift: "jump"  , ... }]` |
| Extend to line start (skip blank) | `lineStart.skipBlank.extend` |                                                                               | `[".select.lineStart", { skipBlank: true, shift: "extend", ... }]` |
| Jump to first line                | `firstLine.jump`             |                                                                               | `[".select.lineStart", { count: 0,        shift: "jump"  , ... }]` |
| Extend to first line              | `firstLine.extend`           |                                                                               | `[".select.lineStart", { count: 0,        shift: "extend", ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `skipBlank` of type `boolean`.

Default keybinding: `a-h` (kakoune: move)
`home` (core: move)

<a name="select.lineEnd" />

### [`select.lineEnd`](../select.ts#L496-L518)

Select to line end.



#### Variants

| Title                    | Identifier           | Keybinding                                                                  | Command                                                         |
| ------------------------ | -------------------- | --------------------------------------------------------------------------- | --------------------------------------------------------------- |
| Extend to line end       | `lineEnd.extend`     | `s-a-l` (kakoune: move), `s-end` (kakoune: move), `end` (helix: select) | `[".select.lineEnd", {                 shift: "extend", ... }]` |
| Jump to last character   | `documentEnd.jump`   |                                                                             | `[".select.lineEnd", { count: MAX_INT, shift: "jump"  , ... }]` |
| Extend to last character | `documentEnd.extend` |                                                                             | `[".select.lineEnd", { count: MAX_INT, shift: "extend", ... }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `lineBreak` of type `boolean`.

Default keybinding: `a-l` (kakoune: move)
`end` (core: move)

<a name="select.lastLine" />

### [`select.lastLine`](../select.ts#L546-L556)

Select to last line.

#### Variants

| Title               | Identifier        | Command                                     |
| ------------------- | ----------------- | ------------------------------------------- |
| Jump to last line   | `lastLine.jump`   | `[".select.lastLine", { shift: "jump"   }]` |
| Extend to last line | `lastLine.extend` | `[".select.lastLine", { shift: "extend" }]` |

<a name="select.firstVisibleLine" />

### [`select.firstVisibleLine`](../select.ts#L567-L577)

Select to first visible line.

#### Variants

| Title                        | Identifier                | Command                                             |
| ---------------------------- | ------------------------- | --------------------------------------------------- |
| Jump to first visible line   | `firstVisibleLine.jump`   | `[".select.firstVisibleLine", { shift: "jump"   }]` |
| Extend to first visible line | `firstVisibleLine.extend` | `[".select.firstVisibleLine", { shift: "extend" }]` |

<a name="select.middleVisibleLine" />

### [`select.middleVisibleLine`](../select.ts#L584-L594)

Select to middle visible line.

#### Variants

| Title                         | Identifier                 | Command                                              |
| ----------------------------- | -------------------------- | ---------------------------------------------------- |
| Jump to middle visible line   | `middleVisibleLine.jump`   | `[".select.middleVisibleLine", { shift: "jump"   }]` |
| Extend to middle visible line | `middleVisibleLine.extend` | `[".select.middleVisibleLine", { shift: "extend" }]` |

<a name="select.lastVisibleLine" />

### [`select.lastVisibleLine`](../select.ts#L601-L611)

Select to last visible line.

#### Variants

| Title                       | Identifier               | Command                                            |
| --------------------------- | ------------------------ | -------------------------------------------------- |
| Jump to last visible line   | `lastVisibleLine.jump`   | `[".select.lastVisibleLine", { shift: "jump"   }]` |
| Extend to last visible line | `lastVisibleLine.extend` | `[".select.lastVisibleLine", { shift: "extend" }]` |

## [`selections`](../selections.ts)

Interacting with selections.

<a name="selections.saveText" />

### [`selections.saveText`](../selections.ts#L21-L33)

Copy selections text.

| Keybindings         | Commands                                          |
| -----------         | --------                                          |
| `y` (helix: select) | `[".selections.saveText"], [".modes.set.move"]` |

This command:
- accepts a register (by default, it uses `dquote`).

Default keybinding: `y` (core: move)

<a name="selections.save" />

### [`selections.save`](../selections.ts#L37-L51)

Save selections.


This command:
- accepts a register (by default, it uses `caret`).
- takes an argument `style` of type `object`.
- takes an argument `untilDelay` of type `number`.
- takes an argument `until` of type `AutoDisposable.Event[]`.

Default keybinding: `s-z` (kakoune: move)

<a name="selections.restore" />

### [`selections.restore`](../selections.ts#L98-L106)

Restore selections.


This command:
- accepts a register (by default, it uses `caret`).

Default keybinding: `z` (kakoune: move)

<a name="selections.restore.withCurrent" />

### [`selections.restore.withCurrent`](../selections.ts#L118-L138)

Combine register selections with current ones.


The following keybinding is also available:

| Keybinding                | Command                                                       |
| ------------------------- | ------------------------------------------------------------- |
| `s-a-z` (kakoune: move) | `[".selections.restore.withCurrent", { reverse: true, ... }]` |

See https://github.com/mawww/kakoune/blob/master/doc/pages/keys.asciidoc#marks

This command:
- accepts a register (by default, it uses `caret`).
- takes an argument `action` of type `"a" | "u" | "i" | "<" | ">" | "+" | "-"`.
- takes an argument `reverse` of type `boolean`.

Default keybinding: `a-z` (kakoune: move)

<a name="selections.pipe" />

### [`selections.pipe`](../selections.ts#L244-L265)

Pipe selections.

Run the specified command or code with the contents of each selection, and
save the result to a register.

See https://github.com/mawww/kakoune/blob/master/doc/pages/keys.asciidoc#changes-through-external-programs

#### Additional commands

| Title               | Identifier     | Keybinding                          | Commands                                                                                                                    |
| ------------------- | -------------- | ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Pipe and replace    | `pipe.replace` | `\|` (core: move; helix: select)   | `[".selections.pipe", { +expression,register }], [".edit.insert", { register: "\|",                                  ... }]` |
| Pipe and append     | `pipe.append`  | `!` (core: move; helix: select)   | `[".selections.pipe", { +expression,register }], [".edit.insert", { register: "\|", where: "end"  , shift: "select", ... }]` |
| Pipe and prepend    | `pipe.prepend` | `a-!` (core: move; helix: select) | `[".selections.pipe", { +expression,register }], [".edit.insert", { register: "\|", where: "start", shift: "select", ... }]` |

This command:
- accepts a register (by default, it uses `pipe`).
- takes an input `expression` of type `string`.

Default keybinding: `a-|` (core: move; helix: select)

<a name="selections.filter" />

### [`selections.filter`](../selections.ts#L293-L314)

Filter selections.

#### Variants

| Title                      | Identifier              | Keybinding                            | Commands                                                                 |
| -------------------------- | ----------------------- | ------------------------------------- | ------------------------------------------------------------------------ |
| Keep matching selections   | `filter.regexp`         | `a-k` (core: move; helix: select)   | `[".selections.filter", { defaultExpression: "/"               , ... }]` |
| Clear matching selections  | `filter.regexp.inverse` | `s-a-k` (core: move; helix: select) | `[".selections.filter", { defaultExpression: "/", inverse: true, ... }]` |
| Clear secondary selections | `clear.secondary`       | `,` (core: move; helix: select)     | `[".selections.filter", { expression: "i === count"            , ... }]` |
| Clear main selections      | `clear.main`            | `a-,` (core: move; helix: select)   | `[".selections.filter", { expression: "i !== count"            , ... }]` |

This command:
- accepts an argument of type `{ expression?: string }`.
- may be repeated with a given number of repetitions.
- takes an argument `defaultExpression` of type `string`.
- takes an argument `interactive` of type `boolean`.
- takes an argument `inverse` of type `boolean`.

Default keybinding: `$` (core: move; helix: select)

<a name="selections.select" />

### [`selections.select`](../selections.ts#L347-L361)

Select within selections.

#### Variants

| Title          | Identifier      | Keybinding                        | Command                                                                                           |
| -------------- | --------------- | --------------------------------- | ------------------------------------------------------------------------------------------------- |
| Leap or select | `select.orLeap` | `s` (core: move; helix: select) | `[".ifEmpty", { then: [[".seek.leap", { ... }]], otherwise: [[".selections.select", { ... }]] }]` |

This command:
- accepts an argument of type `{ re?: string | RegExp }`.
- takes an argument `interactive` of type `boolean`.

<a name="selections.split" />

### [`selections.split`](../selections.ts#L380-L391)

Split selections.


This command:
- accepts an argument of type `{ re?: string | RegExp }`.
- takes an argument `excludeEmpty` of type `boolean`.
- takes an argument `interactive` of type `boolean`.

Default keybinding: `s-s` (core: move; helix: select)

<a name="selections.splitLines" />

### [`selections.splitLines`](../selections.ts#L416-L432)

Split selections at line boundaries.

#### Variants

| Title                   | Identifier                   | Keybinding                          | Command                                                                                                              |
| ----------------------- | ---------------------------- | ----------------------------------- | -------------------------------------------------------------------------------------------------------------------- |
| Split selections at line boundaries or leap backwards | `splitLines.orLeap.backward` | `a-s` (core: move; helix: select) | `[".ifEmpty", { then: [[".seek.leap", { direction: -1, ... }]], otherwise: [[".selections.splitLines", { ... }]] }]` |

This command:
- may be repeated with a given number of repetitions.
- takes an argument `excludeEol` of type `boolean`.

<a name="selections.expandToLines" />

### [`selections.expandToLines`](../selections.ts#L475-L482)

Expand to lines.

Expand selections to contain full lines (including end-of-line characters).



Default keybinding: `x` (kakoune: move)
`s-x` (helix: move; helix: select)

<a name="selections.trimLines" />

### [`selections.trimLines`](../selections.ts#L509-L516)

Trim lines.

Trim selections to only contain full lines (from start to line break).



Default keybinding: `a-x` (core: move; helix: select)

<a name="selections.trimWhitespace" />

### [`selections.trimWhitespace`](../selections.ts#L541-L548)

Trim whitespace.

Trim whitespace at beginning and end of selections.



Default keybinding: `_` (core: move; helix: select)

<a name="selections.reduce" />

### [`selections.reduce`](../selections.ts#L567-L586)

Reduce selections to their cursor.



#### Variant

| Title                           | Identifier     | Keybinding                | Command                                                        |
| ------------------------------- | -------------- | ------------------------- | -------------------------------------------------------------- |
| Reduce selections to their ends | `reduce.edges` | `s-a-s` (kakoune: move) | `[".selections.reduce", { where: "both", empty: false, ... }]` |

This command:
- takes an argument `empty` of type `boolean`.
- takes an argument `where` of type `"active" | "anchor" | "start" | "end" | "both"`.

Default keybinding: `;` (core: move; helix: select)

<a name="selections.changeDirection" />

### [`selections.changeDirection`](../selections.ts#L648-L663)

Change direction of selections.



#### Variants

| Title               | Identifier     | Keybinding              | Command                                              |
| ------------------- | -------------- | ----------------------- | ---------------------------------------------------- |
| Forward selections  | `faceForward`  | `a-:` (kakoune: move) | `[".selections.changeDirection", { direction:  1 }]` |
| Backward selections | `faceBackward` |                         | `[".selections.changeDirection", { direction: -1 }]` |


Default keybinding: `a-;` (core: move; helix: select)

<a name="selections.changeOrder" />

### [`selections.changeOrder`](../selections.ts#L688-L702)

Reverse selections.


#### Variants

| Title                       | Identifier        | Command                                          |
| --------------------------- | ----------------- | ------------------------------------------------ |
| Order selections descending | `orderDescending` | `[".selections.changeOrder", { direction:  1 }]` |
| Order selections ascending  | `orderAscending`  | `[".selections.changeOrder", { direction: -1 }]` |

<a name="selections.sort" />

### [`selections.sort`](../selections.ts#L715-L727)

Sort selections.



This command:
- takes an input `expression` of type `string`.

<a name="selections.copy" />

### [`selections.copy`](../selections.ts#L800-L818)

Copy selections below.


#### Variant

| Title                 | Identifier   | Keybinding                            | Command                                   |
| --------------------- | ------------ | ------------------------------------- | ----------------------------------------- |
| Copy selections above | `copy.above` | `s-a-c` (core: move; helix: select) | `[".selections.copy", { direction: -1 }]` |

This command:
- may be repeated with a given number of repetitions.

Default keybinding: `s-c` (core: move; helix: select)

<a name="selections.merge" />

### [`selections.merge`](../selections.ts#L852-L857)

Merge contiguous selections.



Default keybinding: `a-_` (kakoune: move)

<a name="selections.open" />

### [`selections.open`](../selections.ts#L861-L864)

Open selected file.

<a name="selections.toggleIndices" />

### [`selections.toggleIndices`](../selections.ts#L877-L894)

Toggle selection indices.


#### Variants

| Title                  | Identifier    | Command                                                  |
| ---------------------- | ------------- | -------------------------------------------------------- |
| Show selection indices | `showIndices` | `[".selections.toggleIndices", { display: true , ... }]` |
| Hide selection indices | `hideIndices` | `[".selections.toggleIndices", { display: false, ... }]` |

This command:
- takes an argument `display` of type `boolean | undefined`.
- takes an argument `until` of type `AutoDisposable.Event[]`.

Default keybinding: `enter` (core: move; helix: select)

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

