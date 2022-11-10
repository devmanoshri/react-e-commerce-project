import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";
function Navbar() {
  return (
    <nav className="navbar navbar-expand-sm bg-primary navbar-dark px-sm-5">
      <Link to="/">
        <img src={logo} alt="store" className="navbar-brand" />
      </Link>
      <ul className="navbar-nav align-items-center">
        <li className="nav-item ml-5">
          <Link to="/" className="nav-link">
            Products
          </Link>
        </li>
      </ul>
      <Link to="/store" className="ms-auto">
        <button>
          <span>
            <i className="fas fa-cart-plus" /> My Cart
          </span>
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
