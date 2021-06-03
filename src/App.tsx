/**
 * Our main launchpad for the whole application!.
 * TODO: Figure out how to make Dinosite into a SPA.
 * BJORN: React single page application using Typescript implementing a JavaScript API using Express, as it's OWN NODE.
 */
import {useState} from "react"
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import ProductPage from "./components/ProductPage";
import ScrollToTop from "./util/ScrollToTop"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../src/css/stylesheet.css";

import { UserContext, User } from './UserContext';

function App(): JSX.Element {

  const [loggedIn, setLoggedIn] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [cartCount, setCartCount] = useState(0);
  const [UID, setUID] = useState(0);

  return (
    <UserContext.Provider value={{ loggedIn, setLoggedIn, firstName, setFirstName, cartCount, setCartCount, UID, setUID }}>
      <Router>
        <ScrollToTop/>
        <NavBar />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/products" exact component={ProductDisplay} />
          <Route
            path="/products/:categoryKey/:categoryValue"
            component={ProductDisplay}
          />
          <Route path="/products/:id" component={ProductPage} />
        </Switch>
        <Footer />
      </Router>
    </UserContext.Provider>
  );
}

export default App;
