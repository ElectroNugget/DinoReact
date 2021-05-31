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

let message: string = "! Welcome to DinoStore!";

const FrontPage = (): JSX.Element => (
  <div>
    <FrontPageCarousel />
    <div className="container">
      <Headline message={message} />
    </div>
    <div className="container">
      {/* TODO: Ask bjorn about KEY bug */}
      <div className="row row-cols-1 row-cols-md-2">
        {salesCards.map((card) => (
          <div className="col mb-4">
            <LargeCard
              title={card.title}
              description={card.description}
              imgUrl={card.imgUrl}
              imgAlt={card.imgAlt}
              iconUrl={card.iconUrl}
            />
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default FrontPage;
