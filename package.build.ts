import { type Builder, generateIgnoredKeybinds } from "./meta";
import { availableClipboardRegisters } from "./src/utils/constants";

// Shared values
// ============================================================================

const commandType = {
  type: "array",
  items: {
    type: ["array", "object", "string"],
    properties: {
      command: {
        type: "string",
      },
      args: {},
    },
    required: ["command"],
  },
};

const builtinModesAreDeprecatedMessage =
  "Built-in modes are deprecated. Use `#danceflow.modes#` instead.";

const modeNamePattern = {
  pattern: /^[a-zA-Z]\w*(\/\w+)?$/.source,
  patternErrorMessage: "",
};

const colorPattern = {
  pattern: /^(#[a-fA-F0-9]{3}|#[a-fA-F0-9]{6}|#[a-fA-F0-9]{8}|\$([a-zA-Z]+(\.[a-zA-Z]+)+))$/.source,
  patternErrorMessage: "Color should be an hex color or a '$' sign followed by a color identifier.",
};

const selectionDecorationType = {
  type: "object",
  properties: {
    applyTo: {
      enum: ["all", "main", "secondary"],
      default: "all",
      description: "The selections to apply this style to.",
      enumDescriptions: [
        "Apply to all selections.",
        "Apply to main selection only.",
        "Apply to all selections except main selection.",
      ],
    },
    backgroundColor: {
      type: "string",
      ...colorPattern,
    },
    borderColor: {
      type: "string",
      ...colorPattern,
    },
    borderStyle: {
      type: "string",
    },
    borderWidth: {
      type: "string",
    },
    borderRadius: {
      type: "string",
    },
    isWholeLine: {
      type: "boolean",
      default: false,
    },
    after: {
      type: "object",
    },
    before: {
      type: "object",
    },
  },
};

// Package information
// ============================================================================

const version = "0.5.15",
      preRelease = 1;

export const pkg = (modules: Builder.ParsedModule[]) => ({

  // Common package.json properties.
  // ==========================================================================

  name: "danceflow",
  description: "The ultimate Neovim alternative for VSCode. Custom modes, key bindings, and a clean interface—forked from Danceflow, inspired by Helix.",
  version,
  license: "ISC",

  author: {
    name: "RedDev"
  },

  contributors: [
    {
      name: "Grégoire Geis",
      email: "opensource@gregoirege.is"
    },
    {
      name: "Rémi Lavergne",
      url: "https://github.com/Strackeror"
    }
  ],

  repository: {
    type: "git",
    url: "https://github.com/71/danceflow.git",
  },

  main: "./out/extension.js",
  browser: "./out/web-extension.js",

  engines: {
    vscode: "^1.63.0",
  },

  scripts: {
    "check": "tsc -p ./ && eslint . && depcruise -v .dependency-cruiser.js src",
    "format": "eslint . --fix",

    "generate": "ts-node ./meta.ts",
    "generate:watch": "ts-node ./meta.ts --watch",

    "compile-base": "esbuild src/extension.ts --bundle --external:vscode --external:child_process --target=es2021 --format=cjs --minify --keep-names",
    "compile": "yarn run compile-base --outfile=out/extension.js",
    "compile:watch": "yarn run compile --watch --sourcemap",
    "compile-web": "yarn run compile-base --outfile=out/web-extension.js --define:process.platform=\\\"web\\\" --define:process.env={}",
    "compile-web:watch": "yarn run compile-web --watch --sourcemap",
    "compile-tests": "globstar -- esbuild \"{src,test}/**/*.ts\" --target=es2021 --format=cjs --outdir=out --outbase=. --sourcemap",
    "compile-tests:watch": "yarn run compile-tests --watch",

    "test": "yarn run compile --sourcemap && yarn run compile-tests && node ./out/test/run.js",

    "vscode:prepublish": "yarn run generate && yarn run compile && yarn run compile-web",
    "package": "vsce package --allow-star-activation",
    "publish": "vsce publish --allow-star-activation",
    "package:pre": `vsce package --allow-star-activation --pre-release --no-git-tag-version --no-update-package-json ${version.replace(/\d+$/, "$&" + preRelease.toString().padStart(3, "0"))}`,
    "publish:pre": `vsce publish --allow-star-activation --pre-release --no-git-tag-version --no-update-package-json ${version.replace(/\d+$/, "$&" + preRelease.toString().padStart(3, "0"))}`,
  },

  devDependencies: {
    "@types/glob": "^7.2.0",
    "@types/mocha": "^9.1.1",
    "@types/node": "^17.0.33",
    "@types/vscode": "^1.63.0",
    "@typescript-eslint/eslint-plugin": "^5.23.0",
    "@typescript-eslint/parser": "^5.23.0",
    "@vscode/test-electron": "^2.1.3",
    "chokidar": "^3.5.3",
    "dependency-cruiser": "^11.7.0",
    "esbuild": "^0.18.4",
    "eslint": "^8.15.0",
    "glob": "^8.0.3",
    "globstar": "^1.0.0",
    "mocha": "^10.0.0",
    "source-map-support": "^0.5.21",
    "ts-loader": "^9.3.1",
    "ts-node": "^10.8.1",
    "typescript": "^4.8.4",
    "unexpected": "^13.0.0",
    "vsce": "^2.7.0",
    "web-tree-sitter": "^0.20.8",
    "yaml": "^2.1.1",
  },

  // VS Code-specific properties.
  // ==========================================================================

  displayName: "Danceflow",
  publisher: "reddev",
  categories: ["Keymaps", "Other"],
  readme: "README.md",
  icon: "assets/danceflow.png",

  activationEvents: ["*"],
  extensionKind: ["ui", "workspace"],

  // Danceflow-specific properties.
  // ==========================================================================

  // The two properties below can be set when distributing Danceflow to ensure it
  // cannot execute arbitrary code (with `danceflow.run`) or system commands (with
  // `danceflow.selections.{filter,pipe}`).
  "danceflow.disableArbitraryCodeExecution": false,
  "danceflow.disableArbitraryCommandExecution": false,

  // Capabilities.
  // ==========================================================================

  capabilities: {
    untrustedWorkspaces: {
      supported: "limited",
      description:
        "Existing menu items and mode commands can only be updated if the current workspace is "
        + "trusted in order to ensure untrusted workspaces do not execute malicious commands.",
    },
    virtualWorkspaces: true,
  },

  contributes: {

    // Configuration.
    // ========================================================================

    configuration: {
      type: "object",
      title: "Danceflow",
      properties: {
        "danceflow.defaultMode": {
          type: "string",
          scope: "language-overridable",
          default: "move",
          description: "Controls which mode is set by default when an editor is opened.",
          ...modeNamePattern,
        },
        "danceflow.modes": {
          type: "object",
          scope: "language-overridable",
          additionalProperties: {
            type: "object",
            propertyNames: modeNamePattern,
            properties: {
              inheritFrom: {
                type: ["string", "null"],
                description:
                  "Controls how default configuration options are obtained for this mode. "
                  + "Specify a string to inherit from the mode with the given name, "
                  + "and null to inherit from the VS Code configuration.",
                ...modeNamePattern,
              },
              cursorStyle: {
                enum: [
                  "line",
                  "block",
                  "underline",
                  "line-thin",
                  "block-outline",
                  "underline-thin",
                  "inherit",
                  null,
                ],
                description: "Controls the cursor style.",
              },
              lineHighlight: {
                type: ["string", "null"],
                markdownDescription:
                  "Controls the line highlighting applied to active lines. "
                  + "Can be an hex color, a [theme color]("
                  + "https://code.visualstudio.com/api/references/theme-color) or null.",
                deprecationMessage:
                  "`lineHighlight` is deprecated. Use `danceflow.modes.*.backgroundColor` instead.",
                markdownDeprecationMessage:
                  "`lineHighlight` is deprecated. Use `#danceflow.modes#.*.backgroundColor` instead.",
                ...colorPattern,
              },
              lineNumbers: {
                enum: ["off", "on", "relative", "inherit", null],
                description: "Controls the display of line numbers.",
                enumDescriptions: [
                  "No line numbers.",
                  "Absolute line numbers.",
                  "Relative line numbers.",
                  "Inherit from `editor.lineNumbers`.",
                ],
              },
              onEnterMode: {
                ...commandType,
                description:
                  "Controls what commands should be executed upon entering this mode.",
              },
              onLeaveMode: {
                ...commandType,
                description:
                  "Controls what commands should be executed upon leaving this mode.",
              },
              selectionBehavior: {
                enum: ["caret", "character", null],
                default: "caret",
                description: "Controls how selections behave within VS Code.",
                markdownEnumDescriptions: [
                  "Selections are anchored to carets, which is the native VS Code behavior; "
                  + "that is, they are positioned *between* characters and can therefore be "
                  + "empty.",
                  "Selections are anchored to characters, like Kakoune; that is, they are "
                  + "positioned *on* characters, and therefore cannot be empty. "
                  + "Additionally, one-character selections will behave as if they were "
                  + "non-directional, like Kakoune.",
                ],
              },
              decorations: {
                ...selectionDecorationType,
                type: ["array", "object", "null"],
                description: "The decorations to apply to selections.",
                items: selectionDecorationType,
              },
              hiddenSelectionsIndicatorsDecoration: {
                ...selectionDecorationType,
                type: ["object", "null"],
                description:
                  "The decorations to apply to the hidden selections indicator, shown when "
                  + "some selections are below or above the lines currently shown in the editor. "
                  + "Specify an empty object {} to disable this indicator.",
              },
            },
            additionalProperties: false,
          },
          default: {
            "": {
              hiddenSelectionsIndicatorsDecoration: {
                after: {
                  color: "$list.warningForeground",
                },
                backgroundColor: "$inputValidation.warningBackground",
                borderColor: "$inputValidation.warningBorder",
                borderStyle: "solid",
                borderWidth: "1px",
                isWholeLine: true,
              },
            },
            modify: {
              onLeaveMode: [
                [".selections.save", {
                  register: " modify",
                }],
              ],
            },
            select: {
              cursorStyle: "underline",
              selectionBehavior: "character",
            },
            move: {
              cursorStyle: "block",
              selectionBehavior: "character",
              decorations: {
                applyTo: "main",
                backgroundColor: "$editor.hoverHighlightBackground",
                isWholeLine: true,
              },
              onEnterMode: [
                [".selections.restore", { register: " ^", try: true }],
              ],
              onLeaveMode: [
                [".selections.save", {
                  register: " ^",
                  style: {
                    borderColor: "$editor.selectionBackground",
                    borderStyle: "solid",
                    borderWidth: "2px",
                    borderRadius: "1px",
                  },
                  until: [
                    ["mode-did-change", { include: "move" }],
                    ["selections-did-change"],
                  ],
                }],
              ],
            },
          },
          description: "Controls the different modes available in Danceflow.",
        },

      "danceflow.menus": {
        type: "object",
          scope: "language-overridable",
          description: "Controls the different menus available in Danceflow.",
          additionalProperties: {
            type: "object",
            properties: {
              title: {
                type: "string",
              },
              items: {
                type: "object",
                additionalProperties: {
                  type: "object",
                  properties: {
                    text: {
                      type: "string",
                      description: "Text shown in the menu.",
                    },
                    command: {
                      type: "string",
                      description: "Command to execute on item selection.",
                    },
                    args: {
                      type: "array",
                      description: "Arguments to the command to execute.",
                    },
                  },
                  required: ["command"],
                },
              },
            },
            additionalProperties: false,
          },
          default: {
            "match": {
              title: "Match",
              items: {
                // Should be jump in move mode, extend in select mode, but jump for seek.enclosing is not implemented
                "m": { command: "danceflow.seek.enclosing", text: "Goto matching bracket" },
                "a": { command: "danceflow.openMenu", args: [{ menu: "object", title: "Match around" }], text: "Select around object" },
                "i": { command: "danceflow.openMenu", args: [{ menu: "object", title: "Match inside", pass: [{ inner: true }] }], text: "Select inside object" },
              },
            },

            "object": {
              title: "Select object...",
              items: ((command = "danceflow.seek.object") => ({
                "()": {
                  command,
                  args: [{ input: "\\((?#inner)\\)" }],
                  text: "parenthesis block",
                },
                "{}": {
                  command,
                  args: [{ input: "\\{(?#inner)\\}" }],
                  text: "braces block",
                },
                "[]": {
                  command,
                  args: [{ input: "\\[(?#inner)\\]" }],
                  text: "brackets block",
                },
                "<>": {
                  command,
                  args: [{ input: "<(?#inner)>" }],
                  text: "angle block",
                },
                '"': {
                  command,
                  args: [{ input: "(?#noescape)\"(?#inner)(?#noescape)\"" }],
                  text: "double quote string",
                },
                "'": {
                  command,
                  args: [{ input: "(?#noescape)'(?#inner)(?#noescape)'" }],
                  text: "single quote string",
                },
                "`": {
                  command,
                  args: [{ input: "(?#noescape)`(?#inner)(?#noescape)`" }],
                  text: "grave quote string",
                },
                "w": {
                  command,
                  args: [{ input: "[\\p{L}_\\d]+(?<after>[^\\S\\n]+)" }],
                  text: "word",
                },
                "W": {
                  command,
                  args: [{ input: "[\\S]+(?<after>[^\\S\\n]+)" }],
                  text: "WORD",
                },
                "p": {
                  command,
                  args: [{ input: "(?#predefined=paragraph)" }],
                  text: "paragraph",
                },
                "a": {
                  command,
                  args: [{ input: "(?#predefined=argument)" }],
                  text: "argument",
                },
                "!": {
                  command,
                  text: "custom object desc"
                },
              }))(),
            },

            "goto": {
              title: "Goto",
              items: {
                "g": {
                  text: "to line number else file start",
                  command: "danceflow.select.lineStart",
                  "args": [{ "count": 1 }],
                },
                "e": {
                  text: "to last line",
                  command: "danceflow.select.lineEnd",
                  args: [{ count: 2 ** 31 - 1 }],
                },
                "f": {
                  text: "to file/URLs in selections",
                  command: "danceflow.selections.open",
                },
                "h": {
                  text: "to line start",
                  command: "danceflow.select.lineStart",
                },
                "l": {
                  text: "to line end",
                  command: "danceflow.select.lineEnd",
                },
                "s": {
                  text: "to first non-blank in line",
                  command: "danceflow.select.lineStart",
                  args: [{ skipBlank: true }]
                },
                "d": {
                  text: "to definition",
                  command: "editor.action.revealDefinition",
                },
                "r": {
                  text: "to references",
                  command: "editor.action.goToReferences",
                },
                "j": {
                  text: "to last line",
                  command: "danceflow.select.lastLine",
                },
                "t": {
                  text: "to window top",
                  command: "danceflow.select.firstVisibleLine",
                },
                "c": {
                  text: "to window center",
                  command: "danceflow.select.middleVisibleLine",
                },
                "b": {
                  text: "to window bottom",
                  command: "danceflow.select.lastVisibleLine",
                },
                "a": {
                  text: "to last buffer",
                  command: "workbench.action.openPreviousRecentlyUsedEditorInGroup",
                },
                "A": {
                  text: "to last buffer...",
                  command: "workbench.action.quickOpenPreviousRecentlyUsedEditorInGroup",
                },
                "p": {
                  text: "to previous buffer",
                  command: "workbench.action.previousEditor",
                },
                "n": {
                  text: "to next buffer",
                  command: "workbench.action.nextEditor",
                },
                ".": {
                  text: "to last buffer modification position",
                  command: "danceflow.selections.restore",
                  args: [{ register: " modify" }],
                },
              },
            },

            "view": {
              title: "View",
              items: {
                "cz": {
                  text: "Align view center",
                  command: "danceflow.view.line",
                  args: [{ "at": "center" }],
                },
                "t": {
                  text: "Align view top",
                  command: "danceflow.view.line",
                  args: [{ "at": "top" }],
                },
                "b": {
                  text: "Align view bottom",
                  command: "danceflow.view.line",
                  args: [{ "at": "bottom" }],
                },
                "k": {
                  text: "Scroll view up",
                  command: "editorScroll",
                  args: [{ "by": "line", "revealCursor": true, "to": "up" }],
                },
                "j": {
                  text: "Scroll view down",
                  command: "editorScroll",
                  args: [{ "by": "line", "revealCursor": true, "to": "down" }],
                },
                "/": {
                  text: "Search for regex pattern",
                  command: "danceflow.search",
                },
                "?": {
                  text: "Reverse search for regex pattern",
                  command: "danceflow.search.backward",
                },
                "n": {
                  text: "Select next search match",
                  command: "danceflow.search.next",
                },
                "N": {
                  text: "Select previous search match",
                  command: "danceflow.search.previous",
                },
              },
            },
          } as Record<string,
            { items: Record<string, { text: string; command: string; args?: any[] }> }>,
        },

        "danceflow.systemClipboardRegister": {
          enum: ["dquote", null, ...availableClipboardRegisters],
          enumItemLabels: ['"', "None"],
          enumDescriptions: ["The default yank register", "Disables using the system clipboard"],
          default: "dquote",
          description: "Controls which register maps to the system clipboard.",
        },

        // Deprecated configuration:
        "danceflow.enabled": {
          type: "boolean",
          default: true,
          description: "Controls whether the Danceflow keybindings are enabled.",
          deprecationMessage: "danceflow.enabled is deprecated; disable the Danceflow extension instead.",
        },

        "danceflow.moveMode.lineHighlight": {
          type: ["string", "null"],
          default: "editor.hoverHighlightBackground",
          markdownDescription:
            "Controls the line highlighting applied to active lines in move mode. "
            + "Can be an hex color, a [theme color]("
            + "https://code.visualstudio.com/api/references/theme-color) or null.",
          markdownDeprecationMessage: builtinModesAreDeprecatedMessage,
        },
        "danceflow.modifyMode.lineHighlight": {
          type: ["string", "null"],
          default: null,
          markdownDescription:
            "Controls the line highlighting applied to active lines in modify mode. "
            + "Can be an hex color, a [theme color]("
            + "https://code.visualstudio.com/api/references/theme-color) or null.",
          markdownDeprecationMessage: builtinModesAreDeprecatedMessage,
        },
        "danceflow.moveMode.lineNumbers": {
          enum: ["off", "on", "relative", "inherit"],
          default: "relative",
          description: "Controls the display of line numbers in move mode.",
          enumDescriptions: [
            "No line numbers.",
            "Absolute line numbers.",
            "Relative line numbers.",
            "Inherit from `editor.lineNumbers`.",
          ],
          markdownDeprecationMessage: builtinModesAreDeprecatedMessage,
        },
        "danceflow.modifyMode.lineNumbers": {
          enum: ["off", "on", "relative", "inherit"],
          default: "inherit",
          description: "Controls the display of line numbers in modify mode.",
          enumDescriptions: [
            "No line numbers.",
            "Absolute line numbers.",
            "Relative line numbers.",
            "Inherit from `editor.lineNumbers`.",
          ],
          markdownDeprecationMessage: builtinModesAreDeprecatedMessage,
        },
        "danceflow.moveMode.cursorStyle": {
          enum: [
            "line",
            "block",
            "underline",
            "line-thin",
            "block-outline",
            "underline-thin",
            "inherit",
          ],
          default: "inherit",
          description: "Controls the cursor style in move mode.",
          markdownDeprecationMessage: builtinModesAreDeprecatedMessage,
        },
        "danceflow.modifyMode.cursorStyle": {
          enum: [
            "line",
            "block",
            "underline",
            "line-thin",
            "block-outline",
            "underline-thin",
            "inherit",
          ],
          default: "inherit",
          description: "Controls the cursor style in modify mode.",
          markdownDeprecationMessage: builtinModesAreDeprecatedMessage,
        },
        "danceflow.modifyMode.selectionStyle": {
          type: "object",
          default: {
            borderColor: "$editor.selectionBackground",
            borderStyle: "solid",
            borderWidth: "2px",
            borderRadius: "1px",
          },
          description: "The style to apply to selections in modify mode.",
          properties: (Object as any).fromEntries(
            [
              "backgroundColor",
              "borderColor",
              "borderStyle",
              "borderWidth",
              "borderRadius",
            ].map((x) => [x, { type: "string" }]),
          ),
          markdownDeprecationMessage: builtinModesAreDeprecatedMessage,
        },
        "danceflow.selectionBehavior": {
          enum: ["caret", "character"],
          default: "caret",
          description: "Controls how selections behave within VS Code.",
          markdownEnumDescriptions: [
            "Selections are anchored to carets, which is the native VS Code behavior; that is, "
            + "they are positioned *between* characters and can therefore be empty.",
            "Selections are anchored to characters, like Kakoune; that is, they are positioned "
            + "*on* characters, and therefore cannot be empty. Additionally, one-character "
            + "selections will behave as if they were non-directional, like Kakoune.",
          ],
          markdownDeprecationMessage: builtinModesAreDeprecatedMessage,
        },
      },
    },
    
    // Views.
    // ========================================================================

    viewsContainers: {
      activitybar: [
        {
          id: "danceflow",
          title: "Danceflow",
          icon: "assets/danceflow-white.svg",
        },
      ],
    },

    views: {
      danceflow: [
        {
          id: "registers",
          name: "Registers",
        },
      ],
    },

    // Commands.
    // ========================================================================

    commands: modules.flatMap((module) => module.commands.map((x) => ({
      command: x.id,
      title: x.title,
      category: "Danceflow",
      enablement: x.enablement,
    }))),

    menus: {
      commandPalette: modules.flatMap((module) => module.commands.map((x) => ({
        command: x.id,
        when: x.when,
      }))),
    },

    // Keybindings.
    // ========================================================================

    keybindings: (() => {
      const keybindings = modules
        .flatMap((module) => module.keybindings)
        .filter((keybinding) => ["core", "helix", undefined].includes(keybinding.category))
        .map(({ category, ...kb }) => kb);

      return [
        ...keybindings,
        ...generateIgnoredKeybinds(keybindings, `editorTextFocus && danceflow.mode == 'move'`),
      ];
    })(),

  },
});

// Save to package.json
// ============================================================================

export async function build(builder: Builder) {
  const fs = await import("fs/promises");

  await fs.writeFile(
    `${__dirname}/package.json`,
    JSON.stringify(pkg(await builder.getCommandModules()), undefined, 2) + "\n",
    "utf-8",
  );
}
