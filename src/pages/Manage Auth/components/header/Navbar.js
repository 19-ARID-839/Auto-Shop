import React, { useState } from "react";
// import "./navbar.css";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import logo from "../../../../assets/logo.png";
import shopping_cart from "../../../../assets/shopping_cart.png";
import User_circle from "../../../../assets/User_cicrle.png";
const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className="main">
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
      </div>
      <div className="search">
        <input
          class="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <img src={shopping_cart} alt="Shopping Cart" />
        <img src={User_circle} alt="User Profile" />
      </div>
      <div className="navbar-menu">
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
              <div className="search-input">
                <input
                  class="form-control"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
              </div>

              <div className="search-toggle">
                <li>
                  <img src={shopping_cart} alt="Shopping Cart" />
                </li>
                <li>
                  {" "}
                  <img src={User_circle} alt="User Profile" />
                </li>
              </div>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
