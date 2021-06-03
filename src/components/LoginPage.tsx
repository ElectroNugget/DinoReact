/**
 * The login page. Allows the user to register their username to be displayed elsewhere on the site.
 * TODO: Implement state handling???
 */
import Headline from "./Headline";
import "../css/stylesheet.css";

import { UserContext } from "../UserContext";
import { useContext, useState } from "react";

function LoginPage(): JSX.Element {
  //Standard way of doing it.
  //I AM SUBSCRIBING TO USERCONTEXT SO I CAN USE THESE FIELDS IN THIS COMPONENT
  const { loggedIn, setLoggedIn, user, setUser } = useContext(UserContext);
  const [email, setEmail] = useState();

  console.log("Are you logged in?", loggedIn);

  let message: string;

  if (loggedIn) {
    message = ", click to log out.";
  } else {
    message = ", please login by providing your email here.";
  }

  async function login() {
    console.log("We're sending this email", email);
    console.log("This is it stringified", JSON.stringify(email));
    await fetch(`http://localhost:8000/customers/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoggedIn(true);
      })
      .catch((error) => {
        console.log(error);
        alert("Incorrect login details provided!");
      });
  }

  function logout() {
    setLoggedIn(false);
    setUser({});
  }

  function updateEmail(event: any) {
    setEmail(event.target.value);
  }

  return (
    <div
      className="container"
      style={{ width: "60%", paddingBottom: "2.5rem" }}
    >
      <div className="card">
        <div className="card-header">Login</div>
        <main className="form-signin">
          <div className="container text-center">
            <div className="card-body">
              <Headline message={message} />
              <br />
              {loggedIn ? (
                <button onClick={() => logout()}>Log Out</button>
              ) : (
                <div>
                  <div className="form-group">
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="form-control"
                      onChange={(event) => updateEmail(event)}
                      required
                      autoFocus
                    />
                  </div>
                  <br />
                  <div>
                    <button onClick={() => login()}>Log In</button>
                  </div>
                </div>
              )}
              <button
                onClick={() => console.log("This is the state of user:", user)}
              >
                Check User
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
