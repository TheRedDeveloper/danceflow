/**
 * Default keybindings for Danceflow extension.
 * Organized by priority groups:
 * 1. Global
 * 2. Inspect
 * 3. Interact
 * 4. Change
 * 5. SelectedMove
 * 6. Move
 */

export type KeyBinding = string[];

export type KeybindingGroups = {
  global: Record<string, KeyBinding>
  inspect: Record<string, KeyBinding>
  interact: Record<string, KeyBinding>
  change: Record<string, KeyBinding>
  selectedMove: Record<string, KeyBinding>
  move: Record<string, KeyBinding>
}

export const editorDefaultKeybindings: KeybindingGroups = {
  global: {
    // Mode switching
    "danceflow.cancel": [`esc`],
    "danceflow.modes.set.move": [`esc`],
    
    // Tool panels
    "danceflow.togglePanel.git": [`⇧1`, `⎈⇧g`],
    "danceflow.togglePanel.explorer": [`⇧2`, `⎈⇧e`],
    "danceflow.togglePanel.chat": [`⇧3`, `⎈⇧c`],
    "danceflow.togglePanel.search": [`⇧4`, `⎈⇧s`],
    "danceflow.togglePanel.testing": [`⇧5`, `⎈⇧t`],
    "danceflow.togglePanel.extensions": [`⇧6`, `⎈⇧x`],
    
    // Windows
    "workbench.action.moveEditorToNewWindow": [`⎈p`],
    "workbench.action.moveEditorToFirstGroup": [`⎈⎇p`],
    "workbench.action.newWindow": [`⎈m`],
    
    // Search
    "workbench.action.quickTextSearch": [`⎈⇧f`],
    "workbench.action.showAllSymbols": [`⎈t`],
    "actions.find": [`⎈f`],
    "editor.action.startFindReplaceAction": [`⎈⎇f`],
    "editor.action.nextMatchFindAction": [`n`],
    "editor.action.previousMatchFindAction": [`⇧n`],
    
    // Tabs
    "workbench.action.quickOpenNavigateNextInEditorPicker": [`⎈tab`],
    "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup": [`⎈⇧tab`],
    "workbench.action.closeActiveEditor": [`⎈w`],
    
    // Files
    "workbench.action.files.save": [`⎈s`],
    "workbench.action.files.openFile": [`⎈o`],
    "workbench.action.openRecent": [`⎈r`],
    "workbench.action.gotoLine": [`⎈g`],
    "C_Cpp.SwitchHeaderSource": [`⎈h`],
    "workbench.action.files.newUntitledFile": [`⎈⇧o`],
    
    // Undo/Redo
    "danceflow.history.undo": [`u`, `⎈z`, `⎈⇧y`],
    "danceflow.history.redo": [`⇧u`, `⎈⇧z`, `⎈y`],
    
    // Other
    "editor.action.selectAll": [`⎈a`],
    "danceflow.number.increment": [`⎈k`, `⎈up`],
    "danceflow.number.decrement": [`⎈j`, `⎈down`],
  },
  
  inspect: {
    "editor.action.revealDefinition": [`f`],
    "editor.action.goToTypeDefinition": [`t`],
    "editor.action.goToImplementation": [`z`],
    "editor.action.goToReferences": [`g`],
    "editor.action.rename": [`r`],
    "danceflow.inspect.renameToClipboard": [`⇧r`],
    "danceflow.inspect.copySymbol": [`y`, `⎈c`],
    "danceflow.inspect.copyInfo": [`⇧y`],
    "editor.action.quickFix": [`space`],
    "editor.action.marker.next": [`e`],
    "editor.action.marker.prev": [`⇧e`],
  },
  
  interact: {
    "editor.action.clipboardCopyAction": [`y`, `⎈c`],
    "danceflow.modes.set.inspect": [`space`],
    "danceflow.history.recording.toggle": [`⇧q`],
    "danceflow.history.recording.load": [`⎈q`],
    "danceflow.history.recording.save": [`⎈⇧q`],
    ...(()=> Array(10).fill(0).reduce((acc, _, i) => ({
      ...acc,
      [`danceflow.updateCount{"addDigits": ${i}}`]: [`${i}`]
    }), {})),
  },
  
  change: {
    // Delete operations
    "danceflow.edit.yank-delete": [`d`, `⎈x`],
    "danceflow.edit.delete": [`⎈d`, `del`, `backspace`],
    "danceflow.edit.yank-delete.word": [`⇧d`],
    "danceflow.edit.delete.word": [`⎈del`, `⎈backspace`],
    "danceflow.edit.yank-delete.line": [`⎇d`],
    "danceflow.edit.delete.line": [`⎈⎇⇧d`],
    
    // Paste operations
    "danceflow.edit.paste.before.select": [`p`, `⎈v`],
    "danceflow.edit.paste.after.select": [`⇧p`, `⎈⇧v`],
    "editor.action.copyLinesDownAction": [`⎇p`],
    "editor.action.copyLinesUpAction": [`⎇⇧p`],
    
    // Insert operations
    "danceflow.modes.modify.before": [`i`],
    "danceflow.modes.modify.after": [`a`],
    "danceflow.modes.modify.lineStart": [`⇧i`],
    "danceflow.modes.modify.lineEnd": [`⇧a`],
    "danceflow.edit.newLine.below.modify": [`o`],
    "danceflow.edit.newLine.above.modify": [`⇧o`],
    
    // Replace operations
    "danceflow.edit.yank-delete-modify": [`c`],
    "danceflow.edit.delete-modify": [`⎈⎇c`],
    "danceflow.edit.replaceCharacters": [`r`],
    "danceflow.edit.yank-replace": [`⇧r`],
    "danceflow.edit.replace": [`⎈⇧r`],
    
    // Line operations
    "editor.action.moveLinesDownAction": [`⎇j`, `⎇down`],
    "editor.action.moveLinesUpAction": [`⎇k`, `⎇up`],
    "tab": [`tab`],
    "outdent": [`⇧tab`],
    "editor.action.joinLines": [`⇧j`],
    "danceflow.change.removeEmptyLines": [`-`],
    
    // Spacing operations
    "danceflow.add.space.before": [`⎇space`],
    "danceflow.add.space.after": [`⎇⇧space`],
    "danceflow.add.line.below": [`enter`],
    "danceflow.add.line.above": [`⇧enter`],
    
    // Formatting operations
    "editor.action.commentLine": [`⇧c`],
    'danceflow.openMenu{"menu": "enclose"}': [`"`],
    "editor.action.formatSelection": [`=`],
    "danceflow.edit.case.swap": [`⎇=`],
    "danceflow.edit.case.toLower": [`⎈=`],
    "danceflow.edit.case.toUpper": [`⎈⇧=`],
    
    // Repeat operations
    "danceflow.history.recording.play": [`q`],
    "danceflow.history.repeat.edit": [`.`],
    
    // Other
    "danceflow.selections.rotate.contents": [`⎇⇧]`],
    "danceflow.selections.rotate.contents.reverse": [`⎇⇧[`],
  },
  
  selectedMove: {
    // Basic navigation
    "danceflow.select.left.extend": [`h`],
    "danceflow.select.down.extend": [`j`],
    "danceflow.select.up.extend": [`k`],
    "danceflow.select.right.extend": [`l`],
    
    // Word navigation
    "danceflow.seek.word.extend": [`w`],
    "danceflow.seek.wordEnd.extend": [`e`],
    "danceflow.seek.word.backward": [`b`],
    "danceflow.seek.word.ws.extend": [`⇧w`],
    "danceflow.seek.wordEnd.ws.extend": [`⇧e`],
    "danceflow.seek.word.ws.extend.backward": [`⇧b`],
    
    // Character navigation
    "danceflow.seek.included.extend": [`f`],
    "danceflow.seek.included.extend.backward": [`⇧f`],
    "danceflow.seek.extend": [`t`],
    "danceflow.seek.extend.backward": [`⇧t`],
    
    // Line & Page navigation
    "danceflow.select.halfPageDown.extend": [`⎈d`, `⎈⇧u`],
    "danceflow.select.halfPageUp.extend": [`⎈u`, `⎈⇧d`],
    
    // Selection manipulation
    "danceflow.modes.set.move": [`v`],
    "editor.action.addSelectionToNextFindMatch": [`⎈n`],
    "editor.action.addSelectionToPreviousFindMatch": [`⎈⇧n`],
  },
  
  move: {
    // Basic navigation
    "danceflow.select.left.jump": [`h`],
    "danceflow.select.down.jump": [`j`],
    "danceflow.select.up.jump": [`k`],
    "danceflow.select.right.jump": [`l`],
    
    // Word navigation
    "danceflow.seek.word": [`w`],
    "danceflow.seek.wordEnd": [`e`],
    "danceflow.seek.word.backward": [`b`],
    "danceflow.get.word": [`g`],
    "danceflow.get.word.ws": [`⇧g`],
    "danceflow.seek.word.ws": [`⇧w`],
    "danceflow.seek.wordEnd.ws": [`⇧e`],
    "danceflow.seek.word.ws.backward": [`⇧b`],
    
    // Character navigation
    "danceflow.seek.included": [`f`],
    "danceflow.seek.included.backward": [`⇧f`],
    "danceflow.seek": [`t`],
    "danceflow.seek.backward": [`⇧t`],
    
    // Line & Page navigation
    "danceflow.select.line.below.extend": [`x`], // Should not require move mode
    "danceflow.select.line.above.extend": [`⇧x`], // Should not require move mode
    "danceflow.select.halfPageDown.jump": [`⎈d`, `⎈⇧u`],
    "danceflow.select.halfPageUp.jump": [`⎈u`, `⎈⇧d`],
    "editor.toggleFold": [`z`],

    // Visual mode
    "danceflow.modes.set.select": [`v`],
    
    // Object selection
    'danceflow.openMenu{"menu": "match"}': [`m`],
    
    // Multiselection operations
    "danceflow.selections.select.orLeap": [`s`],
    "danceflow.selections.split": [`⎇s`],
    "danceflow.selections.keepMatching": [`⇧k`],
    "danceflow.selections.keepNotMatching": [`⇧⎇k`],
    "danceflow.selections.merge": [`⇧m`],
    "danceflow.selections.splitLines.orLeap.backward": [`⇧s`],
    "danceflow.selections.reduce": [`;`],
    "danceflow.selections.changeDirection": [`⇧;`], // Should not require move mode
    
    // Jumppoints
    "danceflow.jumppoint.create": [`'`],
    "danceflow.jumppoint.previous": [`[`],
    "danceflow.jumppoint.next": [`]`],
  },
}

// TODO The to be implemented list:
// danceflow.selections.keepMatching
// danceflow.selections.keepNotMatching
// danceflow.jumppoint.create
// danceflow.jumppoint.previous
// danceflow.jumppoint.next
// something{options}
// danceflow.number.increment
// danceflow.number.decrement
// danceflow.history.recording.toggle
// danceflow.history.recording.load
// danceflow.history.recording.save
// danceflow.edit.yank-delete.word
// danceflow.edit.delete.word
// danceflow.edit.yank-delete.line
// danceflow.edit.delete.line
// danceflow.openMenu{"menu": "enclose"}

export default editorDefaultKeybindings;
