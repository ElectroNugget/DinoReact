/**
 * Our main launchpad for the whole application!.
 * TODO: Figure out how to make Dinosite into a SPA.
 * BJORN: React single page application using Typescript implementing a JavaScript API using Express, as it's OWN NODE.
 */
import NavBar from "./components/NavBar";
import FrontPage from "./components/FrontPage";
import CartPage from "./components/CartPage";
import LoginPage from "./components/LoginPage";
import Footer from "./components/Footer";
import ProductDisplay from "./components/ProductDisplay";
import ProductPage from "./components/ProductPage";
import ScrollToTop from "./util/ScrollToTop"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ContextProvider } from "./Context";
import "../src/css/stylesheet.css";

//Maybe get user data here?

//FIXME: Router lets me put in routes that don't exist. Some kind of default in the switch statement for 404?
function App(): JSX.Element {
  return (
    <ContextProvider>
      <Router>
        <ScrollToTop/>
        <NavBar />
        <Switch>
          <Route path="/" exact component={FrontPage} />
          <Route path="/cart" component={CartPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/products" exact component={ProductDisplay} />
          <Route
            path="/products/:categoryKey/:categoryValue"
            component={ProductDisplay}
          />
          <Route path="/products/:id" component={ProductPage} />
        </Switch>
        <Footer />
      </Router>
    </ContextProvider>
  );
}

export default App;
