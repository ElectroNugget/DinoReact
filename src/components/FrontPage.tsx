/**
 * The home page. Displays the current sales, username and a sweet carousel.
 * TODO: Absolutely needs to be broken down into more pieces
 */
import React from "react";
//TODO: Hook up this carousel.
import Carousel from "./Carousel";
import Headline from "./Headline";
import LargeCard from "./LargeCard";
// Image imports seem to work best for now, bit weird.
import image01 from "../images/specials/Main001.jpg";
import image02 from "../images/specials/Main002.jpg";
import image03 from "../images/specials/Main003.jpg";

const FrontPage = (): JSX.Element => (
  <div>
    <div className="index-container">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <ol className="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src={image01} alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Welcome to Dinostore!</h5>
              <p>We promise our dinosaurs are safe (if handled carefully).</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src={image02} alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>Coming Next Year!</h5>
              <p>
                Visit the DinoStore resort to see them all in a natural
                environment. Tickets available in 2022!
              </p>
            </div>
          </div>

          <div className="carousel-item">
            <img className="d-block w-100" src={image03} alt="" />
            <div className="carousel-caption d-none d-md-block">
              <h5>New Dinosaurs on the Horizon!</h5>
              <p>Regenesis promises to bring us new spliced species by 2025!</p>
            </div>
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </div>
    <div className="container">
      <Headline message="! Welcome to DinoStore!" />
    </div>
    <div className="container">
      <LargeCard
        title="Discounted Dinos"
        description="Check out our collection of small dinosaurs!"
        imgUrl="/images/specials/DiscountedDinos.png"
        iconUrl="fas fa-tags"
      />

      <LargeCard
        title="Best Sellers"
        description="Stegosaurus never ceases to be a family favourite"
        imgUrl="/images/specials/BestSeller.png"
        iconUrl="fas fa-chart-line"
      />

      <LargeCard
        title="Featured Dinosaur"
        description="InGen has just made their new Brachiosaurus model widely available."
        imgUrl="/images/specials/FeaturedDinosaur.png"
        iconUrl="fas fa-medal"
      />

      <LargeCard
        title="Lightning Deal"
        description="Pteranodons are 50% off for the next 24hrs! Don't miss it!"
        imgUrl="/images/specials/LightningDeal.png"
        iconUrl="fas fa-dollar-sign"
      />
    </div>
  </div>
);

export default FrontPage;