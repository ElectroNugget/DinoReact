/**
 * Acts as the container for an entire product page.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece it back together.
 */
import "../css/stylesheet.css";
import { UserContext, ProductType } from "../UserContext";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router";
import ProductCarousel from "./ProductCarousel";
import * as st from "./ProductPage.st";

type productPageProps = {
  productId: number;
};

type dinoType = {
  productId: number;
  productName: string;
  latinName: string;
  imageName1: string;
  imageName2: string;
  imageName3: string;
  manufacturer: string;
  era: string;
  dna: string;
  diet: string;
  size: string;
  length: string;
  height: string;
  weight: string;
  difficulty: string;
  price: number;
  description: string;
};

function ProductPage(): JSX.Element {
  const location = useLocation<productPageProps>();
  let { productId } = location.state;

  //State management!
  const [dinoDetails, setDinoDetails] = useState<Partial<dinoType>>({});
  const [quantity, setQuantity] = useState(1);
  const { cart, setCart, cartCount, setCartCount } = useContext(UserContext);

  useEffect(() => {
    getDinoData();
  }, [productId]);

  async function getDinoData() {
    await fetch(`http://localhost:8000/products/${productId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setDinoDetails(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function changeQuantity() {
    setQuantity(quantity + 1);
    console.log("Current quantity", quantity);
  }

  function findProduct(contentsArray: ProductType[], Id: number) {
    return contentsArray.findIndex((currProd) => currProd.productId === Id);
  }

  //Adds an item to the cart by updating Context, and syncing the result with the API.
  async function addToCart() {
    setQuantity(quantity);
    let newCart = cart;
    let index = findProduct(cart, productId);
    if (index === -1) {
      newCart.push({
        productId: dinoDetails.productId,
        quantity: quantity,
        productName: dinoDetails.productName,
        price: dinoDetails.price,
      });
    } else {
      newCart[index].quantity!++;
    }
    setCart(newCart);
    console.log("Item added to cart:", cart);
    setCartCount(cartCount + quantity);
  }

  return (
    <div className="container" style={{ width: "60%" }}>
      <ProductCarousel
        imageName1={dinoDetails.imageName1!}
        imageName2={dinoDetails.imageName2!}
        imageName3={dinoDetails.imageName3!}
      />
      <st.ProductName>
        <h2 id="dinosaurName" style={{ display: "inline" }}>
          {dinoDetails.productName}
        </h2>
        <h3 style={{ display: "inline" }}>
          <em>({dinoDetails.latinName})</em>
        </h3>
      </st.ProductName>
      <st.ProductInfoContainer>
        <st.ProductDescription>
          <h5>Description:</h5>
          <p>{dinoDetails.description}</p>
        </st.ProductDescription>

        <st.ProductDetails>
          <h5>Product Stats:</h5>
          <h6>
            <strong>Manufacturer:</strong> {dinoDetails.manufacturer}
          </h6>
          <h6>
            <strong>Era:</strong> {dinoDetails.era}
          </h6>
          <h6>
            <strong>DNA Purity:</strong> {dinoDetails.dna}
          </h6>
          <h6>
            <strong>Diet:</strong> {dinoDetails.diet}
          </h6>
          <h6>
            <strong>Size:</strong> {dinoDetails.size}
          </h6>
          <h6>
            <strong>Length:</strong> {dinoDetails.length}
          </h6>
          <h6>
            <strong>Height:</strong> {dinoDetails.height}
          </h6>
          <h6>
            <strong>Weight:</strong> {dinoDetails.weight}
          </h6>
          <h6>
            <strong>Difficulty Rating:</strong> {dinoDetails.difficulty}
          </h6>
        </st.ProductDetails>

        <hr />
        <st.ProductOptions>
          <h5>Buy Now:</h5>
          <h6>Quantity:</h6>
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value))}
          />
          <br />
          <h6>Price:</h6>
          <p id="priceDisplay">{dinoDetails.price?.toLocaleString()} USD</p>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => addToCart()}
          >
            <i className="fas fa-cart-plus"></i> Add to Cart
          </button>
        </st.ProductOptions>
      </st.ProductInfoContainer>
    </div>
  );
}

export default ProductPage;
