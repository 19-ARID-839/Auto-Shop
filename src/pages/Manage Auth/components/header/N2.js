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
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#products">Product</a>
          </li>
          <li>
            <a href="products">Parts</a>
          </li>
          <li>
            <a href="#appointments">Appointmenst</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
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
                <a href="#home">Home</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#products">Product</a>
              </li>
              <li>
                <a href="products">Parts</a>
              </li>
              <li>
                <a href="#appointments">Appointmenst</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
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
