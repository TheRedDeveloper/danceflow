/**
 * Default keybindings
 */

// Basic type for mapping commands to key combinations
export type UnresolvedKeyBindings = Record<string, string[]>;

// Define the group names in order of priority (single source of truth)
export const keybindingGroupNames = [
  'global',
  'editor',
  'inspect',
  'interact', 
  'change',
  'selectedMove',
  'move',
  'ignore'
] as const;

// Create a type from the array of group names
export type KeybindingGroupName = typeof keybindingGroupNames[number];

// Generic type for any keybinding group structure
export type KeybindingGroups<T> = {
  [K in KeybindingGroupName]: T;
};

// Specific type for unresolved keybindings
export type UnresolvedKeybindingGroups = KeybindingGroups<UnresolvedKeyBindings>;

export const charTypingKeys = "abcdefghijklmnopqrstuvwxyz0123456789`-=[]\\;',./ ".split("")
                              .flatMap(k => [k, `⇧${k}`]);

export const groupModes: Partial<Record<KeybindingGroupName, string>> = {
  selectedMove: "select",
  move: "move",
  change: "move",
  inspect: "move"
}

export const groupModeExceptions = new Set([
  "danceflow.modes.modify.before",
  "danceflow.modes.modify.after",
  "danceflow.modes.modify.lineStart",
  "danceflow.modes.modify.lineEnd",
  "danceflow.edit.newLine.below.modify",
  "danceflow.edit.newLine.above.modify",
  "danceflow.select.line.below.extend",
  "danceflow.select.line.above.extend",
  "danceflow.modes.set.select",
  "danceflow.modes.set.move",
  "danceflow.modes.set.inspect",
  "danceflow.modes.set.modify",
  "danceflow.edit.yank-delete-modify",
  "danceflow.edit.delete-modify",
  "workbench.action.navigateForward",
  "workbench.action.navigateBack",
  "danceflow.ignore"
])

