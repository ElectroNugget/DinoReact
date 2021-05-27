/**
 * Displays the current cart and checkout options for the user.
 * TODO: Could probably afford to be broken down a little.
 */
import React from "react";

type CartPageProps = {
  message: string;
};

const CartPage = ({ message }: CartPageProps): JSX.Element => (
  <div className="container">
    <div className="card">
      <div className="card-header">Your Cart</div>
      <div id="cartBox" className="container text-center">
        <h3 id="message">Hello Guest, here's your cart.</h3>
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

          <button
            type="button"
            className="btn btn-secondary"
            //    onClick="emptyCart()"
          >
            <i className="fas fa-trash-alt"></i>
            Empty Cart
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default CartPage;
