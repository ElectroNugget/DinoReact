/**
 * Meant to handle any large display of product cards based on a query.
 * TODO: Hook up API
 */
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
          <div className="card-deck">
            {dinoArray.map((dino, index) => (
              <SmallCard
                key={index}
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
