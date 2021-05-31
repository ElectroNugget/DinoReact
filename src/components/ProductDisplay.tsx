/**
 * Meant to handle any large display of product cards based on a query.
 * TODO: Hook up API
 */
import SmallCard from "./SmallCard";
import Jumbotron from "./Jumbotron";
import { useParams } from "react-router";

//TODO: Make a types file??
type dinoArray = [
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
];

let fetchedArray:dinoArray;

// First time render is fucked??? Placeholder.
fetchedArray = [
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
];

async function getProducts(key: string, value: string) {
  let fetchUrl:string;
  
  if(key === undefined && value === undefined) {
    fetchUrl  = `http://localhost:8000/products`
  } else {
    fetchUrl = `http://localhost:8000/products/categories/${key}/${value}`
  }

  await fetch(fetchUrl, {
    method: "GET",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      fetchedArray = data;
      console.log("DinoArray from fetch:", fetchedArray);
    })
    .catch((error) => {
      console.log(error);
    });
}

//Actual component function.
function ProductDisplay(): JSX.Element {
  type params = {
    categoryKey: string;
    categoryValue: string;
  };

  let { categoryKey, categoryValue }: params = useParams();

  getProducts(categoryKey, categoryValue);

  console.log("proddisplay: category key:", categoryKey);
  console.log("proddisplay: category value:", categoryValue);

  return (
    <div>
      <Jumbotron categoryValue={categoryValue? categoryValue : "all"} />
      <div className="cardDisplay">
        <div className="container text-center">
          <div className="card-deck">
            {fetchedArray.map((dino, index) => (
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
