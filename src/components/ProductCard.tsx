/**
 * Basically the code for ONE card. Can be mapped into many in ProductDisplay.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece this back together.
 */
import React from "react";
// TODO: Where do we get this info (From the API dumbass)
// FIXME: Styling!
//let productName, manufacturer, price;
type ProductCardProps = {
  productName: string;
  manufacturer: string;
  price: string;
};

//FIXME: Add back this styling to the top two divs somehow.
//<div className="col-sm-4" style="float:left; margin-bottom:3em">
//<div className="card bg-dark text-white" style="width: 18rem;">

const ProductCard = ({
  productName,
  manufacturer,
  price,
}: ProductCardProps): JSX.Element => (
  <div className="col-sm-4">
    <div className="card bg-dark text-white">
      <a
        href="prodDescription.html?dinosaur=${product.productName}"
        className="btn btn-light"
      >
        <img
          className="card-img-top"
          src="images/Thumbs/SquareThumbs/${product.productName}.png"
          alt="Card image cap"
        />
      </a>
      <div className="card-body">
        <a href="prodDescription.html?dinosaur=${product.productName}">
          <h5 className="card-title">{productName}</h5>
        </a>
        <h6 className="card-title">{manufacturer}</h6>
        <p className="card-text">{price.toLocaleString()} USD</p>
      </div>
    </div>
  </div>
);

export default ProductCard;
