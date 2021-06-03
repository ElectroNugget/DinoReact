/**
 * Renders a small card for display on product display pages.
 */
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
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

// [{"customerId":1,"contents":[{"productId":1,"quantity":1}]}]

type CartType = {
  customerId: number,
  contents: Array<ProductType>
}

type ProductType = {
  productId: number,
  quantity: number,
}



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
  const { cartCount, setCartCount, UID, cart, setCart } = useContext(UserContext);

  // function isEmpty(obj: object) {
  //   return Object.keys(obj).length === 0;
  // }

  // function createCart() {

  // }

  function findProduct(contentsArray: Array<object>, Id: number) {
    return contentsArray.findIndex((currProd)=> currProd,productId === Id);
  }

  // function find(cartArray, Id) {
  //   return cartArray.findIndex((currCart) => currCart.customerId === Id);
  // }

  //Adds an item to the cart by updating Context, and syncing the result with the API.
        // [{"customerId":1,"contents":[{"productId":1,"quantity":1}]}]
  
  async function addToCart(cart: CartType, userId: number, productId: number, quantity: number) {
    console.log("Calling addToCart, cart in this state", cart)
      // Cart structure for reference
      let index = findProduct(cart.contents, productId);
      let newCart:CartType = cart;
      if (index === -1) {
        console.log("Product does not exist in current cart, adding to cart.");
        newCart.contents.push({"productId":productId, "quantity": quantity});
      } else {
        console.log("Product does exist in current cart, incrementing count in cart.");
        newCart.contents[index].quantity++
      }
      setCart(newCart);
      console.log("Cart at the end:", cart);
      setCartCount(cartCount + 1);
    }
      // console.log("Adding item with this id to cart", productId)
  
      // await fetch(`/customers/${UID}/cart`, {
      //   method: "PUT",
      //   headers: { "Content-Type": "application/json;charset=utf-8" },
      //   body: JSON.stringify(cart),
      // });


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
            onClick={() => addToCart(cart,UID, productId,1)}
          >
            <i className="fas fa-cart-plus"></i>
            &nbsp;Add to Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default SmallCard;
