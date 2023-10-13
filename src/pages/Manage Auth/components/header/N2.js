import React, { useState } from "react";
import "./N2.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../../../assets/logo.png";
import User_circle from "../../../../assets/User_cicrle.png";
const N2 = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="main-container">
      <div className="logo">
        <img src={logo} alt="logo of website" />
      </div>
      <div className="links">
        <ul>
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Product</a>
          </li>
          <li>
            <a>Parts</a>
          </li>
          <li>
            <a>Appointmenst</a>
          </li>
          <li>
            <a>Contact</a>
          </li>
        </ul>
      </div>
      <div className="user-profile">
        <img src={User_circle} alt="User Profile" />
      </div>

      <div className="toggle-menu-main">
        {toggleMenu ? (
          <RiCloseLine
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#000000"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div className="links-toggle">
            <ul>
              <li>
                <a>Home</a>
              </li>
              <li>
                <a>About</a>
              </li>
              <li>
                <a>Hot Product</a>
              </li>
              <li>
                <a>Spare Parts</a>
              </li>
              <li>
                <a>Appointmenst</a>
              </li>
              <li>
                <a>Contact Us</a>
              </li>
            </ul>
            <div className="user-profile-toggle">
              <img src={User_circle} alt="User Profile" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default N2;
