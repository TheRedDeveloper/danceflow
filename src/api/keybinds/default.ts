/**
 * Default keybindings
 */

// Basic type for mapping commands to key combinations
export type UnresolvedKeyBinding = Record<string, string[]>;

// Define the group names in order of priority (single source of truth)
export const keybindingGroupNames = [
  'global',
  'editor',
  'inspect',
  'interact', 
  'change',
  'selectedMove',
  'move'
] as const;

// Create a type from the array of group names
export type KeybindingGroupName = typeof keybindingGroupNames[number];

// Generic type for any keybinding group structure
export type KeybindingGroups<T> = {
  [K in KeybindingGroupName]: T;
};

// Specific type for unresolved keybindings
export type UnresolvedKeybindingGroups = KeybindingGroups<UnresolvedKeyBinding>;

export const defaultKeybindings: UnresolvedKeybindingGroups = {
  global: {
    // Mode switching
    "danceflow.cancel": [`escape`],
    
    // Tool panels
    "danceflow.togglePanel.git": [`⎈⇧g`],
    "danceflow.togglePanel.explorer": [`⎈⇧e`],
    "danceflow.togglePanel.chat": [`⎈⇧c`],
    "danceflow.togglePanel.search": [`⎈⇧s`],
    "danceflow.togglePanel.timeline": [`⎈⇧t`],
    "danceflow.togglePanel.outline": [`⎈⇧l`],
    "danceflow.togglePanel.debug": [`⎈⇧b`],
    "danceflow.togglePanel.extensions": [`⎈⇧x`],
    
    // Windows
    "workbench.action.moveEditorToNewWindow": [`⎈p`],
    "workbench.action.moveEditorToFirstGroup": [`⎈⎇p`],
    "workbench.action.newWindow": [`⎈m`],
    
    // Search
    "workbench.action.quickTextSearch": [`⎈⇧f`],
    "workbench.action.showAllSymbols": [`⎈t`],
    
    // Tabs
    "workbench.action.quickOpenNavigateNextInEditorPicker": [`⎈tab`],
    "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup": [`⎈⇧tab`],
    "workbench.action.closeActiveEditor": [`⎈w`],
    
    // Files
    "workbench.action.files.openFile": [`⎈o`],
    "workbench.action.openRecent": [`⎈r`],
    "workbench.action.gotoLine": [`⎈g`],
    "workbench.action.files.newUntitledFile": [`⎈⇧o`],
  },

  editor: {
    "danceflow.modes.set.move": [`escape`],

    // Tool panels
    "danceflow.togglePanel.git": [`⇧1`],
    "danceflow.togglePanel.explorer": [`⇧2`],
    "danceflow.togglePanel.chat": [`⇧3`],
    "danceflow.togglePanel.search": [`⇧4`],
    "danceflow.togglePanel.timeline": [`⇧5`],
    "danceflow.togglePanel.outline": [`⇧6`],
    "danceflow.togglePanel.debug": [`⇧7`],
    "danceflow.togglePanel.extensions": [`⇧8`],

    // Find/Replace
    "actions.find": [`⎈f`],
    "editor.action.startFindReplaceAction": [`⎈⎇f`],
    "editor.action.nextMatchFindAction": [`n`],
    "editor.action.previousMatchFindAction": [`⇧n`],

    // File
    "workbench.action.files.save": [`⎈s`],
    "C_Cpp.SwitchHeaderSource": [`⎈h`],

    // Undo/Redo
    "danceflow.history.undo": [`⎈z`, `⎈⇧y`],
    "danceflow.history.redo": [`⎈⇧z`, `⎈y`],
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

    // Undo/Redo
    "danceflow.history.undo": [`u`],
    "danceflow.history.redo": [`⇧u`],
    
    // Other
    "danceflow.selections.rotate.contents": [`⎇⇧]`],
    "danceflow.selections.rotate.contents.reverse": [`⎇⇧[`],
    "danceflow.number.increment": [`⎈k`, `⎈up`],
    "danceflow.number.decrement": [`⎈j`, `⎈down`],
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
    "editor.action.selectAll": [`⎈a`],
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
// DONE something{options}
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
// danceflow.togglePanel.git
// danceflow.togglePanel.explorer
// danceflow.togglePanel.chat
// danceflow.togglePanel.search
// danceflow.togglePanel.timeline
// danceflow.togglePanel.outline
// danceflow.togglePanel.debug
// danceflow.togglePanel.extensions

export default defaultKeybindings;
