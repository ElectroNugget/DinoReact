/**
 * Our main launchpad for the whole application!.
 * TODO: How does React-Router tie into all this???
 * TODO: Figure out how to make Dinosite into a SPA.
 * BJORN: React single page application using Typescript implementing a JavaScript API using Express, as it's OWN NODE.
 */
// @ts-check
import React from "react";
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = (): JSX.Element => (
  <Router>
    <div className="App">
      <NavBar />
      <Switch>
        <Route path="/" exact component={FrontPage} />
        <Route path="/cart" component={CartPage} />
        <Route path="/login" component={LoginPage} />
      </Switch>
      <Footer />
    </div>
  </Router>
);

export default App;
