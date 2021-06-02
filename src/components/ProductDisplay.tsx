/**
 * Meant to handle any large display of product cards based on a query.
 * TODO: Hook up API
 */
import { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import Jumbotron from "./Jumbotron";
import { useLocation, useParams } from "react-router";

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

type prodDisplayProps = {
  catKey: string,
  catValue: string,
}


//Actual component function.
function ProductDisplay(): JSX.Element {

  // let { categoryKey, categoryValue }: params = useParams();

  // type params = {
  //   categoryKey: string;
  //   categoryValue: string;
  // };

  const location = useLocation<prodDisplayProps>();
  console.log("Location.state=",location.state);
  let {catKey, catValue} = location.state;

  async function getProducts() {
    let fetchUrl: string;
  
    if (catKey === undefined && catValue === undefined) {
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

  //You can use hooks here!
  // Declare a new state variable, which we'll call "count"
  const [count, setCount] = useState(0);
  const [cardArray, setCardArray] = useState<dinoType[]>([]); //Implicit understanding????




  //getProducts(); //Causes an infinite loop

  //No lifecycle methods but I have useEffect Hook

  useEffect(()=>{getProducts()},[catKey,catValue]) //Two params, function and array
  //provided function called ONCE, on mount. OR when any of the values inside the array change.
  //If you change something in the array with the given function, infinite loop.
  //Can have many useEffects.

  console.log("proddisplay: key:", catKey);
  console.log("proddisplay: value:", catValue);

  return (
    <div>
      <Jumbotron categoryValue={catKey ? catValue : "all"} />
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
