/**
 * The login page. Allows the user to register their username to be displayed elsewhere on the site.
 * TODO: Implement state handling???
 */
import Headline from "./Headline";
import "../css/stylesheet.css";

import { useUserContext, UserContext } from "../UserContext";

const message: string = ", please register and provide your name here.";

function LoginPage(): JSX.Element {
  const { loggedIn, setLoggedIn } = useUserContext();
  console.log("Are you logged in?", loggedIn);

  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="card">
        <div className="card-header">Login</div>
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
              <UserContext.Consumer>
                {({ loggedIn }) => {
                  if (loggedIn) {
                    return (
                      <button onClick={() => setLoggedIn(false)}>
                        Log Out
                      </button>
                    );
                  }
                  return (
                    <div>
                      <button onClick={() => setLoggedIn(true)}>Log In</button>
                    </div>
                  );
                }}
              </UserContext.Consumer>
              <input
                className="btn btn-danger"
                type="submit"
                //onClick="deleteUserDetails()"
                value="Delete Info"
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
