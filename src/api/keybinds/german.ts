import { UnresolvedKeybindingGroups, defaultKeybindings } from "./default";

// Define the QWERTY to QWERTZ mapping
const qwertyToQwertz = {
  '[': '[BracketLeft]',
  ']': '[BracketRight]',
  ';': '[Semicolon]',
  "'": '[Quote]',
  '\\': '[Backslash]',
  '-': '[Minus]',
  '=': '[Equal]',
  '/': '-',
};

/**
 * Transforms a key sequence using the provided mapping, replacing each character
 * if it exists in the mapping, otherwise keeping it as-is.
 * @param key The key sequence to transform (e.g., "⇧/")
 * @param mapping The QWERTY to QWERTZ mapping
 * @returns The transformed key sequence
 */
function transformKeySequence(key: string, mapping: Record<string, string>): string {
  let result = '';
  for (const char of key) {
    if (char in mapping) {
      result += mapping[char];
    } else {
      result += char;
    }
  }
  return result;
}

/**
 * Creates alternative key bindings for Windows keyboard layouts
 * by replacing bracket notation with oem_* codes where needed.
 * @param transformedKeys Array of transformed key combinations
 * @returns Array including both original and alternative bindings
 */
function createAlternativeBindings(transformedKeys: string[]): string[] {
  const result = [...transformedKeys];
  
  const replacements = {
    '[BracketLeft]': 'oem_1',
    '[BracketRight]': 'oem_plus',
    '[Semicolon]': 'oem_3',
    '[Quote]': 'oem_7',
    '[Backslash]': 'oem_2',
    '[Minus]': 'oem_4',
    '[Equal]': 'oem_6',
    '-': 'oem_minus'
  };
  
  for (const key of transformedKeys) {
    for (const [original, replacement] of Object.entries(replacements)) {
      if (key.includes(original)) {
        result.push(key.replace(new RegExp(original.replace(/[[\]]/g, '\\$&'), 'g'), replacement));
      }
    }
  }
  
  return result;
}
  
export const germanKeybindings: UnresolvedKeybindingGroups = Object.fromEntries(
  Object.entries(defaultKeybindings).map(([group, bindings]) => [
    group,
    Object.fromEntries(
      Object.entries(bindings).map(([command, keys]) => [
        command,
        createAlternativeBindings(keys.map((key) => transformKeySequence(key, qwertyToQwertz))),
      ])
    ),
  ])
) as UnresolvedKeybindingGroups;