import { KeybindingGroups, KeyBinding } from './default';

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
export interface ResolvedKeybindingGroups {
  global: ResolvedKeybinding[];
  inspect: ResolvedKeybinding[];
  interact: ResolvedKeybinding[];
  change: ResolvedKeybinding[];
  selectedMove: ResolvedKeybinding[];
  move: ResolvedKeybinding[];
}

/**
 * All keybindings flattened into a single array with conditions
 */
export type FlattenedKeybindings = ResolvedKeybinding[];

/**
 * Order of priority for keybinding groups
 * Earlier groups override later ones
 */
const priorityOrder = [
  'global',
  'inspect',
  'interact',
  'change',
  'selectedMove',
  'move'
] as const;

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
function parseCommandArgs(commandString: string): { command: string; args?: Record<string, any> } {
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
function generateCondition(
  group: string, 
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
    const currentIndex = priorityOrder.indexOf(group as typeof priorityOrder[number]);
    
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
function expandKeybindingGroup(
  group: string, 
  bindings: Record<string, KeyBinding>
): ResolvedKeybinding[] {
  const result: ResolvedKeybinding[] = [];

  Object.entries(bindings).forEach(([commandString, keys]) => {
    const { command, args } = parseCommandArgs(commandString);
    
    // Create a separate binding for each key assigned to this command
    keys.forEach(key => {
      result.push({
        key,
        command,
        ...(args && { args }),
      });
    });
  });

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
export function resolveKeybindings(keybindings: KeybindingGroups): ResolvedKeybindingGroups {
  // First pass: expand multi-keys without conditions
  const expandedGroups: ResolvedKeybindingGroups = {
    global: expandKeybindingGroup('global', keybindings.global),
    inspect: expandKeybindingGroup('inspect', keybindings.inspect),
    interact: expandKeybindingGroup('interact', keybindings.interact),
    change: expandKeybindingGroup('change', keybindings.change),
    selectedMove: expandKeybindingGroup('selectedMove', keybindings.selectedMove),
    move: expandKeybindingGroup('move', keybindings.move),
  };

  // Second pass: add conditions based on priority overrides
  const resultGroups: ResolvedKeybindingGroups = {
    global: expandedGroups.global,
    inspect: [],
    interact: [],
    change: [],
    selectedMove: [],
    move: [],
  };

  // For each non-global group, add appropriate conditions
  priorityOrder.slice(1).forEach(group => {
    resultGroups[group] = expandedGroups[group].map(binding => {
      const condition = generateCondition(group, binding.key, expandedGroups);
      
      if (condition) {
        return { ...binding, condition };
      }
      
      return binding;
    });
  });

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
  return [
    ...groups.global,
    ...groups.inspect,
    ...groups.interact,
    ...groups.change,
    ...groups.selectedMove,
    ...groups.move
  ];
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
 * expect(
 *   processKeybindings(mockKeybindings),
 *   "to include",
 *   { key: "esc", command: "danceflow.cancel" }
 * );
 * 
 * expect(
 *   processKeybindings(mockKeybindings),
 *   "to include",
 *   { 
 *     key: "m", 
 *     command: "danceflow.openMenu", 
 *     args: { menu: "match" },
 *     condition: "danceflow.move.active"
 *   }
 * );
 * ```
 */
export function processKeybindings(keybindings: KeybindingGroups): FlattenedKeybindings {
  const resolvedGroups = resolveKeybindings(keybindings);
  return flattenKeybindings(resolvedGroups);
}

/**
 * Process and return the final keybinding structure
 */
export function getResolvedKeybindingGroups(keybindings: KeybindingGroups): ResolvedKeybindingGroups {
  return resolveKeybindings(keybindings);
}
