/**
 * Meant to handle any large display of product cards based on a query.
 * TODO: Hook up API
 */
import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import Jumbotron from "./Jumbotron";
import { useParams } from "react-router";

//Everything but types should be inside the component scope.
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
}

//Actual component function.
function ProductDisplay(): JSX.Element {

  let { categoryKey, categoryValue }: params = useParams();
  
  type params = {
    categoryKey: string;
    categoryValue: string;
  };

  async function getProducts() {
    let fetchUrl: string;
  
    if (categoryKey === undefined && categoryValue === undefined) {
      fetchUrl = `http://localhost:8000/products`;
    } else {
      fetchUrl = `http://localhost:8000/products/categories/${categoryKey}/${categoryValue}`;
    }
  
    await fetch(fetchUrl, {
      method: "GET",
      headers: { "Content-Type": "application/json;charset=utf-8" },
    })
      .then((res) => res.json())
      .then((data) => {
        setCardArray(data);
        console.log("cardArray from fetch:", cardArray);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  //You can use hooks here!
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [cardArray, setCardArray] = useState<dinoType[]>([]); //Implicit understanding????
  console.log(count);



  //getProducts(); //Causes an infinite loop

  //No lifecycle methods but I have useEffect Hook

  useEffect(()=>{getProducts()},[]) //Two params, function and array
  //provided function called ONCE, on mount. OR when any of the values inside the array change.
  //If you change something in the array with the given function, infinite loop.
  //Can have many useEffects.

  console.log("proddisplay: category key:", categoryKey);
  console.log("proddisplay: category value:", categoryValue);

  return (
    <div>
      <Jumbotron categoryValue={categoryValue ? categoryValue : "all"} />
      <div className="cardDisplay">
        <div className="container text-center">
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
          <button onClick={()=>setCount((prevState)=>{return prevState+1})}>Count: {count}</button>
        </div>
      </div>
    </div>
  );
}

export default ProductDisplay;
