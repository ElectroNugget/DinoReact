/**
 * Acts as the container for an entire product page.
 * TODO: Used to be generated mostly by inject functions and queries. Need to piece it back together.
 */
 import React from "react";
 import Carousel from "./Carousel"
 import ProductInfo from "./ProductInfo"
 
 type ProductPageProps = {
     productName: string,
     latinName: string
 }

 const ProductPage = ({productName, latinName}:ProductPageProps):JSX.Element => (
     <div className="container">
       <Carousel message={""}/>
       <div id="injectProductName">{productName} {latinName}</div>
       {/* <div
         id="injectProductInfo"
         className="productInfoContainer bg-dark text-white"
       ></div> */}
       {/* How to get and pass down props here??? */}
       {/* <ProductInfo ></ProductInfo> */}
     </div>
   );
 
 export default ProductPage;
 