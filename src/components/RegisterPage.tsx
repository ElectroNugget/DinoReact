/**
 * The login page. Allows the user to register their username to be displayed elsewhere on the site.
 * TODO: Implement state handling???
 */
import Headline from "./Headline";
import "../css/stylesheet.css";

import { UserContext } from "../UserContext";
import { useContext, useState } from "react";

function RegisterPage(): JSX.Element {
  //Standard way of doing it.
  //I AM SUBSCRIBING TO USERCONTEXT SO I CAN USE THESE FIELDS IN THIS COMPONENT
  const { loggedIn, setLoggedIn, user, setUser } = useContext(UserContext);

  //Stateful declarations here. Any chance we can make this smaller?
  const [isEmailValid, setIsEmailValid] = useState(false);
  const [isFNameValid, setIsFNameValid] = useState(false);
  const [isLNameValid, setIsLNameValid] = useState(false);
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [fNameMessage, setFNameMessage] = useState("");
  const [lNameMessage, setLNameMessage] = useState("");
  const [emailMessage, setEmailMessage] = useState("");

  //Some regex for checking if names and emails match!
  const emailRegex = /\S+@\S+\.\S+/;
  const nameRegex = /[a-zA-Z]{3}[a-zA-Z]*/;

  function validate(event: any, type: string) {
    const value = event.target.value;
    switch (type) {
      case "email":
        if (emailRegex.test(value)) {
          setIsEmailValid(true);
          setEmailMessage("Your email looks good!");
          setEmail(value);
        } else {
          setIsEmailValid(false);
          setEmailMessage("Please enter a valid email!");
        }
        break;
      case "fName":
        if (nameRegex.test(value)) {
          setIsFNameValid(true);
          setFNameMessage("Your name looks good!");
          setFName(value);
        } else {
          setIsFNameValid(false);
          setFNameMessage("Please enter a valid name!");
        }
        break;
      case "lName":
        if (nameRegex.test(value)) {
          setIsLNameValid(true);
          setLNameMessage("Your surname looks good!");
          setLName(value);
        } else {
          setIsLNameValid(false);
          setLNameMessage("Please enter a valid surname!");
        }
        break;
    }
  }

  const message: string = ", please register by providing these details.";

  async function register() {
    await fetch(`http://localhost:8000/customers/`, {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({firstName: fName, lastName: lName, email: email}),
    })
    .then((res) => res.json())
    .then((data) => {
      console.log("This is the reply when registering:", data);
      setUser({firstName: fName, lastName: lName, email: email, customerId: data});
      console.log("this is new User", user)
    })
    .catch((error) => {
      console.log(error);
    });
    setLoggedIn(true);
  }

  function logUser() {
    console.log("User has these STATS:", user);
  }

  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="card">
        <div className="card-header">Register</div>
        <main className="form-signin">
          <div className="container text-center">
            <div className="card-body">
              <Headline message={message} />
              <button onClick={() => logUser()}>CLICK ME</button>
              <br />
              <form id="registrationForm">
                <div className="container">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    className="form-control"
                    onChange={(event) => validate(event, "fName")}
                    required
                    autoFocus
                  />
                  <div
                    className={`message ${isFNameValid ? "success" : "error"}`}
                  >
                    {fNameMessage}
                  </div>
                </div>

                <div className="container">
                  <input
                    type="text"
                    placeholder="Enter your surname"
                    className="form-control"
                    onChange={(event) => validate(event, "lName")}
                    required
                    autoFocus
                  />
                  <div
                    className={`message ${isLNameValid ? "success" : "error"}`}
                  >
                    {lNameMessage}
                  </div>
                </div>

                <div className="container">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="form-control"
                    onChange={(event) => validate(event, "email")}
                    required
                    autoFocus
                  />
                  <div
                    className={`message ${isEmailValid ? "success" : "error"}`}
                  >
                    {emailMessage}
                  </div>
                </div>
                {/* <div className="form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="dinoCheck"
                    required
                  />
                  <label className="form-check-label" htmlFor="dinoCheck">
                    I agree that I love dinosaurs
                  </label>
                </div> */}
                <br />
                <input
                  className="btn btn-primary"
                  disabled={!(isEmailValid && isFNameValid && isLNameValid)}
                  onClick={() => register()}
                  value="Register"
                />
              </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default RegisterPage;
