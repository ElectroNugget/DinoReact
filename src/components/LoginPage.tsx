/**
 * LOGIN PAGE:
 * Allows the user to register their username to be displayed elsewhere on the site.
 */
import Headline from "./Headline";
import { UserContext } from "../UserContext";
import { useContext, useState } from "react";
import "../css/stylesheet.css";

function LoginPage(): JSX.Element {
  const { loggedIn, setLoggedIn, user, setUser, cart, setCart, setCartCount } =
    useContext(UserContext);
  const [email, setEmail] = useState();

  let message: string;
  if (loggedIn) {
    message = ", click to log out.";
  } else {
    message = ", please login by providing your email here.";
  }

  //TODO: Need to check if the anonymous user already has a cart before
  //replacing it with a cart from login.
  async function login() {
    await fetch(`http://localhost:8000/customers/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({ email: email }),
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
        setLoggedIn(true);
        // getCart(data.customerId);
      })
      .catch((error) => {
        console.log(error);
        alert("Incorrect login details provided!");
      });
  }

  //TODO: Need to call these methods and handle waiting for the API to respond before
  //I finish logging in. However, very slow API calls are making it hard to stress test.
  async function getCart(id: number) {
    await fetch(`http://localhost:8000/customers/${id}/cart`, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCart(data);
        let count: number = 0;
        cart.forEach((dino) => {
          count += dino.quantity!;
        });
        setCartCount(count);
      });
  }

  //TODO: Need to call these methods and handle waiting for the cart to save before
  //I logout. However, very slow API calls are making it hard to stress test.
  async function logout() {
    // await fetch(`http://localhost:8000/customers/${user.customerId}/cart`, {
    //   method: "PUT",
    //   headers: { "Content-Type": "application/json;charset=utf-8" },
    //   body: JSON.stringify(cart),
    // })
    // .catch((error) => {
    //   console.log(error);
    //   alert("Something went wrong with logout!");
    // });
    setLoggedIn(false);
    setUser({});
    setCart([]);
    setCartCount(0);
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
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default LoginPage;
