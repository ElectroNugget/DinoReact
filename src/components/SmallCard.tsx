import React from "react";
import { Link } from "react-router-dom";

type SmallCardProps = {
  productName: string;
  manufacturer: string;
  price: number;
  imgUrl: string;
};

function SmallCard({
  productName,
  manufacturer,
  price,
  imgUrl,
}: SmallCardProps): JSX.Element {
  return (
    //  style="float:left; margin-bottom:3em"
    <div className="col-sm-4">
      {/*  style="width: 18rem;" */}
      <div className="card bg-dark text-white">
        <a className="btn btn-light">
          <img className="card-img-top" src={imgUrl} alt="Card image cap" />
        </a>
        <div className="card-body">
          <Link to="/">
            <h5 className="card-title">{productName}</h5>
          </Link>
          <h6 className="card-title">{manufacturer}</h6>
          <p className="card-text">{price.toLocaleString()} USD</p>
        </div>
      </div>
    </div>
  );
}

export default SmallCard;
