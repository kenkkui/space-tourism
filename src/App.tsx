import * as React from "react";
import iconLogo from "./assets/shared/logo.svg";

function App() {
  return (
    <div className="App">
      <header>
        <div id="logo-icon">
          <img src={iconLogo} alt="Logo" />
        </div>
        <nav>
          <ul>
            <li>
              <a href="#">
                <span>00 </span>
                home
              </a>
            </li>
            <li>
              <a href="#">
                <span>00 </span>
                destination
              </a>
            </li>
            <li>
              <a href="#">
                <span>00 </span>
                crew
              </a>
            </li>
            <li>
              <a href="#">
                <span>00 </span>
                technology
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
