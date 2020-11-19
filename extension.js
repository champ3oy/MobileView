const vscode = require("vscode");
const path = require("path");
const mobileviewapp = require("./components/mobileviewapp")

/**
 * @param {vscode.ExtensionContext} context
 */
let activate = (context) => {
  console.log('Congratulations, your extension "mobileview" is now active!');

  let getWebviewContent = (url, refresh, stop, close, dark) => {
	  mobileviewapp()
  };

  let disposable = vscode.commands.registerCommand(
    "mobileview.start",
    async () => {
      let options = {
        prompt: "Enter your local server URL.",
        placeHolder: "http://localhost:3000",
      };

      const input = await vscode.window.showInputBox(options);

      let protocal = input.substring(0, 4).toLocaleLowerCase();

      var pattern = new RegExp(
        "^(https?:\\/\\/)?" + // protocol
          "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
          "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
          "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
          "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
          "(\\#[-a-z\\d_]*)?$",
        "i"
      ); // fragment locator

      //   vscode.window.registerTreeDataProvider('nodeDependencies', new DepNodeProvider());

      let _input = input.includes("localhost")
        ? input.replace("localhost", "127.0.0.1")
        : input;

      if (
        !!pattern.test(
          _input.substring(0, 4) == "http" ? _input : `http://${_input}`
        )
      ) {
        const panel = vscode.window.createWebviewPanel(
          "mobileView", // Identifies the type of the webview. Used internally
          "Mobile View", // Title of the panel displayed to the user
          vscode.ViewColumn.One, // Editor column to show the new webview panel in.
          { enableScripts: true } // Webview options. More on these later.
        );
        // Get path to resource on disk
        const refresh_d = vscode.Uri.file(
          path.join(context.extensionPath, "media", "refresh-outline.svg")
        );
        // Get path to resource on disk
        const stop_d = vscode.Uri.file(
          path.join(context.extensionPath, "media", "stop-outline.svg")
        );
        // Get path to resource on disk
        const close_d = vscode.Uri.file(
          path.join(context.extensionPath, "media", "close-outline.svg")
        );
        // Get path to resource on disk
        const dark_D = vscode.Uri.file(
          path.join(context.extensionPath, "media", "contrast-outline.svg")
        );

        // And get the special URI to use with the webview
        const refresh_n = panel.webview.asWebviewUri(refresh_d);
        // And get the special URI to use with the webview
        const stop_n = panel.webview.asWebviewUri(stop_d);
        // And get the special URI to use with the webview
        const close_n = panel.webview.asWebviewUri(close_d);
        // And get the special URI to use with the webview
        const dark_n = panel.webview.asWebviewUri(dark_D);

        // And set its HTML content
        panel.webview.html = getWebviewContent(
          _input.substring(0, 4) == "http" ? _input : `http://${_input}`,
          refresh_n,
          stop_n,
          close_n,
          dark_n
        );
      } else {
        // Display a message box to the user
        vscode.window.showErrorMessage("Please enter a valid URL");
      }
    }
  );

  context.subscriptions.push(disposable);
};

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
