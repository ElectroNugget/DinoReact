/**
 * Acts as the Navbar for the entire application.
 * TODO: Could probably afford to be broken down a little.
 * TODO: How does React-Router tie into all this???
 */
import React from "react";
import { Link, useLocation } from "react-router-dom";

const NavBar = (): JSX.Element => (
  <nav className="navbar navbar-dark bg-dark navbar-expand-lg fixed-top">
    <Link to="/">
      <a className="navbar-brand">
        <i className="fas fa-dna"></i> DinoStore
      </a>
    </Link>

    <ul className="navbar-nav mr-auto">
      <Link to="/">
        <li className="nav-item">
          <a className="nav-link">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
      </Link>

      <li className="nav-item dropdown">
        <a
          className="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-dollar-sign"></i> Buy Dinosaurs
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <Link
            to={{
              pathname: "/all",
              state:{
                categoryKey: "all",
                categoryValue: "all"
              }
            }}
          >
            <a className="dropdown-item">All Dinosaurs</a>
          </Link>

          <div className="dropdown-divider"></div>
          <h6 className="dropdown-header">
            <i className="fas fa-weight-hanging"></i> Size
          </h6>
          <a
            className="dropdown-item"
            href="prodDisplay.html?productKey=size&productValue=Small"
          >
            Small
          </a>
          <a
            className="dropdown-item"
            href="prodDisplay.html?productKey=size&productValue=Medium"
          >
            Medium
          </a>
          <a
            className="dropdown-item"
            href="prodDisplay.html?productKey=size&productValue=Large"
          >
            Large
          </a>
          <div className="dropdown-divider"></div>
          <h6 className="dropdown-header">
            <i className="fas fa-drumstick-bite"></i> Diet
          </h6>
          <a
            className="dropdown-item"
            href="prodDisplay.html?productKey=diet&productValue=Carnivore"
          >
            Carnivores
          </a>
          <a
            className="dropdown-item"
            href="prodDisplay.html?productKey=diet&productValue=Herbivore"
          >
            Herbivores
          </a>
          <div className="dropdown-divider"></div>
          <h6 className="dropdown-header">
            <i className="fas fa-industry"></i> Manufacturer
          </h6>
          <a
            className="dropdown-item"
            href="prodDisplay.html?productKey=manufacturer&productValue=InGen"
          >
            InGen
          </a>
          <a
            className="dropdown-item"
            href="prodDisplay.html?productKey=manufacturer&productValue=Biosyn"
          >
            Biosyn
          </a>
          <a
            className="dropdown-item"
            href="prodDisplay.html?productKey=manufacturer&productValue=Regenesis"
          >
            Regenesis
          </a>
        </div>
      </li>
    </ul>
    <ul className="navbar-nav ml-auto">
      <Link to="/login">
        <li className="nav-item ml-auto">
          <a className="nav-link">
            <i className="fas fa-sign-in-alt"></i> Login
          </a>
        </li>
      </Link>
      <Link to="/cart">
        <li className="nav-item ml-auto">
          <a className="nav-link">
            <i className="fas fa-shopping-cart"></i> Cart{" "}
            <div id="cartCounter"></div>
          </a>
        </li>
      </Link>
    </ul>
  </nav>
);

export default NavBar;
