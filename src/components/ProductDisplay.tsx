/**
 * PRODUCT DISPLAY:
 * Meant to handle any large display of product cards based on a query.
 */
import "../css/stylesheet.css";
import { useEffect, useState } from "react";
import { useLocation } from "react-router";
import SmallCard from "./SmallCard";
import Jumbotron from "./Jumbotron";

//TODO: Universal type file somewhere might be a good idea.
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

type prodDisplayProps = {
  catKey: string;
  catValue: string;
};

function ProductDisplay(): JSX.Element {
  //Gets our 'props' from the URL.
  const location = useLocation<prodDisplayProps>();
  let { catKey, catValue } = location.state;

  async function getProducts() {
    let fetchUrl: string;

    if (catKey === "all" && catValue === "all") {
      fetchUrl = `http://localhost:8000/products`;
    } else {
      fetchUrl = `http://localhost:8000/products/categories/${catKey}/${catValue}`;
    }

    await fetch(fetchUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCardArray(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //State management!
  const [cardArray, setCardArray] = useState<dinoType[]>([]);

  useEffect(() => {
    getProducts();
  }, [catKey, catValue]);

  return (
    <div style={{paddingBottom: "2.5rem" }}>
      <Jumbotron categoryValue={catKey ? catValue : "all"} />
      <div className="cardDisplay">
        <div className="container text-center" style={{ width: "60%" }}>
          <div className="card-deck">
            {cardArray.map((dino, index) => (
              <SmallCard
                key={index}
                productId={dino.productId}
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
