export let mobileviewapp = () => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>MobileView</title>
        <link rel="stylesheet" href="index.css" />
      </head>
      <body>
        <div class="control">
          <div style="cursor: pointer" id="refresh">
            <img src="./refresh-outline.svg" style="width: 20px; height: 20px" />
          </div>
          <div
            style="cursor: pointer"
            onclick="window.parent.location = document.referrer"
          >
            <img src="./stop-outline.svg" style="width: 20px; height: 20px" />
          </div>
          <div style="cursor: pointer" onclick="window.open('','_self').close()">
            <img src="./close-outline.svg" style="width: 20px; height: 20px" />
          </div>
          <div style="cursor: pointer" id="dark">
            <img src="./contrast-outline.svg" style="width: 20px; height: 20px" />
          </div>
          <div class="dropdown">
            <div class="dropbtn" style="cursor: pointer" id="device">
              <img src="./phone.svg" style="width: 20px; height: 20px" />
            </div>
            <div class="dropdown-content">
              <a id="iphonex">iPhone X</a>
              <a id="iphone8">iPhone 8</a>
              <a id="pixel1">Pixel 1</a>
              <a id="pixel3">Pixel 3</a>
              <a id="ipad">iPad</a>
            </div>
          </div>
        </div>
        <section id="section">
          <link rel="stylesheet" href="./styles/iphonx.css" />
          <div class="iphone-x">
            <div id="side" class="side">
              <iframe id="myiframe" src="https://cirlorm.dev" class="screen">
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
          https://cirlorm.dev
        </div>
        <script src="./app.js"></script>
      </body>
    </html>
    `;
};
