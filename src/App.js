import "./App.scss";
import { ReactComponent as MoonSVG } from "./assets/svgs/moon.svg";
import { ReactComponent as CircleSVG } from "./assets/svgs/black-circle.svg";
import { ReactComponent as ShieldSVG } from "./assets/svgs/shield.svg";
import { ReactComponent as RibbonSVG } from "./assets/svgs/ribbon-banner.svg";
import { ReactComponent as LeviathanSVG } from "./assets/svgs/leviathan-sun.svg";
import { ReactComponent as Ampersand } from "./assets/svgs/ampersand-symbol-svgrepo-com.svg";

function App() {
  return (
    <div className="App">
      {/* Navigation Section */}
      <div className="Landing">
        <div className="Navigation">
          <div className="Logo-Container">
            <svg
              className="logo"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 452.593 452.593"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              enable-background="new 0 0 452.593 452.593"
            >
              <path d="m430.511,44.654h-408.429c-12.176,0-22.082,9.906-22.082,22.082v250.223c0,12.176 9.906,22.083 22.082,22.083h154.323l-6.428,48.897h-27.506c-5.523,0-10,4.477-10,10s4.477,10 10,10h167.651c5.523,0 10-4.477 10-10s-4.477-10-10-10h-27.506l-6.428-48.897h154.323c12.176,0 22.082-9.906 22.082-22.083v-250.223c5.68434e-14-12.176-9.905-22.082-22.082-22.082zm2.082,22.082v211.358h-280.786l129.128-213.44h149.576c1.148,0 2.082,0.934 2.082,2.082zm-410.511-2.082h235.477l-129.128,213.441h-108.431v-211.359c0-1.148 0.934-2.082 2.082-2.082zm-2.082,252.305v-18.865h96.332l-12.673,20.947h-81.577c-1.148,0.001-2.082-0.933-2.082-2.082zm242.445,70.98h-72.296l6.428-48.897h59.44l6.428,48.897zm168.066-68.897h-303.477l12.673-20.947h292.886v18.865c0,1.148-0.934,2.082-2.082,2.082z" />
            </svg>
            <p> Artmea </p>
          </div>
          <ul className="Links">
            <li className="link">Home</li>
            <li className="link">Gallery</li>
            <li className="link">Shop</li>
          </ul>
          <div className="Navigation__right">
            <p> Contact </p>
            <div className="button-container">
              <MoonSVG className="moon-svg" />
              <CircleSVG className="circle-svg" />
            </div>
          </div>
        </div>
        {/* Image Section */}
        <div className="Main">
          <div className="shield-svg-container">
            <ShieldSVG className="shieldSVG" />
            <RibbonSVG className="ribbonSVG" />
          </div>
          <div className="main-image-container">
            <svg
              className="text-path"
              width="1692"
              height="1336"
              viewBox="-170 520 1992 1136"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="true"
            >
              <path
                id="path-1"
                d="M1 1011C41 661.667 263.4 -29 833 2.99998C1066.33 -7.66668 1559.4 157.4 1665 903C1678.33 993.667 1701 1207 1685 1335"
                stroke="black"
                strokeWidth="3"
              />
              <text width="1692" className="textSVG">
                <textPath
                  className="textPath"
                  xlinkHref="#path-1"
                  startOffset="2%"
                >
                  Immerse yourself in the romantic worlds of Phillip Reinagle
                </textPath>
              </text>
            </svg>

            <div className="main-image"></div>
          </div>
          <div className="small-svg-container">
            <div className="small-svg-wrapper">
              <LeviathanSVG className="leviathanSVG" />
              <p>
                Welcome to our <br /> new exibition of <br />
                English painter <br /> Phillip Reinagle
              </p>
            </div>
          </div>
          {/* Text Section */}
          <div className="big-text-container">
            <ul>
              <li>
                <p className="text-gradient-1">Your</p>
              </li>
              <li>
                <p className="text-gradient-2">Fabulous</p>
              </li>
              <li>
                <p>Adventure</p>
              </li>
            </ul>
          </div>
          {/* Tear Drop Image */}
          <div className="tear-drop-container">
            <div className="tear-drop"></div>
          </div>
          <div className="window-text-container">
            <div className="window"></div>
            <ul className="window-list">
              <p>Gallery</p>
              <p>Biography</p>
              <p>Auction</p>
            </ul>
          </div>
          <div className="ampersand-container">
            <Ampersand className="ampersand" />
          </div>
          <div className="bottom-text-container">
            <p>
              Own Art <br />
              Experience
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
