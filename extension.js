const vscode = require("vscode");
const path = require("path");

// FUNCTIONS
let showIphonex = (url, refresh, stop, close, dark, style) => {
  return `
	<!DOCTYPE html>
	<html lang="en">
	  <head>
		<meta charset="UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0" />
		<title>MobileView</title>
		<link rel="stylesheet" href="${style}" />
	  </head>
	  <body>
		<div class="control">
		  <div style="cursor: pointer" id="refresh">
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
		<section id="section">
		  <div class="iphone-x">
			<div id="side" class="side">
			  <iframe id="myiframe" src="${url}" class="screen" >
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
		</section>
		<div style="margin-top: 10; color: gray; font-size: 14px">
		  ${url}
		</div>
		<script>
		  let refresh = document.getElementById("refresh");
		  refresh.addEventListener("click", function () {
			var fr = document.getElementById("myiframe");
			if (fr != null) {
			  document.getElementById("side").removeChild(fr);
			}
			var iframehtml =
			  "<iframe id='myiframe' class='screen' src='${url}' ></iframe>";
			document.getElementById("side").innerHTML = iframehtml;
		  });
		</script>
	  </body>
	</html>
	`;
};

let showIphone8 = (url, refresh, stop, close, dark, style) => {
  return `
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>MobileView</title>
      <link rel="stylesheet" href="${style}" />
    </head>
  
    <body>
    <div class="control">
      <div style="cursor: pointer" id="refresh">
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
      <div class="center">
        <div class="mobile">
          <div id="side" class="side">
            <iframe src="${url}" class="screen" ></iframe>
          </div>
  
          <div class="home"></div>
          <div class="inner"></div>
          <ul class="volumn">
            <li></li>
            <li></li>
          </ul>
          <ul class="silent">
            <li></li>
          </ul>
          <ul class="sleep">
            <li></li>
          </ul>
        </div>
        <div class="url" style="margin-top: 10; color: gray; font-size: 14px">
          ${url}
        </div>
      </div>
      <script>
        let refresh = document.getElementById("refresh");
        refresh.addEventListener("click", function () {
          var fr = document.getElementById("myiframe");
          if (fr != null) {
            document.getElementById("side").removeChild(fr);
          }
          var iframehtml =
            "<iframe id='myiframe' class='screen' src='${url}' ></iframe>";
          document.getElementById("side").innerHTML = iframehtml;
        });
      </script>
    </body>
  </html>
  
	  `;
};

let showPixel = (url, refresh, stop, close, dark, style) => {
  return `
	  <!DOCTYPE html>
	  <html lang="en">
  
	  <head>
	  <meta charset="UTF-8">
	  <meta name="viewport" content="width=device-width, initial-scale=1.0">
	  <title>MobileView</title>
	  <link rel="stylesheet" href="${style}" />
	  </head>
  
	  <body>
	  <div class="phone">
	  <div class="control">
	  <div style="cursor: pointer" id="refresh">
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
		  <div class="phone-top">
		  <span class="camera"></span>
		  <span class="sensor"></span>
		  <span class="speaker"></span>
		  </div>
		  <div class="top-bar"></div>
		  <div id="side" class="side">
		  <iframe src="${url}" class="phone-screen" > </iframe>
		  </div>
		  <div class="buttons">
		  <span class="sleep"></span>
		  <span class="down"></span>
		  </div>
		  <div class="bottom-bar"></div>
		  <div class="phone-bottom">
		  <span></span>
		  </div>
		  <div class="url" style="margin-top: 10; color: gray; font-size: 14px">
		  ${url}
		  </div>
	  </div>
	  </div>
	  <script>
		  let refresh = document.getElementById("refresh");
		  refresh.addEventListener("click", function () {
		  var fr = document.getElementById("myiframe");
		  if (fr != null) {
			  document.getElementById("side").removeChild(fr);
		  }
		  var iframehtml =
			  "<iframe id='myiframe' class='phone-screen' src='${url}' ></iframe>";
		  document.getElementById("side").innerHTML = iframehtml;
		  });
	  </script>
	  </body>
  
	  </html>
	  `;
};

/**
 * @param {vscode.ExtensionContext} context
 */

let activate = (context) => {
  console.log('Congratulations, your extension "mobileview" is now active!');

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
        const style_D = vscode.Uri.file(
          path.join(context.extensionPath, "resources", "styles", "iphonx.css")
        );

        const refresh_n = panel.webview.asWebviewUri(refresh_d);
        const stop_n = panel.webview.asWebviewUri(stop_d);
        const close_n = panel.webview.asWebviewUri(close_d);
        const dark_n = panel.webview.asWebviewUri(dark_D);
        const style_n = panel.webview.asWebviewUri(style_D);

        // And set its HTML content
        panel.webview.html = showIphonex(
          _input.substring(0, 4).toLowerCase() == "http"
            ? _input
            : `http://${_input}`,
          refresh_n,
          stop_n,
          close_n,
          dark_n,
          style_n
        );
      } else {
        // Display a message box to the user
        vscode.window.showErrorMessage("Please enter a valid URL");
      }
    }
  );

  let startIphonex = vscode.commands.registerCommand(
    "startIphonex.start",
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
        const style_D = vscode.Uri.file(
          path.join(context.extensionPath, "resources", "styles", "iphone8.css")
        );

        const refresh_n = panel.webview.asWebviewUri(refresh_d);
        const stop_n = panel.webview.asWebviewUri(stop_d);
        const close_n = panel.webview.asWebviewUri(close_d);
        const dark_n = panel.webview.asWebviewUri(dark_D);
        const style_n = panel.webview.asWebviewUri(style_D);

        // And set its HTML content
        panel.webview.html = showIphone8(
          _input.substring(0, 4).toLowerCase() == "http"
            ? _input
            : `http://${_input}`,
          refresh_n,
          stop_n,
          close_n,
          dark_n,
          style_n
        );
      } else {
        // Display a message box to the user
        vscode.window.showErrorMessage("Please enter a valid URL");
      }
    }
  );
  
  let startPixel = vscode.commands.registerCommand(
    "startPixel.start",
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
        const style_D = vscode.Uri.file(
          path.join(context.extensionPath, "resources", "styles", "pixel1.css")
        );

        const refresh_n = panel.webview.asWebviewUri(refresh_d);
        const stop_n = panel.webview.asWebviewUri(stop_d);
        const close_n = panel.webview.asWebviewUri(close_d);
        const dark_n = panel.webview.asWebviewUri(dark_D);
        const style_n = panel.webview.asWebviewUri(style_D);

        // And set its HTML content
        panel.webview.html = showPixel(
          _input.substring(0, 4).toLowerCase() == "http"
            ? _input
            : `http://${_input}`,
          refresh_n,
          stop_n,
          close_n,
          dark_n,
          style_n
        );
      } else {
        // Display a message box to the user
        vscode.window.showErrorMessage("Please enter a valid URL");
      }
    }
  );

  context.subscriptions.push(disposable);
  context.subscriptions.push(startIphonex);
  context.subscriptions.push(startPixel);
};

exports.activate = activate;

// this method is called when your extension is deactivated
function deactivate() {}

module.exports = {
  activate,
  deactivate,
};
