import React, { useState } from "react";
import "./header.css";
import Logo from "../../assets/logo.png";
import Bars from "../../assets/bars.png";
import { Link } from "react-scroll";

const Header = () => {
  const mobile = window.innerWidth <= 768 ? true : false;
  const [menuOpened, setMenuOpened] = useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {menuOpened === false && mobile === true ? (
        <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
          }}
          onClick={() => setMenuOpened(true)}
        >
          <img
            src={Bars}
            alt=""
            style={{ width: "1.5rem", height: "1.5rem" }}
          />
        </div>
      ) : (
        <ul className="header-menu">
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
            >
              Strona Główna
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="programs"
              spy={true}
              smooth={true}
            >
              Programy
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="reasons"
              spy={true}
              smooth={true}
            >
              O Nas
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="plans"
              spy={true}
              smooth={true}
            >
              Plany
            </Link>
          </li>
          <li>
            <Link
              onClick={() => setMenuOpened(false)}
              activeClass="active"
              to="testimonials"
              spy={true}
              smooth={true}
            >
              Referencje
            </Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Header;
