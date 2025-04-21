import * as vscode from "vscode";

export function isZen(): boolean {
  const config = vscode.workspace.getConfiguration();
  const activityBarVisible = config.get("workbench.activityBar.location") !== "hidden";
  const tabsVisible = config.get("workbench.editor.showTabs") !== "none";
  const menuBarVisible = config.get("window.menuBarVisibility") !== "hidden";
  
  return !activityBarVisible && !tabsVisible && !menuBarVisible;
}

export async function guideForZenViewSetup() {
  const interval = setInterval(async () => {
    if (!isZen()) {
      await vscode.commands.executeCommand('workbench.view.explorer');
      const userResponse = await vscode.window.showWarningMessage(
        'Drag "Timeline" and "Outline" out of Explorer into the sidebar, ' +
        'then press Ctrl+Enter for zenmaxxing.',
        'Yes, I have taste',
        'I HATE ZEN',
      );

      if (userResponse === 'Yes, I have taste') {
        if (isZen()) {
          clearInterval(interval);
        }
      } else if (userResponse === "I HATE ZEN") {
        clearInterval(interval);
      }
    } else {
      clearInterval(interval);
    }
  }, 3000);
}

export function makeZen() {
  const config = vscode.workspace.getConfiguration();
  
  config.update("workbench.activityBar.location", "hidden", vscode.ConfigurationTarget.Global);
  config.update("workbench.editor.showTabs", "none", vscode.ConfigurationTarget.Global);
  config.update("window.menuBarVisibility", "hidden", vscode.ConfigurationTarget.Global);
}

export function makeNormal() {
  const config = vscode.workspace.getConfiguration();
  
  config.update("workbench.activityBar.location", undefined, vscode.ConfigurationTarget.Global);
  config.update("workbench.editor.showTabs", undefined, vscode.ConfigurationTarget.Global);
  config.update("window.menuBarVisibility", undefined, vscode.ConfigurationTarget.Global);
}