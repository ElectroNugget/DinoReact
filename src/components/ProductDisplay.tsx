/**
 * Meant to handle any large display of product cards based on a query.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece it back together.
 */
// import React from "react";
// import ProductCard from "./ProductCard";
// import Jumbotron from "./Jumbotron";
import SmallCard from "./SmallCard";
import Jumbotron from "./Jumbotron";
import { useParams } from "react-router";
import { dinoArray } from "../storage/dinostorage";

function ProductDisplay(): JSX.Element {
  type params = {
    categoryKey: string;
    categoryValue: string;
  };

  let { categoryKey, categoryValue }: params = useParams();

  console.log("proddisplay: category key:", categoryKey);
  console.log("proddisplay: category value:", categoryValue);

  return (
    <div>
      <Jumbotron categoryValue={categoryValue} />
      <div className="cardDisplay">
        <div className="container text-center">
          <h2 id="CategoryTitle">{categoryKey}</h2>
          <p id="CategoryDescription">{categoryValue}</p>

          <div className="card-deck">
            {/* FIXME: Key bug */}
            {dinoArray.map((dino) => (
              <SmallCard
                productName={dino.productName}
                manufacturer={dino.manufacturer}
                price={dino.price}
                imgUrl={"/images/squarethumbnails/" + dino.productName + ".png"}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
