/**
 * CARTPAGE:
 * Displays the current cart and checkout options for the user.
 */
import Headline from "./Headline";
import { UserContext } from "../UserContext";
import { useContext, useEffect } from "react";
import "../css/stylesheet.css";

function CartPage(): JSX.Element {
  const { cart, setCart, setCartCount, cartCount, user } =
    useContext(UserContext);
  const message: string = ", here's your cart.";
  let totalPrice: number = 0;

  async function emptyCart() {
    setCart([]);
    setCartCount(0);
  }

  async function checkOut() {
    alert("Thanks for shopping at DinoStore!");
    setCart([]);
    setCartCount(0);
    //Puts an empty cart in place of the old one.
    await fetch(`http://localhost:8000/customers/${user.customerId}/cart`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify([]),
    });
  }

  function calculateTotalPrice() {
    cart.forEach((dino) => {
      totalPrice += dino.price! * dino.quantity!;
    });
  }

  function removeItem(Id: number, quantity: number) {
    let newCart = cart;
    let index = newCart.findIndex((dino) => dino.productId === Id);
    newCart.splice(index, 1);
    setCart(newCart);
    setCartCount(cartCount - quantity);
  }

  //Removes empty objects from the cart if they turn up somehow.
  function checkCart() {
    let newCart = cart.filter((value) => Object.keys(value).length !== 0);
    setCart(newCart);
  }

  //Odd fix for an odd bug (cart initializes with an empty object),
  //need to come up with another solution.
  useEffect(() => {
    checkCart();
  }, []);

  calculateTotalPrice();

  return (
    <div
      className="container"
      style={{ width: "60%", paddingBottom: "2.5rem" }}
    >
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
              {cart.map((dino, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{dino.productName}</td>
                  <td>{dino.quantity}</td>
                  <td>{(dino.price! * dino.quantity!).toLocaleString()} USD</td>
                  <td>
                    <button
                      type="button"
                      className="btn btn-danger"
                      onClick={() =>
                        removeItem(dino.productId!, dino.quantity!)
                      }
                    >
                      X
                    </button>
                  </td>
                </tr>
              ))}
            </table>

            <hr />
            <h6>Total Price:</h6>
            <p id="totalPrice">{totalPrice.toLocaleString()} USD</p>
            <hr />

            <button
              type="button"
              className="btn btn-primary"
              onClick={() => checkOut()}
            >
              <i className="far fa-credit-card"></i>
              Checkout
            </button>

            <button
              type="button"
              className="btn btn-secondary"
              onClick={() => emptyCart()}
              style={{ margin: "5px" }}
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
