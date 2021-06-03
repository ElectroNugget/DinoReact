/**
 * The login page. Allows the user to register their username to be displayed elsewhere on the site.
 * TODO: Implement state handling???
 */
import Headline from "./Headline";
import "../css/stylesheet.css";

import { UserContext } from "../UserContext";
import { useContext } from "react";

function RegisterPage(): JSX.Element {
  //Standard way of doing it.
  //I AM SUBSCRIBING TO USERCONTEXT SO I CAN USE THESE FIELDS IN THIS COMPONENT
  const { loggedIn, setLoggedIn } = useContext(UserContext);

  const message: string = ", please register by providing these details.";

  console.log("Are you logged in?", loggedIn);

  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="card">
        <div className="card-header">Register</div>
        <main className="form-signin">
          <div className="container text-center">
            <div className="card-body">
              <Headline message={message} />
              <br />
              <div className="form-group">
                <input
                  id="fname"
                  type="name"
                  className="form-control"
                  placeholder="First Name"
                  required
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  id="lname"
                  type="name"
                  className="form-control"
                  placeholder="Last Name"
                  required
                  autoFocus
                />
              </div>
              <div className="form-group">
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  placeholder="Email"
                  required
                  autoFocus
                />
              </div>
              <div className="form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="dinoCheck"
                />
                <label className="form-check-label" htmlFor="dinoCheck">
                  I agree that I love dinosaurs
                </label>
              </div>
              <br />
              <input
                className="btn btn-primary"
                type="submit"
                //onClick="onLogin()"
                value="Register"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RegisterPage;
