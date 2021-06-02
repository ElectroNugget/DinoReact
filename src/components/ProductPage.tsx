/**
 * Acts as the container for an entire product page.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece it back together.
 */
import "../css/stylesheet.css";
import { useEffect, useState } from "react";
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

  async function getDinoData() {
    await fetch(`http://localhost:8000/products/${productId}`, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setDinoDetails(data);
        console.log("dinoDetails from fetch for PRODUCT PAGE:", data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //State management!
  const [dinoDetails, setDinoDetails] = useState<Partial<dinoType>>({});

  useEffect(() => {
    getDinoData();
  }, [productId]);

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
          <h6>Manufacturer: {dinoDetails.manufacturer}</h6>
          <h6>Era: {dinoDetails.era}</h6>
          <h6>DNA Purity: {dinoDetails.dna}</h6>
          <h6>Diet: {dinoDetails.diet}</h6>
          <h6>Size Category: {dinoDetails.size}</h6>
          <h6>Length: {dinoDetails.length}</h6>
          <h6>Height: {dinoDetails.height}</h6>
          <h6>Weight: {dinoDetails.weight}</h6>
          <h6>Difficulty Rating: {dinoDetails.difficulty}</h6>
        </st.ProductDetails>

        <hr />
        <st.ProductOptions>
          <h5>Buy Now:</h5>
          <h6>Quantity:</h6>
          <input id="quantityInput" type="number" value="1" min="1" max="10" />

          <h6>Price:</h6>
          <p id="invisiblePrice" style={{ display: "none" }}>
            {dinoDetails.price}
          </p>
          <p id="priceDisplay">{dinoDetails.price?.toLocaleString()} USD</p>
          <button
            type="button"
            className="btn btn-primary" //onClick="addToCart()"
          >
            <i className="fas fa-cart-plus"></i> Add to Cart
          </button>
        </st.ProductOptions>
      </st.ProductInfoContainer>
    </div>
  );
}

export default ProductPage;
