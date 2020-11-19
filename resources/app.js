let refresh = document.getElementById("refresh");
refresh.addEventListener("click", function () {
  var fr = document.getElementById("myiframe");
  if (fr != null) {
    document.getElementById("side").removeChild(fr);
  }
  var iframehtml =
    "<iframe id='myiframe' class='screen' src='https://benawad.com'></iframe>";
  document.getElementById("side").innerHTML = iframehtml;
});

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

let section = document.getElementById("section");

// iphone8
document.getElementById("iphone8").addEventListener("click", () => {
  section.innerHTML = `<div class="center">
    <div class="mobile">
    <link rel="stylesheet" href="./styles/iphone8.css" />
    <div id="side" class="side">
      <iframe src="https://cirlorm.dev" class="screen"></iframe></div>
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
  </div>`;
});

// ipad
document.getElementById("ipad").addEventListener("click", () => {
  section.innerHTML = `<div class="ipad-mini-3 black">
    <link rel="stylesheet" href="./styles/ipad.css" />
    <div id="side" class="side">
    <iframe src="https://cirlorm.dev" seamless></iframe></div>
  </div>`;
});

// pixel1
document.getElementById("pixel1").addEventListener("click", () => {
  section.innerHTML = `<div class="phone">
  <link rel="stylesheet" href="./styles/pixel1.css" />
  <div class="phone-top">
    <span class="camera"></span>
    <span class="sensor"></span>
    <span class="speaker"></span>
  </div>
  <div class="top-bar"></div>
  <div id="side" class="side">
  <iframe src="http://cirlorm.dev" class="phone-screen">        </iframe>
  </div>
  <div class="buttons">      
    <span class="sleep"></span>
    <span class="down"></span>
  </div>
  <div class="bottom-bar"></div>
  <div class="phone-bottom">
    <span></span>
  </div>
</div>
</div>`;
});

// pixel3
document.getElementById("pixel3").addEventListener("click", () => {
  section.innerHTML = `<main>
    <link rel="stylesheet" href="./styles/pixel3.css" />
    <section class="phone-container">
      <div class="phone-outer">
        <div class="power"></div>
        <div class="volume"></div>
        <div class="phone-inner">
          <div class="border"></div>
        </div>
        <div class="chin-grill">
          <div class="inner"></div>
        </div>
        <div id="side" class="side">
        <iframe src="https://cirlorm.dev" style="background-color: white" class="phone-screen"></iframe>
        </div><div class="notch">
          <svg
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 47.3 12.75"
            style="enable-background: new 0 0 47.3 12.75"
            xml:space="preserve"
          >
            <path
              fill="#161617"
              d="M42.8,0H4.49H0c2.47,0,4.49,2.33,4.49,5.18h0.03c0.31,5.23,4.22,7.57,8.97,7.57h20.3c4.75,0,8.66-2.34,8.97-7.57h0.03C42.8,2.33,44.82,0,47.3,0H42.8z"
            />
          </svg>
          <div class="grill-outer">
            <div class="grill"></div>
          </div>
          <div class="camera-1">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 15.1 15.1"
              style="enable-background: new 0 0 15.1 15.1"
              xml:space="preserve"
            >
              <g>
                <circle
                  fill="#292d30"
                  class="st0"
                  cx="7.55"
                  cy="7.55"
                  r="7.55"
                />
                <circle fill="#1c1c1d" cx="7.55" cy="7.55" r="6.36" />
                <circle
                  style="opacity: 0.62; fill: #f5f5f5"
                  cx="10.01"
                  cy="5.44"
                  r="0.86"
                />
                <path
                  style="opacity: 0.17; fill: #f5f5f5"
                  d="M13.85,6.69c0,0-2.51,6.64-9.06,6.58C11.31,15.73,14.65,9.37,13.85,6.69z"
                />
                <path
                  style="opacity: 0.14; fill: #f5f5f5"
                  d="M6.6,2.4C5.52,2.64,4.54,3.24,3.8,4.06c-0.73,0.81-1.5,2.01-1.56,3.53c-0.13,3,0.28-2.1,2.54-3.56C6.79,2.78,7.48,2.2,6.6,2.4z"
                />
                <ellipse
                  transform="matrix(0.237 -0.9715 0.9715 0.237 -6.6741 12.4609)"
                  style="opacity: 0.19; fill: #f5f5f5"
                  cx="4.6"
                  cy="10.48"
                  rx="0.41"
                  ry="0.74"
                />
                <path
                  style="opacity: 0.14; fill: #f5f5f5"
                  d="M4.41,8.16C4.7,8.75,5.18,9.22,5.76,9.54c0.57,0.31,1.37,0.58,2.26,0.4c1.75-0.35-1.25,0.14-2.42-0.96C4.6,7.99,4.17,7.68,4.41,8.16z"
                />
              </g>
            </svg>
          </div>
          <div class="camera-2">
            <svg
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 15.1 15.1"
              style="enable-background: new 0 0 15.1 15.1"
              xml:space="preserve"
            >
              <g>
                <circle fill="#292d30" cx="7.55" cy="7.55" r="7.55" />
                <circle fill="#1c1c1d" cx="7.55" cy="7.55" r="6.36" />
                <circle
                  style="opacity: 0.27; fill: #f5f5f5"
                  cx="10.79"
                  cy="5.42"
                  r="1.26"
                />
                <path
                  style="opacity: 0.14; fill: #f5f5f5"
                  d="M6.25,13.22c1.36,0.03,2.7-0.39,3.82-1.15c1.11-0.75,2.38-1.95,2.9-3.76c1.04-3.54-0.95,2.42-4.08,3.5C6.13,12.71,5.14,13.2,6.25,13.22z"
                />
                <path
                  style="opacity: 0.14; fill: #f5f5f5"
                  d="M2.04,6.23C1.74,7,1.7,7.85,1.89,8.65c0.19,0.79,0.62,1.77,1.54,2.45c1.8,1.33-1.18-1.05-1.14-3.06C2.35,6.26,2.28,5.6,2.04,6.23z"
                />
                <circle
                  style="opacity: 0.37; fill: #f5f5f5"
                  cx="8.72"
                  cy="6.72"
                  r="0.69"
                />
                <circle
                  style="opacity: 0.8; fill: #f5f5f5"
                  cx="7.55"
                  cy="7.55"
                  r="0.46"
                />
                <path
                  style="opacity: 0.14; fill: #f5f5f5"
                  d="M10.26,3.35C9.8,2.88,9.2,2.57,8.55,2.45c-0.64-0.12-1.48-0.14-2.28,0.3C4.71,3.61,7.43,2.24,8.87,2.94C10.13,3.57,10.63,3.74,10.26,3.35z"
                />
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  </main>`;
});
