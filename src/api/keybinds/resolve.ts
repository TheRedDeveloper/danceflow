import { 
  UnresolvedKeybindingGroups, 
  UnresolvedKeyBindings,
  keybindingGroupNames,
  KeybindingGroupName,
  KeybindingGroups
} from './default';

import {
  Builder
} from '../../../meta';

/**
 * Single resolved keybinding
 * 
 * Note: This uses Unicode key symbols (⎈, ⇧, ⎇) and doesn't include a title,
 * unlike Builder.Keybinding which uses VS Code's key format (ctrl+, shift+, alt+)
 */
export interface ResolvedKeybinding {
  key: string;
  command: string;
  when?: string;
  args?: Record<string, any>;
}

/**
 * Keybindings grouped by priority
 */
export type ResolvedKeybindingGroups = KeybindingGroups<ResolvedKeybinding[]>;

/**
 * All keybindings flattened into a single array with conditions
 */
export type FlattenedKeybindings = ResolvedKeybinding[];

/**
 * Order of priority for keybinding groups
 * Earlier groups override later ones
 */
const priorityOrder = keybindingGroupNames;

/**
 * Extract arguments from command string if present
 * E.g. 'danceflow.openMenu{"menu": "match"}' -> { command: 'danceflow.openMenu', args: { menu: 'match' } }
 * 
 * Also extracts when conditions in square brackets:
 * E.g. 'danceflow.say[isCow && isAlive]{"text": "mooo"}' -> 
 *      { command: 'danceflow.say', when: 'isCow && isAlive', args: { text: 'mooo' } }
 * 
 * ### Example
 * 
 * ```js
 * expect(
 *   parseCommandArgs('danceflow.openMenu{"menu": "match"}'),
 *   "to equal",
 *   { command: 'danceflow.openMenu', args: { menu: 'match' } }
 * );
 * 
 * expect(
 *   parseCommandArgs('danceflow.simple'),
 *   "to equal",
 *   { command: 'danceflow.simple' }
 * );
 * 
 * expect(
 *   parseCommandArgs('danceflow.complex{"num": 42, "text": "hello"}'),
 *   "to equal",
 *   { command: 'danceflow.complex', args: { num: 42, text: "hello" } }
 * );
 * 
 * expect(
 *   parseCommandArgs('danceflow.say[isCow && isAlive]{"text": "mooo"}'),
 *   "to equal",
 *   { command: 'danceflow.say', when: 'isCow && isAlive', args: { text: 'mooo' } }
 * );
 * 
 * expect(
 *   parseCommandArgs('danceflow.kill[isAlive]'),
 *   "to equal",
 *   { command: 'danceflow.kill', when: 'isAlive' }
 * );
 * ```
 */
