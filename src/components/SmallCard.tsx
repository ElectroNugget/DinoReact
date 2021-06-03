/**
 * Renders a small card for display on product display pages.
 */
import { Link } from "react-router-dom";
import { UserContext, ProductType } from "../UserContext";
import "../css/stylesheet.css";
import { useContext } from "react";

type SmallCardProps = {
  key: number;
  productId: number;
  productName: string;
  manufacturer: string;
  price: number;
  imgUrl: string;
};

function SmallCard({
  key,
  productId,
  productName,
  manufacturer,
  price,
  imgUrl,
}: SmallCardProps): JSX.Element {
  //Standard way of doing it.
  //I AM SUBSCRIBING TO USERCONTEXT SO I CAN USE THESE FIELDS IN THIS COMPONENT
  const { cartCount, setCartCount, UID, cart, setCart } =
    useContext(UserContext);

  function findProduct(contentsArray: ProductType[], Id: number) {
    return contentsArray.findIndex((currProd) => currProd.productId === Id);
  }

  //Adds an item to the cart by updating Context, and syncing the result with the API.
  async function addToCart(
    cart: ProductType[],
    userId: number,
    productId: number,
    quantity: number
  ) {
    let newCart = cart;
    let index = findProduct(cart, productId);
    if (index === -1) {
      newCart.push({ productId: productId, quantity: quantity, productName: productName, price: price });
    } else {
      newCart[index].quantity!++;
    }
    setCart(newCart);
    console.log("Item added to cart:", cart);
    setCartCount(cartCount + 1);

    console.log("Updating the API cart.");
    await fetch(`http://localhost:8000/customers/${1}/cart`, {
      method: "PUT",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify(cart),
    });
  }

  return (
    <div className="col-sm-4" style={{ float: "left", marginBottom: "3em" }}>
      <div className="card bg-light text-black" style={{ width: "18rem" }}>
        <Link
          to={{
            pathname: `/products/${productId}`,
            state: { productId: productId },
          }}
        >
          <a className="btn btn-dark">
            <img className="card-img-top" src={imgUrl} alt={productName} />
          </a>
        </Link>
        <div className="card-body">
          <Link
            to={{
              pathname: `/products/${productId}`,
              state: { productId: productId },
            }}
          >
            <h5 className="card-title">{productName}</h5>
          </Link>
          <h6 className="card-title">{manufacturer}</h6>
          <p className="card-text">{price.toLocaleString()} USD</p>
          <button
            type="button"
            className="btn btn-info"
            style={{ width: "70%" }}
            onClick={() => addToCart(cart, UID, productId, 1)}
          >
            <i className="fas fa-cart-plus"></i>
            &nbsp;Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
