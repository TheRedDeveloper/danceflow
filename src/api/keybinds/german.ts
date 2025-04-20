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
 * @param key The key sequence to transform (e.g., "⇧/" or "ctrl+[")
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

export const germanKeybindings: UnresolvedKeybindingGroups = Object.fromEntries(
  Object.entries(defaultKeybindings).map(([group, bindings]) => [
    group,
    Object.fromEntries(
      Object.entries(bindings).map(([command, keys]) => [
        command,
        keys.map((key) => transformKeySequence(key, qwertyToQwertz)),
      ])
    ),
  ])
) as UnresolvedKeybindingGroups;