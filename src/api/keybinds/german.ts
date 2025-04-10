import { UnresolvedKeybindingGroups, defaultKeybindings } from "./default";

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

export const germanKeybindings: UnresolvedKeybindingGroups = Object.fromEntries(Object.entries(defaultKeybindings).map(([group, bindings]) => {
  return [group, Object.fromEntries(Object.entries(bindings).map(([command, keys]) => {
    return [command, keys.map((key) => {
      let qwertzKey = key;
      for (const [qwerty, qwertz] of Object.entries(qwertyToQwertz)) {
        qwertzKey = qwertzKey.replace(qwerty, qwertz);
      }
      return qwertzKey;
    })];
  }))];
})) as UnresolvedKeybindingGroups;