export function parseCommandArgs(commandString: string): { command: string; when?: string; args?: Record<string, any> } {
  // Regular expression to capture command, when condition (optional), and args (optional)
  const regex = /^([^\[\{]+)(?:\[([^\]]+)\])?(\{.*\})?$/;
  const match = regex.exec(commandString);
  if (!match) {
    return { command: commandString };
  }

  const [, command, when, argsString] = match;
  
  const result: { command: string; when?: string; args?: Record<string, any> } = { command: command.trim() };
  
  if (when) {
    result.when = when;
  }
  
  if (argsString) {
    try {
      result.args = JSON.parse(argsString);
    } catch (e) {
      console.error(`Failed to parse arguments for command: ${commandString}`, e);
    }
  }
  
  return result;
}

/**
 * Generate condition string for a keybinding based on which groups would override it
 * 
 * ### Example
 * 
 * ```js
 * const mockKeybindings = {
 *   global: [
 *     { key: 'h', command: 'global.h' },
 *     { key: 'j', command: 'global.j' },
 *     { key: 'f', command: 'actions.find' }
 *   ],
 *   editor: [
 *     { key: 'f', command: 'actions.find' },
 *   ],
 *   inspect: [
 *     { key: 'h', command: 'inspect.h' },
 *     { key: 'k', command: 'inspect.k' }
 *   ],
 *   interact: [],
 *   change: [
 *     { key: 'm', command: 'change.m' }
 *   ],
 *   selectedMove: [
 *     { key: 'h', command: 'selectedMove.h' }
 *   ],
 *   move: [
 *     { key: 'h', command: 'move.h' },
 *     { key: 'k', command: 'move.k' }
 *   ]
 * };
 * 
 * // Global command has no condition
 * expect(
 *   generateCondition('global', 'h', mockKeybindings, 'global.h'),
 *   "to be undefined"
 * );
 * 
 * // Editor command gets editorTextFocus
 * expect(
 *   generateCondition('editor', 'f', mockKeybindings, 'actions.find'),
 *   "to equal",
 *   "editorTextFocus"
 * );
 * 
 * // Inspect is overridden by global for key 'h'
 * expect(
 *   generateCondition('inspect', 'h', mockKeybindings, 'inspect.h'),
 *   "to equal",
 *   "editorTextFocus && danceflow.inspect.active"
 * );
 * 
 * // SelectedMove is overridden by global and inspect for key 'h'
 * expect(
 *   generateCondition('selectedMove', 'h', mockKeybindings, 'selectedMove.h'),
 *   "to equal",
 *   "editorTextFocus && danceflow.selectedMove.active && !danceflow.inspect.active"
 * );
 * 
 * // Move 'k' is overridden by inspect
 * expect(
 *   generateCondition('move', 'k', mockKeybindings, 'move.k'),
 *   "to equal",
 *   "editorTextFocus && danceflow.move.active && !danceflow.inspect.active"
 * );
 * 
 * // Change 'm' has no overrides
 * expect(
 *   generateCondition('change', 'm', mockKeybindings, 'change.m'),
 *   "to equal",
 *   "editorTextFocus && danceflow.change.active"
 * );
 * ```
 */
export function generateCondition(
  group: KeybindingGroupName, 
  key: string, 
  allKeybindings: ResolvedKeybindingGroups,
  command?: string
): string | undefined {
  if (group === 'global') {
    // Global keybindings only need editorTextFocus if they're in the globalEditorFocusCommands list
    return undefined;
  }

  if (group === 'editor') {
    // Editor keybindings are always editorTextFocus
    return "editorTextFocus";
  }

  // Find all higher priority groups that use the same key
  // IMPORTANT: Exclude 'global' group as it should never override other groups
  const overridingGroups = priorityOrder.filter(g => {
    // Skip the global group as it should never override
    if (g === 'global') {
      return false;
    }
    
    // Only consider groups with higher priority than current group
    const groupIndex = priorityOrder.indexOf(g);
    const currentIndex = priorityOrder.indexOf(group);
    
    if (groupIndex >= currentIndex) {
      return false;
    }
    
    // Check if this group has the same key bound
    return allKeybindings[g].some(binding => binding.key === key);
  });

  // Start with editorTextFocus for non-global bindings
  let condition = "editorTextFocus && ";

  if (overridingGroups.length === 0) {
    // Only add the mode condition if no higher priority groups override this key
    return `${condition}danceflow.${group}.active`;
  }

  // Build condition that checks current mode is active AND no higher priority modes are active
  // Note: 'global' is never included in overridingGroups now
  const negatedOverrides = overridingGroups
    .map(g => `!danceflow.${g}.active`)
    .join(' && ');

  return `${condition}danceflow.${group}.active && ${negatedOverrides}`;
}

/**
 * Process a keybinding group and expand multi-assigned keys
 * 
 * ### Example
 * 
 * ```js
 * const mockBindings = {
 *   "danceflow.command1": ["h", "j"],
 *   "danceflow.command2": ["k"],
 *   'danceflow.openMenu{"menu": "match"}': ["m"],
 *   'danceflow.say[isCow && isAlive]{"text": "mooo"}': ["c"]
 * };
 * 
 * expect(
 *   expandKeybindingGroup('move', mockBindings),
 *   "to equal",
 *   [
 *     { key: "h", command: "danceflow.command1" },
 *     { key: "j", command: "danceflow.command1" },
 *     { key: "k", command: "danceflow.command2" },
 *     { key: "m", command: "danceflow.openMenu", args: { menu: "match" } },
 *     { key: "c", command: "danceflow.say", when: "isCow && isAlive", args: { text: "mooo" } }
 *   ]
 * );
 * ```
 */
export function expandKeybindingGroup(
  group: KeybindingGroupName, 
  bindings: UnresolvedKeyBindings
): ResolvedKeybinding[] {
  const result: ResolvedKeybinding[] = [];

  for (const [commandString, keys] of Object.entries(bindings)) {
    const { command, when, args } = parseCommandArgs(commandString);
    
    // Create a separate binding for each key assigned to this command
    if (Array.isArray(keys)) {
      for (const key of keys) {
        result.push({
          key,
          command,
          ...(when && { when }),
          ...(args && { args }),
        });
      }
    }
  }

  return result;
}

/**
 * Process all keybinding groups and resolve conditions
 * 
 * ### Example
 * 
 * ```js
 * const mockKeybindings = {
 *   global: {
 *     "danceflow.cancel": ["esc"],
 *     "danceflow.global.h": ["h"],
 *   },
 *   editor: {
 *     "actions.find": ["⎈f"]
 *   },
 *   inspect: {
 *     "danceflow.inspect.f": ["f"],
 *     "danceflow.inspect.h": ["h"]
 *   },
 *   interact: {
 *     "danceflow.interact.y": ["y"]
 *   },
 *   change: {},
 *   selectedMove: {
 *     "danceflow.selectedMove.h": ["h"]
 *   },
 *   move: {
 *     "danceflow.move.h": ["h"],
 *     'danceflow.openMenu{"menu": "match"}': ["m"],
 *     'danceflow.say[isCow && isAlive]': ["c"]
 *   },
 *   ignore: {}
 * };
 * 
 * const resolved = resolveKeybindings(mockKeybindings);
 * 
 * // Global keys have no conditions
 * expect(
 *   resolved.global.find(b => b.key === "esc"),
 *   "to equal",
 *   { key: "esc", command: "danceflow.cancel" }
 * );
 * 
 * // Editor keys have editorTextFocus condition
 * expect(
 *   resolved.editor.find(b => b.key === "⎈f"),
 *   "to equal",
 *   { key: "⎈f", command: "actions.find", when: "editorTextFocus" }
 * );
 * 
 * // Inspect 'h' is overridden by global
 * expect(
 *   resolved.inspect.find(b => b.key === "h"),
 *   "to equal",
 *   { 
 *     key: "h", 
 *     command: "danceflow.inspect.h", 
 *     when: "editorTextFocus && danceflow.inspect.active" 
 *   }
 * );
 * 
 * // Custom when condition is preserved and combined with generated condition
 * expect(
 *   resolved.move.find(b => b.key === "c"),
 *   "to equal",
 *   { 
 *     key: "c", 
 *     command: "danceflow.say", 
 *     when: "(isCow && isAlive) && editorTextFocus && danceflow.move.active" 
 *   }
 * );
 * ```
 */
export function resolveKeybindings(keybindings: UnresolvedKeybindingGroups): ResolvedKeybindingGroups {
  // First pass: expand multi-keys without conditions
  const expandedGroups = {} as ResolvedKeybindingGroups;
  
  // Process each keybinding group
  for (const group of priorityOrder) {
    expandedGroups[group] = expandKeybindingGroup(group, keybindings[group]);
  }

  // Second pass: add conditions based on priority overrides
  const resultGroups = {} as ResolvedKeybindingGroups;
  
  // For each group, add appropriate conditions
  for (const group of priorityOrder) {
    resultGroups[group] = expandedGroups[group].map(binding => {
      const generatedCondition = generateCondition(
        group, 
        binding.key, 
        expandedGroups
      );
      
      // If there's a user-defined when condition, combine it with the generated condition
      if (binding.when && generatedCondition) {
        return { 
          ...binding, 
          when: `(${binding.when}) && ${generatedCondition}` 
        };
      } 
      else if (binding.when) {
        return binding; // Keep the user-defined when condition as is
      }
      else if (generatedCondition) {
        return { ...binding, when: generatedCondition };
      }
      
      return binding;
    });
  }

  return resultGroups;
}

/**
 * Flatten all keybinding groups into a single array
 * 
 * ### Example
 * 
 * ```js
 * const mockGroups = {
 *   global: [
 *     { key: "esc", command: "danceflow.cancel" },
 *     { key: "h", command: "danceflow.global.h" }
 *   ],
 *   editor: [],
 *   inspect: [
 *     { key: "f", command: "danceflow.inspect.f" },
 *     { key: "h", command: "danceflow.inspect.h", when: "danceflow.inspect.active && !danceflow.global.active" }
 *   ],
 *   interact: [
 *     { key: "y", command: "danceflow.interact.y", when: "danceflow.interact.active" }
 *   ],
 *   change: [],
 *   selectedMove: [],
 *   move: [
 *     { key: "m", command: "danceflow.openMenu", args: { menu: "match" }, when: "danceflow.move.active" }
 *   ],
 *   ignore: []
 * };
 * 
 * expect(
 *   flattenKeybindings(mockGroups),
 *   "to equal",
 *   [
 *     { key: "esc", command: "danceflow.cancel" },
 *     { key: "h", command: "danceflow.global.h" },
 *     { key: "f", command: "danceflow.inspect.f" },
 *     { key: "h", command: "danceflow.inspect.h", when: "danceflow.inspect.active && !danceflow.global.active" },
 *     { key: "y", command: "danceflow.interact.y", when: "danceflow.interact.active" },
 *     { key: "m", command: "danceflow.openMenu", args: { menu: "match" }, when: "danceflow.move.active" }
 *   ]
 * );
 * ```
 */
export function flattenKeybindings(groups: ResolvedKeybindingGroups): FlattenedKeybindings {
  return keybindingGroupNames.flatMap(group => groups[group]);
}

/**
 * Main function to process keybindings from default config to the final format
 * Converts Unicode key symbols to VS Code format and adds necessary conditions
 * 
 * ### Example
 * 
 * ```js
 * const mockKeybindings = {
 *   global: {
 *     "danceflow.cancel": ["esc"],
 *     "danceflow.format": ["⎈⇧f"] // ctrl+shift+f
 *   },
 *   editor: {
 *     "danceflow.editor.action": ["e"] // example editor action
 *   },
 *   inspect: {
 *     "danceflow.inspect.f": ["f"]
 *   },
 *   interact: {},
 *   change: {
 *     "danceflow.change.option": ["⎇o"] // alt+o
 *   },
 *   selectedMove: {},
 *   move: {
 *     'danceflow.openMenu{"menu": "match"}': ["m"],
 *     'danceflow.say[isCow && isAlive]{"text": "mooo"}': ["c"],
 *     "danceflow.kill[isAlive]": ["k"]
 *   },
 *   ignore: {}
 * };
 * 
 * const result = processKeybindings(mockKeybindings);
 * 
 * // Verify the global esc key binding
 * expect(
 *   result.some(kb => kb.key === "esc" && kb.command === "danceflow.cancel" && !kb.when),
 *   "to be true"
 * );
 * 
 * // Verify Unicode conversion for ctrl+shift+f
 * expect(
 *   result.some(kb => kb.key === "ctrl+shift+f" && kb.command === "danceflow.format" && !kb.when),
 *   "to be true"
 * );
 * 
 * // Verify the editor action binding
 * expect(
 *  result.some(kb => kb.key === "e" && kb.command === "danceflow.editor.action" && kb.when === "editorTextFocus"),
 *  "to be true"
 * );
 * 
 * // Verify Unicode conversion for alt+o with editorTextFocus
 * expect(
 *   result.some(kb => 
 *     kb.key === "alt+o" && 
 *     kb.command === "danceflow.change.option" && 
 *     kb.when === "editorTextFocus && danceflow.change.active"
 *   ),
 *   "to be true"
 * );
 * 
 * // Verify the move menu binding
 * expect(
 *   result.some(kb => 
 *     kb.key === "m" && 
 *     kb.command === "danceflow.openMenu" && 
 *     kb.args && kb.args["menu"] === "match" &&
 *     kb.when === "editorTextFocus && danceflow.move.active"
 *   ),
 *   "to be true"
 * );
 * 
 *  // Verify the say command 
 * expect(
 *   result.some(kb => 
 *     kb.key === "c" && 
 *     kb.command === "danceflow.say" && 
 *     kb.when === "(isCow && isAlive) && editorTextFocus && danceflow.move.active"
 *   ),
 *   "to be true"
 * );
 * 
 * // Verify the kill command
 * expect(
 *   result.some(kb =>
 *     kb.key === "k" &&
 *     kb.command === "danceflow.kill" &&
 *     kb.when === "(isAlive) && editorTextFocus && danceflow.move.active"
 *   ),
 *   "to be true"
 * );
 * ```
 */
export function processKeybindings(keybindings: UnresolvedKeybindingGroups): Builder.Keybinding[] {
  const resolvedGroups = resolveKeybindings(keybindings);
  const flattenedBindings = flattenKeybindings(resolvedGroups);
  
  // Convert Unicode key symbols to VS Code format
  return flattenedBindings.map(binding => {
    let key = binding.key;
    
    // Replace Unicode symbols with VS Code key syntax
    key = key.replace(/⇧/g, 'shift+')
             .replace(/⎈/g, 'ctrl+')
             .replace(/⎇/g, 'alt+');
    
    return {
      ...binding,
      key
    };
  }) as Builder.Keybinding[];
}