/**
 * Displays the current cart and checkout options for the user.
 */
import Headline from "./Headline";
import { UserContext } from "../UserContext";
import "../css/stylesheet.css";
import { useContext } from "react";

const message: string = ", here's your cart.";

function CartPage(): JSX.Element {
  //Standard way of doing it.
  //I AM SUBSCRIBING TO USERCONTEXT SO I CAN USE THESE FIELDS IN THIS COMPONENT
  const { cart, setCart, setCartCount, UID } = useContext(UserContext);

  async function emptyCart() {
    console.log("Emptying cart now.");
    setCart([]);
    setCartCount(0);
    console.log("Cart looks like this in Context:", cart);
    //Puts an empty cart in place of the old one.
    await fetch(`http://localhost:8000/customers/${1}/cart`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify([]),
    });
  }

  return (
    <div className="container" style={{ width: "60%" }}>
      <div className="card">
        <div className="card-header">Your Cart</div>
        <div id="cartBox" className="container text-center">
          <Headline message={message} />
          <p>Free shipping for dino orders over 100 tonnes!</p>

          <div className="card-body">
            <table id="cartTable" className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Name</th>
                  <th scope="col">Quantity</th>
                  <th scope="col">Price</th>
                  <th scope="col">Remove</th>
                </tr>
              </thead>
              <tbody id="injectTable"></tbody>
            </table>

            <hr />
            <h6>Total Price:</h6>
            <p id="totalPrice"></p>
            <hr />

            <button
              type="button"
              className="btn btn-primary"
              //    onClick="checkout()"
            >
              <i className="far fa-credit-card"></i>
              Checkout
            </button>

            <button onClick={() => console.log(cart)}>Check cart</button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => emptyCart()}
            >
              <i className="fas fa-trash-alt"></i>
              Empty Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
