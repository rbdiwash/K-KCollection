import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/style.css";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  return (
    <header class="">
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container align-items-center">
          <Link class="navbar-brand" to="/">
            <h2>
              <em>K & K</em> Collection
            </h2>
            {/* <img src={logo} alt="" style={{ height: "100px" }} /> */}
          </Link>
          <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
            aria-controls="navbarResponsive"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <Link class="nav-link" to="/">
                  Home
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link " to="/shop">
                  Our Products
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/about">
                  About Us
                </Link>
              </li>
              <li class="nav-item">
                <Link class="nav-link" to="/contact">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
