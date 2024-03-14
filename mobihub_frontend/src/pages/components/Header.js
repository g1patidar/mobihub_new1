import React from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes, FaShoppingCart } from "react-icons/fa";
import { GiCentaurHeart } from "react-icons/gi";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import "../../css/Header.css";

const Header = ({ count }) => {
  return (
    <header className="header">
      <Link to="/" className="logo">
        {" "}
        <img src="./images/main_logo.png" alt="/" />{" "}
      </Link>

      <input type="checkbox" id="check" />

      <label htmlFor="check" className="icons">
        <FaBars id="menu-icon" />
        <FaTimes id="close-icon" />
      </label>

      <nav className="navbar1">
        <Link to="/" style={{ "--i": 0 }}>
          Home
        </Link>
        <Link to="/aboutus" style={{ "--i": 1 }}>
          About
        </Link>
        <Link to="/shop" style={{ "--i": 2 }}>
          Shop{" "}
        </Link>
        <Link to="/" style={{ "--i": 3 }}>
          Services
        </Link>
        <Link to="/" style={{ "--i": 4 }}>
          Contact
        </Link>

        <span className="icon-container">
          <Link to="/cartpage" style={{ "--i": 5 }} className="icon-link">
            <CiShoppingCart className="cart-icon" />
            <span className="badge">1</span>
          </Link>
          <Link to="/wishlist" style={{ "--i": 6 }} className="icon-link">
            <CiHeart className="heart-icon" />
            <span className="badge">1</span>
          </Link>
        </span>

        <Link to="/loginpage" style={{ "--i": 7 }}>
          <button className="login-button">Login</button>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
