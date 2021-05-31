/**
 * Meant to handle any large display of product cards based on a query.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece it back together.
 */
// import React from "react";
// import ProductCard from "./ProductCard";
// import Jumbotron from "./Jumbotron";
import { useLocation } from "react-router";

let cardDeck: object[] = [];

type passedProps = {
  categoryKey: string;
  categoryValue: string;
};

// async function getData() {


// }

// getData();

function ProductDisplay(): JSX.Element {
  console.log("Hello productdisplay")
  const location = useLocation();
  const { categoryKey, categoryValue }: passedProps =
  location.state as passedProps;
  console.log("category key:", categoryKey);
  console.log("category value:", categoryValue);

  return (
    <div className="cardDisplay">
      <div className="container text-center">
        <h2 id="CategoryTitle">{categoryKey}</h2>
        <p id="CategoryDescription">{categoryValue}</p>

        {/* Need to map a bunch of cards into this div. */}
        <div className="card-deck">
          <div id="injectCards">{cardDeck}</div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
