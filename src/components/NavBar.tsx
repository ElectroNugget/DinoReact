/**
 * Acts as the Navbar for the entire application.
 * TODO: Could probably afford to be broken down a little.
 * FIXME: Need to fix ALL DINOSAURS. Breaks atm.
 */
import { Link } from "react-router-dom";
import { UserContext, useUserContext } from "../UserContext";
import "../css/stylesheet.css";

function NavBar(): JSX.Element {
  const { cartCount, loggedIn } = useUserContext();

  return (
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
            {/* //FIXME: This path BREAKS. Can't view ALL Products RN */}
            <Link to="/products">
              <a className="dropdown-item">All Dinosaurs</a>
            </Link>

            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">
              <i className="fas fa-weight-hanging"></i> Size
            </h6>
            <Link
              to={{
                pathname: "/products/size/Small",
                state: { catKey: "size", catValue: "Small" },
              }}
            >
              <a className="dropdown-item">Small</a>
            </Link>
            <Link
              to={{
                pathname: "/products/size/Medium",
                state: { catKey: "size", catValue: "Medium" },
              }}
            >
              <a className="dropdown-item">Medium</a>
            </Link>
            <Link
              to={{
                pathname: "/products/size/Large",
                state: { catKey: "size", catValue: "Large" },
              }}
            >
              <a className="dropdown-item">Large</a>
            </Link>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">
              <i className="fas fa-drumstick-bite"></i> Diet
            </h6>
            <Link
              to={{
                pathname: "/products/diet/Carnivore",
                state: { catKey: "diet", catValue: "Carnivore" },
              }}
            >
              <a className="dropdown-item">Carnivores</a>
            </Link>
            <Link
              to={{
                pathname: "/products/diet/Herbivore",
                state: { catKey: "diet", catValue: "Herbivore" },
              }}
            >
              <a className="dropdown-item">Herbivores</a>
            </Link>
            <div className="dropdown-divider"></div>
            <h6 className="dropdown-header">
              <i className="fas fa-industry"></i> Manufacturer
            </h6>
            <Link
              to={{
                pathname: "/products/manufacturer/InGen",
                state: { catKey: "manufacturer", catValue: "InGen" },
              }}
            >
              <a className="dropdown-item">InGen</a>
            </Link>
            <Link
              to={{
                pathname: "/products/manufacturer/Biosyn",
                state: { catKey: "manufacturer", catValue: "Biosyn" },
              }}
            >
              <a className="dropdown-item">Biosyn</a>
            </Link>
            <Link
              to={{
                pathname: "/products/manufacturer/Regenesis",
                state: { catKey: "manufacturer", catValue: "Regenesis" },
              }}
            >
              <a className="dropdown-item">Regenesis</a>
            </Link>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav ml-auto">
        <UserContext.Consumer>
          {({ loggedIn }) => {
            if (!loggedIn) {
              return (
                <>
                  <Link to="/register">
                    <li className="nav-item ml-auto">
                      <a className="nav-link">
                        <i className="fas fa-user-plus"></i> Register
                      </a>
                    </li>
                  </Link>
                  <Link to="/login">
                    <li className="nav-item ml-auto">
                      <a className="nav-link">
                        <i className="fas fa-sign-in-alt"></i> Login
                      </a>
                    </li>
                  </Link>
                </>
              );
            }
            return (
              <Link to="/login">
                <li className="nav-item ml-auto">
                  <a className="nav-link">
                    <i className="fas fa-sign-in-alt"></i> Logout
                  </a>
                </li>
              </Link>
            );
          }}
        </UserContext.Consumer>
        <Link to="/cart">
          <li className="nav-item ml-auto">
            <a className="nav-link">
              <i className="fas fa-shopping-cart"></i> Cart
              {cartCount > 0 && (
                <span
                  style={{ marginLeft: "5px" }}
                  className="badge badge-warning"
                >
                  {cartCount}
                </span>
              )}
            </a>
          </li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavBar;