export const defaultKeybindings: UnresolvedKeybindingGroups = {
  global: {
    "danceflow.cancel": [`escape`],
    "danceflow.view.zen[!outline.defaultViewLocation && !timeline.defaultViewLocation]": [`⎈enter`],
    
    // Tool panels
    "workbench.view.scm": [`⎈1`, `⎈⇧g`],
    "workbench.action.toggleSidebarVisibility[activeViewlet == 'workbench.view.scm' && sideBarFocus]": [`⎈1`, `⎈⇧g`],
    "workbench.view.explorer": [`⎈2`, `⎈⇧e`],
    "workbench.action.toggleSidebarVisibility[activeViewlet == 'workbench.view.explorer' && sideBarFocus]": [`⎈2`, `⎈⇧e`],
    "workbench.panel.chat[!terminalFocus]": [`⎈⇧c`],
    "workbench.panel.chat": [`⎈3`],
    "workbench.view.search": [`⎈4`, `⎈⇧s`],
    "workbench.action.toggleSidebarVisibility[activeViewlet == 'workbench.view.search' && sideBarFocus]": [`⎈4`, `⎈⇧s`],
    "timeline.focus": [`⎈5`, `⎈⇧t`],
    "workbench.action.toggleSidebarVisibility[view.timeline.visible && activeViewlet != 'workbench.view.explorer' && sideBarFocus]": [`⎈5`, `⎈⇧t`],
    "outline.focus": [`⎈6`, `⎈⇧l`],
    "workbench.action.toggleSidebarVisibility[view.outline.visible && activeViewlet != 'workbench.view.explorer' && sideBarFocus]": [`⎈6`, `⎈⇧l`],
    "workbench.view.debug": [`⎈7`, `⎈⇧b`],
    "workbench.action.toggleSidebarVisibility[activeViewlet == 'workbench.view.debug' && sideBarFocus]": [`⎈7`, `⎈⇧b`],
    "workbench.view.extensions": [`⎈8`, `⎈⇧x`],
    "workbench.action.toggleSidebarVisibility[activeViewlet == 'workbench.view.extensions' && sideBarFocus]": [`⎈8`, `⎈⇧x`],
    "workbench.action.toggleSidebarVisibility": [`⎈b`],
    "workbench.action.togglePanel": [`⎈o`],
    
    // Windows
    "workbench.action.moveEditorToNewWindow": [`⎈p`],
    "workbench.action.moveEditorToFirstGroup": [`⎈⎇p`],
    "workbench.action.newWindow": [`⎈m`],
    
    // Search
    'danceflow.withCompleteSelection{"command":"workbench.action.quickTextSearch"}': [`⎈⇧f`],
    'danceflow.withCompleteSelection{"command":"workbench.action.showAllSymbols"}': [`⎈t`],
    
    // Tabs
    "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup[!activeEditorGroupEmpty]": [`⎈tab`],
    "workbench.action.quickOpenNavigateNextInEditorPicker[inEditorsPicker && inQuickOpen]": [`⎈tab`],
    "workbench.action.quickOpenLeastRecentlyUsedEditorInGroup[!activeEditorGroupEmpty]": [`⎈⇧tab`],
    "workbench.action.quickOpenNavigatePreviousInEditorPicker[inEditorsPicker && inQuickOpen]": [`⎈⇧tab`],
    "workbench.action.closeActiveEditor": [`⎈w`],
    
    // Files
    "workbench.action.openRecent": [`⎈r`],
    "workbench.action.gotoLine": [`⎈g`],
    "workbench.action.files.newUntitledFile": [`⎈n`],
    "workbench.action.files.saveFiles": [`⎈⇧s`],
    
    // Menus
    "list.focusDown[listFocus && !inputFocus]": [`j`],
    "list.focusUp[listFocus && !inputFocus]": [`k`],
    "list.expand[listFocus && !inputFocus]": [`l`],
    "list.collapse[listFocus && !inputFocus]": [`h`],
    "quickInput.previous[inQuickInput && quickInputType == 'quickPick' && !inputFocus]": [`k`],
    "quickInput.next[inQuickInput && quickInputType == 'quickPick' && !inputFocus]": [`j`],
    "explorer.newFile[filesExplorerFocus && !inputFocus]": [`a`],
    "explorer.newFolder[filesExplorerFocus && !inputFocus]": [`⇧a`],
    "renameFile[filesExplorerFocus && foldersViewVisible && !explorerResourceIsRoot && !explorerResourceReadonly && !inputFocus]": [`r`],
    "insertBestCompletion[atEndOfWord && textInputFocus && !hasOtherSuggestions && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on']": [`⇧space`],

    // Jumppoints
    "workbench.action.navigateBack[!editorTextFocus]": [`[`],
    "workbench.action.navigateForward[!editorTextFocus]": [`]`],
    
    // Remove vscode default keybindings
    "-workbench.action.navigateBack[!editorTextFocus]": [`⇧,`],
    "-editor.action.inlineSuggest.commit[inlineEditIsVisible && tabShouldAcceptInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineEditIsVisible && inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineEditIsVisible && inlineSuggestionVisible && tabShouldAcceptInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible]": [`tab`],
    "-editor.action.inlineSuggest.commit[inInlineEditsPreviewEditor]": [`tab`],
    "-editor.action.inlineSuggest.jump[inlineEditIsVisible && tabShouldJumpToInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible]": [`tab`],
    "-workbench.action.focusFirstEditorGroup": [`⎈1`],
    "-workbench.action.focusSecondEditorGroup": [`⎈2`],
    "-workbench.action.focusThirdEditorGroup": [`⎈3`],
    "-workbench.action.focusFourthEditorGroup": [`⎈4`],
    "-workbench.action.focusFifthEditorGroup": [`⎈5`],
    "-workbench.action.focusSixthEditorGroup": [`⎈6`],
    "-workbench.action.focusSeventhEditorGroup": [`⎈7`],
    "-workbench.action.focusEighthEditorGroup": [`⎈8`],
    "-workbench.action.focusLastEditorGroup": [`⎈9`],
    "-github.copilot.generate[editorTextFocus && github.copilot.activated && !commentEditorFocused]": [`⎈enter`],
    "-editor.action.insertLineAfter[editorTextFocus && !editorReadonly]": [`⎈enter`],
    "-explorer.openToSide[explorerViewletFocus && foldersViewVisible && !inputFocus]": [`⎈enter`],
    "-workbench.action.moveEditorToNextGroup": [`⎈⎇right`],
    "-workbench.action.moveEditorToPreviousGroup": [`⎈⎇left`],
    "-editor.action.addSelectionToNextFindMatch[editorFocus]": [`⎈d`],
    "-acceptSelectedSuggestion[suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus]": [`tab`],
    "-insertBestCompletion[atEndOfWord && textInputFocus && !hasOtherSuggestions && !inSnippetMode && !suggestWidgetVisible && config.editor.tabCompletion == 'on']": [`tab`],
    "-insertSnippet[editorTextFocus && hasSnippetCompletions && !editorTabMovesFocus && !inSnippetMode]": [`tab`],
    "-workbench.action.newWindow": [`⎈⇧n`],
    "-workbench.action.togglePanel": [`⎈j`],
  },

  editor: {
    "danceflow.modes.set.move": [`escape`],
    
    // Intellisense with ⎈space
    "editor.action.triggerSuggest[editorHasCompletionItemProvider && textInputFocus && !editorReadonly && !suggestWidgetVisible]": [`⎈space`],
    
    // Copilot completions with ⇧space
    "editor.action.inlineSuggest.commit[inlineEditIsVisible && tabShouldAcceptInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineEditIsVisible && inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineEditIsVisible && inlineSuggestionVisible && tabShouldAcceptInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inInlineEditsPreviewEditor]" : [`⇧space`],
    "editor.action.inlineSuggest.jump[inlineEditIsVisible && tabShouldJumpToInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible]": [`⇧space`],
    "danceflow.ignore[!(inlineEditIsVisible && tabShouldAcceptInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineEditIsVisible && inlineSuggestionHasIndentationLessThanTabSize && inlineSuggestionVisible && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inlineEditIsVisible && inlineSuggestionVisible && tabShouldAcceptInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible || inInlineEditsPreviewEditor || inlineEditIsVisible && tabShouldJumpToInlineEdit && !editorHoverFocused && !editorTabMovesFocus && !suggestWidgetVisible)]": [`⇧space`],
    
    // Intellisense complete with ⇧space
    "acceptSelectedSuggestion[suggestWidgetHasFocusedSuggestion && suggestWidgetVisible && textInputFocus]": [`⇧space`],
    "insertSnippet[hasSnippetCompletions && !editorTabMovesFocus && !inSnippetMode]": [`⇧space`],

    // Inline chat with ⎈⇧space/⎈i
    "inlineChat.start[inlineChatHasEditsAgent && inlineChatPossible && !editorReadonly && !editorSimpleInput || inlineChatHasProvider && inlineChatPossible && !editorReadonly && !editorSimpleInput]": [`⎈⇧space`, `⎈i`],
    
    // Find/Replace
    'danceflow.withCompleteSelection{"command": "actions.find"}': [`⎈f`],
    'danceflow.withCompleteSelection{"command": "editor.action.startFindReplaceAction"}': [`⎈⎇f`],
    
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
    "danceflow.selections.saveText": [`y`, `⎈c`],
    "danceflow.modes.set.inspect": [`space`],
    "danceflow.history.recording.toggle": [`⇧q`],
    "danceflow.history.recording.load": [`⎈q`],
    "danceflow.history.recording.save": [`⎈⇧q`],
    'danceflow.updateCount{"addDigits": 0}': [`0`],
    'danceflow.updateCount{"addDigits": 1}': [`1`],
    'danceflow.updateCount{"addDigits": 2}': [`2`],
    'danceflow.updateCount{"addDigits": 3}': [`3`],
    'danceflow.updateCount{"addDigits": 4}': [`4`],
    'danceflow.updateCount{"addDigits": 5}': [`5`],
    'danceflow.updateCount{"addDigits": 6}': [`6`],
    'danceflow.updateCount{"addDigits": 7}': [`7`],
    'danceflow.updateCount{"addDigits": 8}': [`8`],
    'danceflow.updateCount{"addDigits": 9}': [`9`],
  },
  
  change: {
    // Delete operations
    "danceflow.edit.yank-delete": [`d`, `⎈x`],
    "danceflow.edit.delete": [`del`, `backspace`],
    
    // Paste operations
    "danceflow.edit.paste.before.select": [`p`, `⎈v`],
    "danceflow.edit.paste.after.select": [`⇧p`, `⎈⇧v`],
    "editor.action.copyLinesDownAction": [`⎇p`],
    "editor.action.copyLinesUpAction": [`⎇⇧p`],
    
    // Insert operations
    "danceflow.modes.modify.before": [`i`], // Should not require move mode
    "danceflow.modes.modify.after": [`a`], // Should not require move mode
    "danceflow.modes.modify.lineStart": [`⇧i`], // Should not require move mode
    "danceflow.modes.modify.lineEnd": [`⇧a`], // Should not require move mode
    "danceflow.edit.newLine.below.modify": [`o`], // Should not require move mode
    "danceflow.edit.newLine.above.modify": [`⇧o`], // Should not require move mode
    
    // Replace operations
    "danceflow.edit.yank-delete-modify": [`c`], // Should not require move mode
    "danceflow.edit.delete-modify": [`⎈⎇c`], // Should not require move mode
    "danceflow.edit.replaceCharacters": [`r`],
    "danceflow.edit.yank-replace": [`⇧r`],
    "danceflow.edit.replace": [`⎈⇧r`],
    
    // Line operations
    "editor.action.moveLinesDownAction": [`⎈j`, `⎈down`],
    "editor.action.moveLinesUpAction": [`⎈k`, `⎈up`],
    "tab": [`tab`],
    "outdent": [`⇧tab`],
    "editor.action.joinLines": [`⇧j`],
    "danceflow.edit.removeEmptyLines": [`-`],
    
    // Spacing operations
    "danceflow.edit.addSpace.before": [`⎇space`],
    "danceflow.edit.addSpace.after": [`⎇⇧space`],
    "danceflow.edit.newLine.below": [`enter`],
    "danceflow.edit.newLine.above": [`⇧enter`],
    
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
    "danceflow.edit.number.increment": [`⎈⎇k`, `⎇⇧up`],
    "danceflow.edit.number.decrement": [`⎈⎇j`, `⎇⇧down`],
  },
  
  selectedMove: {
    // Basic navigation
    "danceflow.select.left.extend": [`h`, `left`],
    "danceflow.select.down.extend": [`j`, `down`],
    "danceflow.select.up.extend": [`k`, `up`],
    "danceflow.select.right.extend": [`l`, `right`],
    
    // Word navigation
    "danceflow.seek.word.extend": [`w`],
    "danceflow.seek.wordEnd.extend": [`e`],
    "danceflow.seek.word.extend.backward": [`b`],
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
    
    // Mode
    "danceflow.modes.set.move": [`v`],
    
    // Search
    'danceflow.withCompleteSelectionSpawning{"command": "editor.action.addSelectionToNextFindMatch"}': [`n`],
    'danceflow.withCompleteSelectionSpawning{"command": "editor.action.addSelectionToPreviousFindMatch"}': [`⇧n`],
  },
  
  move: {
    // Basic navigation
    "danceflow.select.left.jump": [`h`, `left`],
    "danceflow.select.down.jump": [`j`, `down`],
    "danceflow.select.up.jump": [`k`, `up`],
    "danceflow.select.right.jump": [`l`, `right`],
    
    "danceflow.select.left.extend": [`⎇h`, `⎇left`],
    "danceflow.select.down.extend": [`⎇j`, `⎇down`],
    "danceflow.select.up.extend": [`⎇k`, `⎇up`],
    "danceflow.select.right.extend": [`⎇l`, `⎇right`],
    
    // Word navigation
    "danceflow.seek.word": [`w`],
    "danceflow.seek.wordEnd": [`e`],
    "danceflow.seek.word.backward": [`b`],
    "danceflow.seek.select-yank.word": [`g`],
    "danceflow.seek.select-yank.word.ws": [`⇧g`],
    "danceflow.seek.word.ws": [`⇧w`],
    "danceflow.seek.wordEnd.ws": [`⇧e`],
    "danceflow.seek.word.ws.backward": [`⇧b`],
    
    "danceflow.seek.word.extend": [`⎇w`],
    "danceflow.seek.wordEnd.extend": [`⎇e`],
    "danceflow.seek.word.extend.backward": [`⎇b`],
    "danceflow.seek.word.ws.extend": [`⎇⇧w`],
    "danceflow.seek.wordEnd.ws.extend": [`⎇⇧e`],
    "danceflow.seek.word.ws.extend.backward": [`⎇⇧b`],
    
    // Character navigation
    "danceflow.seek.included": [`f`],
    "danceflow.seek.included.backward": [`⇧f`],
    "danceflow.seek": [`t`],
    "danceflow.seek.backward": [`⇧t`],
    
    "danceflow.seek.included.extend": [`⎇f`],
    "danceflow.seek.included.extend.backward": [`⎇⇧f`],
    "danceflow.seek.extend": [`⎇t`],
    "danceflow.seek.extend.backward": [`⎇⇧t`],
    
    // Line & Page navigation
    "danceflow.select.line.below.extend": [`x`], // Should not require move mode
    "danceflow.select.line.above.extend": [`⇧x`], // Should not require move mode
    
    "danceflow.select.lineStart": [`⎈h`, `⎈left`],
    "danceflow.select.lineEnd": [`⎈l`, `⎈right`],
    "danceflow.select.lineStart.extend": [`⎈⎇h`, `⎈⎇left`],
    "danceflow.select.lineEnd.extend": [`⎈⎇l`, `⎈⎇right`],
    
    "danceflow.select.halfPageDown.jump": [`⎈d`, `⎈⇧u`],
    "danceflow.select.halfPageUp.jump": [`⎈u`, `⎈⇧d`],
    "danceflow.select.halfPageDown.extend": [`⎈⎇d`, `⎈⎇⇧u`],
    "danceflow.select.halfPageUp.extend": [`⎈⎇u`, `⎈⎇⇧d`],
    
    "editor.action.selectAll": [`⎈a`],
    "editor.toggleFold": [`z`],
    
    // Mode
    "danceflow.modes.set.select": [`v`], // Should not require move mode
    
    // Objects
    'danceflow.openMenu{"menu": "match"}': [`m`],
    
    // Multiselection operations
    "danceflow.selections.select.orLeap": [`s`],
    "danceflow.selections.split": [`⎇s`],
    "danceflow.selections.filter.regexp": [`⇧k`],
    "danceflow.selections.filter.regexp.inverse": [`⇧⎇k`],
    "danceflow.selections.merge": [`⇧m`],
    "danceflow.selections.splitLines.orLeap.backward": [`⇧s`],
    "danceflow.selections.collapse": [`;`],
    "danceflow.selections.changeDirection": [`⇧;`], // Should not require move mode
    "danceflow.selections.trimWhitespace": [`⇧-`], // Should not require move mode
    "danceflow.selections.copy": [`⎇c`, `⎈⇧j`, `⎈⇧down`],
    "danceflow.selections.copy.above": [`⎇⇧c`, `⎈⇧k`, `⎈⇧up`],
    
    // Search
    "editor.action.nextMatchFindAction": [`n`],
    "editor.action.previousMatchFindAction": [`⇧n`],

    'danceflow.withCompleteSelectionSpawning{"command": "editor.action.addSelectionToNextFindMatch"}': [`⎇n`],
    'danceflow.withCompleteSelectionSpawning{"command": "editor.action.addSelectionToPreviousFindMatch"}': [`⎇⇧n`],
    
    // Jumppoints
    "workbench.action.navigateBack[canNavigateBack]": [`[`],
    "-workbench.action.navigateBack[canNavigateBack]": [`⇧,`],
    "workbench.action.navigateForward[canNavigateForward]": [`]`],
    "danceflow.ignore[!canNavigateBack]": [`[`],
    "danceflow.ignore[!canNavigateForward]": [`]`],
  },
  ignore: {
    "danceflow.ignore": charTypingKeys,
  }
}

// TODO danceflow.inspect.renameToClipboard
// TODO danceflow.inspect.copySymbol
// TODO danceflow.inspect.copyInfo
// TODO danceflow.history.recording.toggle
// TODO danceflow.history.recording.load
// TODO danceflow.history.recording.save
// TODO danceflow.openMenu{"menu": "enclose"}



export default defaultKeybindings;
