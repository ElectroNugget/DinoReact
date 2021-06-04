/**
 * APP:
 * Our main launchpad for the whole application!.
 */
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import RegisterPage from "./components/RegisterPage";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import ProductPage from "./components/ProductPage";
import ScrollToTop from "./util/ScrollToTop";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "../src/css/stylesheet.css";
import { UserContextProvider } from "./UserContext";

function App(): JSX.Element {
  return (
    <UserContextProvider>
      <Router>
        <ScrollToTop />
        <NavBar />
        <div style={{ position: "relative", minHeight: "100vh" }}>
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
        </div>
        <Footer />
      </Router>
    </UserContextProvider>
  );
}

export default App;
