/**
 * The login page. Allows the user to register their username to be displayed elsewhere on the site.
 * TODO: Implement state handling???
 */
import Headline from "./Headline";
import "../css/stylesheet.css";

import { useUserContext, UserContext } from "../UserContext";

function LoginPage(): JSX.Element {
  const { loggedIn, setLoggedIn } = useUserContext();
  console.log("Are you logged in?", loggedIn);

  let message: string;

  if (loggedIn) {
    message = ", you are already logged in.";
  } else {
    message = ", please login by providing your email here.";
  }

  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="card">
        <div className="card-header">Login</div>
        <main className="form-signin">
          <div className="container text-center">
            <div className="card-body">
              <Headline message={message} />
              <br />
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
                        <button onClick={() => setLoggedIn(true)}>
                          Log In
                        </button>
                      </div>
                    </div>
                  );
                }}
                </UserContext.Consumer>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
