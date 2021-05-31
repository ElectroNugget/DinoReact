/**
 * Acts as the Navbar for the entire application.
 * TODO: Could probably afford to be broken down a little.
 * TODO: How does React-Router tie into all this???
 */
import { Link } from "react-router-dom";

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
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <i className="fas fa-dollar-sign"></i> Buy Dinosaurs
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          {/* //FIXME: This path could be better, handle it somehow. */}
          <Link
            to="/products/all/all"
          >
            <a className="dropdown-item">All Dinosaurs</a>
          </Link>

          <div className="dropdown-divider"></div>
          <h6 className="dropdown-header">
            <i className="fas fa-weight-hanging"></i> Size
          </h6>
          <Link
            to="/products/size/small"
          >
            <a className="dropdown-item">Small</a>
          </Link>
          <Link
            to="/products/size/medium"
          >
            <a className="dropdown-item">Medium</a>
          </Link>
          <Link
            to="/products/size/large"
          >
            <a className="dropdown-item">Large</a>
          </Link>
          <div className="dropdown-divider"></div>
          <h6 className="dropdown-header">
            <i className="fas fa-drumstick-bite"></i> Diet
          </h6>
          <Link
            to="/products/diet/carnivore"
          >
            <a
              className="dropdown-item"
            >
              Carnivores
            </a>
          </Link>
          <Link
            to="/products/diet/herbivore"
          >
            <a
              className="dropdown-item"
            >
              Herbivores
            </a>
          </Link>
          <div className="dropdown-divider"></div>
          <h6 className="dropdown-header">
            <i className="fas fa-industry"></i> Manufacturer
          </h6>
          <Link
            to="/products/manufacturer/ingen"
          >
            <a className="dropdown-item">InGen</a>
          </Link>
          <Link
            to="/products/manufacturer/biosyn"
          >
            <a className="dropdown-item">Biosyn</a>
          </Link>
          <Link
            to= "/products/manufacturer/regenesis"
          >
            <a className="dropdown-item">Regenesis</a>
          </Link>
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
