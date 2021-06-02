/**
 * Renders a small card for display on product display pages.
 */
import { Link } from "react-router-dom";
import { UserContext, useUserContext } from "../UserContext";
import "../css/stylesheet.css";

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
  const { cartCount, setCartCount } = useUserContext();

  function addToCart() {
    //Add API stuff here...
    setCartCount(cartCount + 1);
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
          <UserContext.Consumer>
            {() => {
              return (
                <button
                  type="button"
                  className="btn btn-info"
                  style={{ width: "70%" }}
                  onClick={() => addToCart()}
                >
                  <i className="fas fa-cart-plus"></i>
                  &nbsp;Add to Cart
                </button>
              );
            }}
          </UserContext.Consumer>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
