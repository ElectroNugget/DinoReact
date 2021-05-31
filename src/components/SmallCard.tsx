/**
 * Renders a small card for display on product display pages.
 */
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
    <div className="col-sm-4" style={{float:"left", marginBottom:"3em"}}>
      <div className="card bg-dark text-white" style={{width: "18rem"}}>
        <a className="btn btn-light">
          <img className="card-img-top" src={imgUrl} alt={productName} />
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
