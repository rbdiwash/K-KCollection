import React from "react";
import { Link, NavLink } from "react-router-dom";
import "../assets/css/templatemo-sixteen.css";

const Navbar = () => {
  return (
    <header class="">
      <nav class="navbar navbar-expand-lg sticky-top">
        <div class="container">
          <Link class="navbar-brand" to="/">
            <h2>
              <em>K & K</em> Collection
            </h2>
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
