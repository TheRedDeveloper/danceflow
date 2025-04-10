import * as vscode from "vscode";

import * as api from "./api";
import { Extension } from "./state/extension";
import { extensionId, extensionName } from "./utils/constants";
import { guideForZenViewSetup, makeNormal } from "./api/ui";

/**
 * Global state of the extension.
 */
export let extensionState: Extension | undefined;

let isActivated = false;

/**
 * Function called by VS Code to activate the extension.
 */
export async function activate() {
  isActivated = true;

  const extensionData = vscode.extensions.getExtension(extensionId),
        extensionPackageJSON = extensionData?.packageJSON;

  if (extensionPackageJSON?.[`${extensionName}.disableArbitraryCodeExecution`]) {
    api.disableRunFunction();
  } else {
    api.setRunGlobals({ vscode, ...api });
  }

  if (extensionPackageJSON?.[`${extensionName}.disableArbitraryCommandExecution`]) {
    api.disableExecuteFunction();
  }

  // Apply zen mode when extension activates
  guideForZenViewSetup();

  const { commands } = await import("./commands/load-all");

  if (!isActivated) {
    return;
  }

  // Create extension instance
  const extension = new Extension(commands);
  extensionState = extension;

  // Use the createAutoDisposable method to ensure UI restoration on deactivation
  const disposable = extension.createAutoDisposable();
  disposable.addDisposable({
    dispose: () => {
      makeNormal();
    }
  });

  return { api, extension };
}

/**
 * Function called by VS Code to deactivate the extension.
 */
export function deactivate() {
  isActivated = false;
  extensionState?.dispose();
}

export { api };
