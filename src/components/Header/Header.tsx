import * as React from "react";
import { Link } from "react-router-dom";
import iconLogo from "../../assets/shared/logo.svg";

const menuBtns = ["home", "destination", "crew", "technology"];

interface HeaderProps {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

function Header({ currentPage, setCurrentPage }: HeaderProps) {
  return (
    <header>
      <div id="logo-icon">
        <img src={iconLogo} alt="Logo" />
      </div>

      <nav>
        <ul>
          {menuBtns.map((menu, i) => {
            return (
              <li
                key={i}
                className={i === currentPage ? "active" : ""}
                onClick={() => setCurrentPage(i)}
              >
                <Link to={`/${menu}}`}>
                  <span>0{i}</span>
                  {menu}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
