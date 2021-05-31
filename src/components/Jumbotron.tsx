/**
 * Code for a jumbotron, used as headers for a lot of product displays.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece this back together.
 */
import React from "react";
import { jumbotronArray } from "../storage/displaystorage"

type JumbotronProps = {
  categoryValue: string,
};

type result = {
  displayType: string,
  title: string
  bannerText: string,
  bannerImage: string,
}

function Jumbotron({ categoryValue }: JumbotronProps): JSX.Element {

  let result = jumbotronArray.filter((item) => item.displayType === categoryValue )[0];
  console.log("result:", result)
  return (
    //style="background-image: url(images/Banners/${jumboObj.bannerImage}); height:300px;"
    <div
      className="jumbotron jumbotron-fluid"
    >
      
      {/* style="text-align:center" */}
      <div className="container" >
        <h3 className="display-4">{result.title}</h3>
        <p id="jumbotronText" className="lead">
          {result.bannerText}
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
