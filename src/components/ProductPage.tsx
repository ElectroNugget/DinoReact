/**
 * Acts as the container for an entire product page.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece it back together.
 */
import { useParams } from "react-router";
import ProductCarousel from "./ProductCarousel";
import {Link} from "react-router-dom"

type params = {
  id: string;
};

//TODO: Make a types file??
type dinoArray = 
  {
    productId:number,
    productName:string,
    latinName:string,
    imageName1:string,
    imageName2:string,
    imageName3:string,
    manufacturer:string,
    era:string,
    dna:string,
    diet:string,
    size:string,
    length:string,
    height:string,
    weight:string,
    difficulty:string,
    price:number,
    description:string,
  }
;

let fetchArr:dinoArray;

// First time render is fucked??? Placeholder.
fetchArr = 
  {
    productId:1,
    productName:"string",
    latinName:"string",
    imageName1:"string",
    imageName2:"string",
    imageName3:"asdads",
    manufacturer:"asdads",
    era:"asdads",
    dna:"asdads",
    diet:"asdads",
    size:"asdads",
    length:"asdads",
    height:"asdads",
    weight:"asdads",
    difficulty:"asdads",
    price:10,
    description:"asdads",
  }
;

async function getDinoData(id: string) {
  await fetch(`http://localhost:8000/products/${id}`, {
    method: "GET",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
  .then((res) => res.json())
  .then((data) => {
    fetchArr = data;
    console.log("DinoArray from fetch for PRODUCT PAGE:", fetchArr);
  })
  .catch((error) => {
    console.log(error);
  });
}

function ProductPage(): JSX.Element {
  let { id }: params = useParams();

  getDinoData(id);

  return (
    <div className="container">
      <ProductCarousel />
      <div className="productInfoContainer">
      <div className="productName">
        <h2 id="dinosaurName" style={{ display: "inline" }}>
          {fetchArr.productName}
        </h2>
        <h3 style={{ display: "inline" }}>
          <em>{fetchArr.latinName}</em>
        </h3>
      </div>
      <div className="productDescription">
        <h5>Description:</h5>
        <p>{fetchArr.description}</p>
      </div>
      <div className="productDetails">
        <h6>Manufacturer: {fetchArr.manufacturer}</h6>
        <h6>Era: {fetchArr.era}</h6>
        <h6>DNA Purity: {fetchArr.dna}</h6>
        <h6>Diet: {fetchArr.diet}</h6>
        <h6>Size Category: {fetchArr.size}</h6>
        <h6>Length: {fetchArr.length}</h6>
        <h6>Height: {fetchArr.height}</h6>
        <h6>Weight: {fetchArr.weight}</h6>
        <h6>Difficulty Rating: {fetchArr.difficulty}</h6>
      </div>
      <hr />
      <div className="productOptions">
        <h5>Buy Now:</h5>
        <h6>Quantity:</h6>
        <input id="quantityInput" type="number" value="1" min="1" max="10" />

        <h6>Price:</h6>
        <p id="invisiblePrice" style={{ display: "none" }}>
          {fetchArr.price}
        </p>
        <p id="priceDisplay">{fetchArr.price.toLocaleString()} USD</p>
        <button
          type="button"
          className="btn btn-primary" //onClick="addToCart()"
        >
          <i className="fas fa-cart-plus"></i> Add to Cart
        </button>
      </div>
    </div>
    </div>
  );
}

export default ProductPage;
