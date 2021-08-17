import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <div>
      <header className="">
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container align-items-center">
            <Link className="navbar-brand" to="/">
              <h2>
                <em>K & K</em> Collection
              </h2>
              {/* <img src={logo} alt="" style={{ height: "100px" }} /> */}
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarResponsive"
              aria-controls="navbarResponsive"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link "
                    to="/shop"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    Our Products
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/about"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    className="nav-link"
                    to="/contact"
                    data-toggle="collapse"
                    data-target=".navbar-collapse.show"
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
      <div className="gap"></div>
    </div>
  );
};

export default Navbar;
