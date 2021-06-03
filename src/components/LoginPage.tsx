/**
 * The login page. Allows the user to register their username to be displayed elsewhere on the site.
 * TODO: Implement state handling???
 */
import Headline from "./Headline";
import "../css/stylesheet.css";

import { UserContext } from "../UserContext";
import { useContext } from "react";

function LoginPage(): JSX.Element {
  //Standard way of doing it.
  //I AM SUBSCRIBING TO USERCONTEXT SO I CAN USE THESE FIELDS IN THIS COMPONENT
  const { loggedIn, setLoggedIn } = useContext(UserContext); 
  console.log("Are you logged in?", loggedIn);

  let message: string;

  if (loggedIn) {
    message = ", you are already logged in.";
  } else {
    message = ", please login by providing your email here.";
  }

  return (
    <div className="container" style={{ width: "60%", paddingBottom: "2.5rem" }}>
      <div className="card">
        <div className="card-header">Login</div>
        <main className="form-signin">
          <div className="container text-center">
            <div className="card-body">
              <Headline message={message} />
              <br />
              {loggedIn ? (
                <button onClick={() => setLoggedIn(false)}>Log Out</button>
              ) : (
                <div>
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
                  <br />
                  <div>
                    <button onClick={() => setLoggedIn(true)}>Log In</button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
