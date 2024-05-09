import * as React from "react";
import iconLogo from "./assets/shared/logo.svg";

const menuBtns = ["home", "destination", "crew", "technology"];

function App() {
  return (
    <div className="App">
      <header>
        <div id="logo-icon">
          <img src={iconLogo} alt="Logo" />
        </div>
        <nav>
          <ul>
            {menuBtns.map((menu, i) => {
              return (
                <li key={i}>
                  <a href="#">
                    <span>0{i}</span>
                    {menu}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    </div>
  );
}

export default App;
