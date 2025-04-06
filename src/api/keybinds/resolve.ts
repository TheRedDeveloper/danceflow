import { 
  UnresolvedKeybindingGroups, 
  UnresolvedKeyBinding,
  keybindingGroupNames,
  KeybindingGroupName,
  KeybindingGroups
} from './default';

/**
 * Single resolved keybinding
 */
export interface ResolvedKeybinding {
  key: string;
  command: string;
  condition?: string;
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
 * ```
 */
export function parseCommandArgs(commandString: string): { command: string; args?: Record<string, any> } {
  const regex = /^([^{]+)(\{.*\})?$/;
  const match = regex.exec(commandString);
  if (!match) {
    return { command: commandString };
  }

  const [, command, argsString] = match;
  
  if (!argsString) {
    return { command };
  }

  try {
    const args = JSON.parse(argsString);
    return { command, args };
  } catch (e) {
    console.error(`Failed to parse arguments for command: ${commandString}`, e);
    return { command };
  }
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
 *     { key: 'j', command: 'global.j' }
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
 * // Global has no condition
 * expect(
 *   generateCondition('global', 'h', mockKeybindings),
 *   "to be undefined"
 * );
 * 
 * // Inspect is overridden by global for key 'h'
 * expect(
 *   generateCondition('inspect', 'h', mockKeybindings),
 *   "to equal",
 *   "danceflow.inspect.active && !danceflow.global.active"
 * );
 * 
 * // SelectedMove is overridden by global and inspect for key 'h'
 * expect(
 *   generateCondition('selectedMove', 'h', mockKeybindings),
 *   "to equal",
 *   "danceflow.selectedMove.active && !danceflow.global.active && !danceflow.inspect.active"
 * );
 * 
 * // Move 'k' is overridden by inspect
 * expect(
 *   generateCondition('move', 'k', mockKeybindings),
 *   "to equal",
 *   "danceflow.move.active && !danceflow.inspect.active"
 * );
 * 
 * // Change 'm' has no overrides
 * expect(
 *   generateCondition('change', 'm', mockKeybindings),
 *   "to equal",
 *   "danceflow.change.active"
 * );
 * ```
 */
export function generateCondition(
  group: KeybindingGroupName, 
  key: string, 
  allKeybindings: ResolvedKeybindingGroups
): string | undefined {
  if (group === 'global') {
    // Global keybindings don't need conditions
    return undefined;
  }

  // Find all higher priority groups that use the same key
  const overridingGroups = priorityOrder.filter(g => {
    // Only consider groups with higher priority than current group
    const groupIndex = priorityOrder.indexOf(g);
    const currentIndex = priorityOrder.indexOf(group);
    
    if (groupIndex >= currentIndex) {
      return false;
    }
    
    // Check if this group has the same key bound
    return allKeybindings[g].some(binding => binding.key === key);
  });

  if (overridingGroups.length === 0) {
    // Only add the mode condition if no higher priority groups override this key
    return `danceflow.${group}.active`;
  }

  // Build condition that checks current mode is active AND no higher priority modes are active
  const negatedOverrides = overridingGroups
    .map(g => `!danceflow.${g}.active`)
    .join(' && ');

  return `danceflow.${group}.active && ${negatedOverrides}`;
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
 *   'danceflow.openMenu{"menu": "match"}': ["m"]
 * };
 * 
 * expect(
 *   expandKeybindingGroup('move', mockBindings),
 *   "to equal",
 *   [
 *     { key: "h", command: "danceflow.command1" },
 *     { key: "j", command: "danceflow.command1" },
 *     { key: "k", command: "danceflow.command2" },
 *     { key: "m", command: "danceflow.openMenu", args: { menu: "match" } }
 *   ]
 * );
 * ```
 */
export function expandKeybindingGroup(
  group: KeybindingGroupName, 
  bindings: UnresolvedKeyBinding
): ResolvedKeybinding[] {
  const result: ResolvedKeybinding[] = [];

  for (const [commandString, keys] of Object.entries(bindings)) {
    const { command, args } = parseCommandArgs(commandString);
    
    // Create a separate binding for each key assigned to this command
    if (Array.isArray(keys)) {
      for (const key of keys) {
        result.push({
          key,
          command,
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
 *     "danceflow.global.h": ["h"]
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
 *     'danceflow.openMenu{"menu": "match"}': ["m"]
 *   }
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
 * // Inspect 'h' is overridden by global
 * expect(
 *   resolved.inspect.find(b => b.key === "h"),
 *   "to equal",
 *   { 
 *     key: "h", 
 *     command: "danceflow.inspect.h", 
 *     condition: "danceflow.inspect.active && !danceflow.global.active" 
 *   }
 * );
 * 
 * // SelectedMove 'h' is overridden by global and inspect
 * expect(
 *   resolved.selectedMove.find(b => b.key === "h"),
 *   "to equal",
 *   { 
 *     key: "h", 
 *     command: "danceflow.selectedMove.h", 
 *     condition: "danceflow.selectedMove.active && !danceflow.global.active && !danceflow.inspect.active" 
 *   }
 * );
 * 
 * // Move command with args
 * expect(
 *   resolved.move.find(b => b.key === "m"),
 *   "to equal",
 *   { 
 *     key: "m", 
 *     command: "danceflow.openMenu", 
 *     args: { menu: "match" },
 *     condition: "danceflow.move.active"
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
  
  // Global group doesn't need conditions
  resultGroups.global = expandedGroups.global;
  
  // For each non-global group, add appropriate conditions
  for (const group of priorityOrder.slice(1)) {
    resultGroups[group] = expandedGroups[group].map(binding => {
      const condition = generateCondition(group, binding.key, expandedGroups);
      
      if (condition) {
        return { ...binding, condition };
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
 *   inspect: [
 *     { key: "f", command: "danceflow.inspect.f" },
 *     { key: "h", command: "danceflow.inspect.h", condition: "danceflow.inspect.active && !danceflow.global.active" }
 *   ],
 *   interact: [
 *     { key: "y", command: "danceflow.interact.y", condition: "danceflow.interact.active" }
 *   ],
 *   change: [],
 *   selectedMove: [],
 *   move: [
 *     { key: "m", command: "danceflow.openMenu", args: { menu: "match" }, condition: "danceflow.move.active" }
 *   ]
 * };
 * 
 * expect(
 *   flattenKeybindings(mockGroups),
 *   "to equal",
 *   [
 *     { key: "esc", command: "danceflow.cancel" },
 *     { key: "h", command: "danceflow.global.h" },
 *     { key: "f", command: "danceflow.inspect.f" },
 *     { key: "h", command: "danceflow.inspect.h", condition: "danceflow.inspect.active && !danceflow.global.active" },
 *     { key: "y", command: "danceflow.interact.y", condition: "danceflow.interact.active" },
 *     { key: "m", command: "danceflow.openMenu", args: { menu: "match" }, condition: "danceflow.move.active" }
 *   ]
 * );
 * ```
 */
export function flattenKeybindings(groups: ResolvedKeybindingGroups): FlattenedKeybindings {
  return keybindingGroupNames.flatMap(group => groups[group]);
}

/**
 * Main function to process keybindings from default config to the final format
 * 
 * ### Example
 * 
 * ```js
 * const mockKeybindings = {
 *   global: {
 *     "danceflow.cancel": ["esc"]
 *   },
 *   inspect: {
 *     "danceflow.inspect.f": ["f"]
 *   },
 *   interact: {},
 *   change: {},
 *   selectedMove: {},
 *   move: {
 *     'danceflow.openMenu{"menu": "match"}': ["m"]
 *   }
 * };
 * 
 * const result = processKeybindings(mockKeybindings);
 * 
 * // Verify the global esc key binding
 * expect(
 *   result.some(kb => kb.key === "esc" && kb.command === "danceflow.cancel" && !kb.condition),
 *   "to be true"
 * );
 * 
 * // Verify the move menu binding
 * expect(
 *   result.some(kb => 
 *     kb.key === "m" && 
 *     kb.command === "danceflow.openMenu" && 
 *     kb.args && kb.args["menu"] === "match" &&
 *     kb.condition === "danceflow.move.active"
 *   ),
 *   "to be true"
 * );
 * ```
 */
export function processKeybindings(keybindings: UnresolvedKeybindingGroups): FlattenedKeybindings {
  const resolvedGroups = resolveKeybindings(keybindings);
  return flattenKeybindings(resolvedGroups);
}

/**
 * Process and return the final keybinding structure
 */
export function getResolvedKeybindingGroups(keybindings: UnresolvedKeybindingGroups): ResolvedKeybindingGroups {
  return resolveKeybindings(keybindings);
}
