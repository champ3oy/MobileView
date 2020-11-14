// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require("vscode");

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed

/**
 * @param {vscode.ExtensionContext} context
 */
let activate = (context) => {
  // Use the console to output diagnostic information (console.log) and errors (console.error)
  // This line of code will only be executed once when your extension is activated
  console.log('Congratulations, your extension "mobileview" is now active!');

  // The command has been defined in the package.json file
  // Now provide the implementation of the command with  registerCommand
  // The commandId parameter must match the command field in package.json
  let getWebviewContent = (url) => {
    return `<!DOCTYPE html>
  <html lang="en">
  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>Cat Coding</title>
  </head>
  <style>
  body {
	display: flex;
	justify-content: center;
	padding: 5%;
  }
  .iphone-x {
	position: relative;
	z-index: 1;
	height: 694px;
	width: 342px;
  }
  .iphone-x *, .iphone-x *::before, .iphone-x *::after {
	box-sizing: border-box;
	display: block;
  }
  .iphone-x .side {
	background: #1c1c1c;
	border-radius: 54px;
	box-shadow: inset 0 0 2px 2px dimgrey, inset 0 0 0 6px #e2e3e9, 0px -1px 13px 9px rgba(255,255,255,0.8) inset;
	height: 694px;
	padding: 15px 22px;
	width: 342px;
	z-index: 1;
  }
  .iphone-x .screen {
	background:#fff;
	background-position: center center;
	background-size: cover;
	border-radius: 33px;
	position: relative;
	height: 652px;
	width: 300px;
	margin-left: -1px;
	margin-top: 6px;
	z-index:198;
	overflow:hidden;
  }
  video {
	height: 700px;
	width: 350px;
	margin-top: -30px;
	margin-left:-10px;
  }
  .iphone-x .line::after, .iphone-x .line::before {
	content: "";
	position: absolute;
	border: solid rgba(68, 68, 68, 0.25);
	border-width: 0 6px;
	height: 5px;
	left: 0;
	width: 100%;
	z-index: 9;
  }
  .iphone-x .line::after {
	top: 68px;
  }
  .iphone-x .line::before {
	bottom: 68px;
  }
  .iphone-x .header {
	background: rgb(68, 68, 68);;
	border-bottom-left-radius: 13px;
	border-bottom-right-radius: 13px;
	height: 24px;
	left: 50%;
	margin-left: -82px;
	position: absolute;
	top: 15px;
	width: 164px;
	z-index: 199;
  }
  .iphone-x .sensor-1::after, .iphone-x .sensor-1::before {
	content: "";
	position: absolute;
  }
  .iphone-x .sensor-1::after {
	background: #222;
	border-radius: 50%;
	height: 11px;
	width: 11px;
	left: 1%;
	margin-left: 10px;
	top: 3px;
  }
  .iphone-x .sensor-1::before {
	background: #222;
	border-radius: 50%;
	height: 11px;
	width: 11px;
	left: 10%;
	margin-left: 20px;
	top: 3px;
  }
  .iphone-x .sensor-2::after, .iphone-x .sensor-2::before {
	content: "";
	position: absolute;
  }
  .iphone-x .sensor-2::before {
	background: #333;
	border-radius: 2.5px;
	height: 5px;
	width: 40px;
	left: 50%;
	margin-left: -20px;
	top: 7px;
  }
  .iphone-x .sensor-3::after, .iphone-x .sensor-3::before {
	content: "";
	position: absolute;
  }
  .iphone-x .sensor-3::before {
	background: #444;
	border-radius: 50%;
	height: 11px;
	width: 11px;
	left: 50%;
	margin-left: 35px;
	top: 3px;
	box-shadow:0px 0px 5px 2px navy inset
  }
  .iphone-x .sensor-3::after {
	background: #222;
	border-radius: 50%;
	height: 15px;
	width: 15px;
	left: 65%;
	margin-left: 33px;
  }
  .iphone-x .volume-button {
	background: #c8cacb;
	height: 26px;
	left: -2px;
	position: absolute;
	top: 92px;
	width: 3px;
  }
  .iphone-x .volume-button::after, .iphone-x .volume-button::before {
	content: "";
	position: absolute;
	background: #c8cacb;
	height: 50px;
	left: 0;
	width: 3px;
  }
  .iphone-x .volume-button::after {
	top: 48px;
  }
  .iphone-x .volume-button::before {
	top: 112px;
  }
  .iphone-x .power-button {
	background: #c8cacb;
	height: 80px;
	right: -2px;
	position: absolute;
	top: 160px;
	width: 3px;
  }
  </style>
  <body>
  <div class="iphone-x">
  <div class="side">
  <iframe src="${url}" class="screen" seamless="seamless">
  </iframe>
  </div>
  <div class="line"></div>
  <div class="header">
    <div class="sensor-1"></div>
    <div class="sensor-2"></div>
    <div class="sensor-3"></div>
  </div>
  <div class="volume-button"></div>
  <div class="power-button"></div>
</div>
  </body>
  </html>`;
  };

  let disposable = vscode.commands.registerCommand(
    "mobileview.start",
    async () => {
      // The code you place here will be executed every time your command is executed

      // Display a message box to the user
      // vscode.window.showInformationMessage("Hello World from MobileView!");

      let options = {
        prompt: "Enter your local server URL.",
        placeHolder: "http://localhost:3000",
      };

	  const input = await vscode.window.showInputBox(options);
	  
	  let protocal = input.substring(0, 4).toLocaleLowerCase()



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

      if (!!pattern.test(input)) {
        const panel = vscode.window.createWebviewPanel(
          "mobileView", // Identifies the type of the webview. Used internally
          "Mobile View", // Title of the panel displayed to the user
          vscode.ViewColumn.One, // Editor column to show the new webview panel in.
          { enableScripts: true } // Webview options. More on these later.
        );
        // And set its HTML content
        panel.webview.html = getWebviewContent(input);
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
