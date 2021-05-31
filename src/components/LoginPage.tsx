/**
 * The login page. Allows the user to register their username to be displayed elsewhere on the site.
 * TODO: Implement state handling???
 */
import React from "react";
import Headline from "./Headline"

type LoginPageProps = {
  message: string;
};

const LoginPage = ({ message }: LoginPageProps): JSX.Element => (
  <div className="container">
    <div className="card">
      <div className="card-header">Login</div>
      <main className="form-signin">
        <div className="container text-center">
          <div className="card-body">
            <Headline message=", please register and provide your name here."/>
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

export default LoginPage;
