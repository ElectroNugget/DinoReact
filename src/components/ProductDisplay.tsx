/**
 * Meant to handle any large display of product cards based on a query.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece it back together.
 */
import React from "react";
import ProductCard from "./ProductCard";
import Jumbotron from "./Jumbotron";

let cardDeck: object[] = [];

type ProductDisplayProps = {
  title: string;
  description: string;
};

const ProductDisplay = ({
  title,
  description,
}: ProductDisplayProps): JSX.Element => (
  <div className="cardDisplay">
    <div className="container text-center">
      <h2 id="CategoryTitle">{title}</h2>
      <p id="CategoryDescription">{description}</p>

      {/* Need to map a bunch of cards into this div. */}
      <div className="card-deck">
        <div id="injectCards">{cardDeck}</div>
      </div>
    </div>
  </div>
);

export default ProductDisplay;
