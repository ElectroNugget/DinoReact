/**
 * The home page. Displays the current sales, username and a sweet carousel.
 * TODO: Absolutely needs to be broken down into more pieces
 */
import React from "react";
//TODO: Hook up this carousel.
import FrontPageCarousel from "./FrontPageCarousel";
import Headline from "./Headline";
import LargeCard from "./LargeCard";
import { salesCards } from "../storage/salestorage";

let message: string = "! Welcome to DinoStore!"

const FrontPage = (): JSX.Element => (
  <div>
    <FrontPageCarousel />
    <div className="container">
      <Headline message={message}/>
    </div>
    <div className="container">
      {/* TODO: Ask bjorn about KEY bug */}
      {salesCards.map((card) => (
        <LargeCard
          title={card.title}
          description={card.description}
          imgUrl={card.imgUrl}
          imgAlt={card.imgAlt}
          iconUrl={card.iconUrl}
        />
      ))}
    </div>
  </div>
);

export default FrontPage;
