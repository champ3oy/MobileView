const vscode = require("vscode");
const path = require("path");

/**
 * @param {vscode.ExtensionContext} context
 */
let activate = (context) => {
  console.log('Congratulations, your extension "mobileview" is now active!');

  let getWebviewContent = (url, refresh, stop, close, dark) => {
    return `<!DOCTYPE html>
	<html lang="en">
	  <head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>MobileView</title>
		<!-- <link rel="stylesheet" href="index.css" /> -->
	  </head>
	  <style>
		body {
		  display: flex;
		  flex-direction: column;
		  justify-content: center;
		  align-items: center;
		  padding: 0%;
		  overflow: hidden;
		}
		body::-webkit-scrollbar {
		  display: none;
		}
		iframe::-webkit-scrollbar {
		  display: none;
		}
		body,
		iframe {
		  -ms-overflow-style: none; /* IE and Edge */
		  scrollbar-width: none; /* Firefox */
		}
		iframe {
		  overflow-x: hidden;
		  overflow-y: hidden;
		}
		.iphone-x {
		  position: relative;
		  z-index: 1;
		  height: 694px;
		  width: 342px;
		}
		.iphone-x *,
		.iphone-x *::before,
		.iphone-x *::after {
		  box-sizing: border-box;
		  display: block;
		}
		.iphone-x .side {
		  background: #1c1c1c;
		  border-radius: 54px;
		  box-shadow: inset 0 0 2px 2px dimgrey, inset 0 0 0 6px #e2e3e9,
			0px -1px 13px 9px rgba(255, 255, 255, 0.8) inset;
		  height: 694px;
		  padding: 15px 22px;
		  width: 342px;
		  z-index: 1;
		}
		.iphone-x .bazzel {
		  background: #fff;
		  border-radius: 54px;
		  box-shadow: inset 0 0 2px 2px #c8cacb, inset 0 0 0 6px #e2e3e4;
		  height: 694px;
		  padding: 15px 22px;
		  width: 342px;
		  z-index: 1;
		}
		.screen.vscode-light {
			background: #000;
			color: black;
		}
		.screen.vscode-dark {
			background: white;
			color: white;
		}
		.iphone-x .screen {
		  background-position: center center;
		  background-size: cover;
		  border-radius: 33px;
		  position: relative;
		  height: 652px;
		  width: 300px;
		  margin-left: -1px;
		  margin-top: 6px;
		  z-index: 198;
		  overflow: hidden;
		}
		video {
		  height: 700px;
		  width: 350px;
		  margin-top: -30px;
		  margin-left: -10px;
		}
		.iphone-x .line::after,
		.iphone-x .line::before {
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
		  background: #1c1c1c;
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
		.iphone-x .header1 {
		  background: #fff;
		  border-bottom-left-radius: 16px;
		  border-bottom-right-radius: 16px;
		  height: 20px;
		  left: 50%;
		  margin-left: -82px;
		  position: absolute;
		  top: 15px;
		  width: 164px;
		  z-index: 199;
		}
		.iphone-x .sensor-1::after,
		.iphone-x .sensor-1::before {
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
		.iphone-x .sensor-2::after,
		.iphone-x .sensor-2::before {
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
		.iphone-x .sensor-3::after,
		.iphone-x .sensor-3::before {
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
		  box-shadow: 0px 0px 5px 2px navy inset;
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
		.iphone-x .volume-button::after,
		.iphone-x .volume-button::before {
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
		.control {
		  width: 300px;
		  height: 40px;
		  background-color: rgb(68, 68, 68);
		  margin-bottom: 10px;
		  border-radius: 5px;
		  display: flex;
		  justify-content: space-evenly;
		  align-items: center;
		  margin-top: 8px
		}
	  </style>
	  <body>
		<div class="control">
		  <div
			style="cursor: pointer"
			id="refresh"
		  >
			<img src="${refresh}" style="width: 20px; height: 20px" />
		  </div>
		  <div
			style="cursor: pointer"
			onclick="window.parent.location = document.referrer"
		  >
			<img src="${stop}" style="width: 20px; height: 20px" />
		  </div>
		  <div style="cursor: pointer" onclick="window.open('','_self').close()">
			<img src="${close}" style="width: 20px; height: 20px" />
		  </div>
		  <div style="cursor: pointer" id="dark">
			<img src="${dark}" style="width: 20px; height: 20px" />
		  </div>
		</div>
		<div class="iphone-x">
		  <div id="side" class="side">
			<iframe id="myiframe" src="${url}" class="screen">
			</iframe>
		  </div>
		  <div class="line"></div>
		  <div id="head" class="header">
			<div class="sensor-1"></div>
			<div class="sensor-2"></div>
			<div class="sensor-3"></div>
		  </div>
		  <div class="volume-button"></div>
		  <div class="power-button"></div>
		</div>
		<div style="margin-top: 10; color: gray; font-size: 14px">
		  ${url}
		</div>
		<script>
		let refresh = document.getElementById("refresh")
			refresh.addEventListener("click", function() {
				var fr=document.getElementById('myiframe');
				if(fr!=null) {document.getElementById("side").removeChild(fr)}
				var iframehtml="<iframe id='myiframe' class='screen' src='${url}'></iframe>";
				document.getElementById("side").innerHTML=iframehtml;
			})

		  let dark = document.getElementById("dark");
		  let _dark = dark[0];
	
		  dark.addEventListener("click", function () {
			let side = document.getElementById("side");
			let head = document.getElementById("head");
	
			if (side.getAttribute("class") == "bazzel") {
			  side.setAttribute("class", "side");
			} else {
			  side.setAttribute("class", "bazzel");
			}
	
			if (head.getAttribute("class") == "header") {
			  head.setAttribute("class", "header1");
			} else {
			  head.setAttribute("class", "header");
			}
		  });
		</script>
	  </body>
	</html>
	`;
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
