/**
 * The home page. Displays the current sales, username and a sweet carousel.
 * TODO: Absolutely needs to be broken down into more pieces
 */
import React from "react";
//TODO: Hook up this carousel.
import Carousel from "./Carousel";
// Image imports seem to work best for now, bit weird.
import image01 from "../images/specials/Main001.jpg";
import image02 from "../images/specials/Main002.jpg";
import image03 from "../images/specials/Main003.jpg";
import lightning from "../images/specials/LightningDeal.png";
import bestseller from "../images/specials/BestSeller.png";
import featured from "../images/specials/FeaturedDinosaur.png";
import discounted from "../images/specials/DiscountedDinos.png";

type FrontPageProps = {
  message: string;
};

//Trying to get the customerName here.
//CustomerId needs to be part of the global state.
let customerId: number = 1;
let customerName: string = "";

//Successfully gets customer name. :)
async function getUserName() {
  await fetch(`http://localhost:8000/customers/${customerId}`, {
    method: "GET",
    headers: { "Content-Type": "application/json;charset=utf-8" },
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      customerName = data.customerName;
    })
    .catch((error) => {
      console.log(error);
    });
}

getUserName();

const FrontPage = ({ message }: FrontPageProps): JSX.Element => (
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
    {/* removed this from the below container style="text-align:center" */}
    <div className="container">
      <h3 id="message">
        Hello, {customerName ? customerName : "Guest"}! Welcome to DinoStore!
      </h3>
    </div>
    {/* TODO: Want to make these cards into components as well. */}
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2">
        <div className="col mb-4">
          <div className="card">
            <a href="prodDisplay.html?productKey=size&productValue=Small">
              <img
                src={discounted}
                className="card-img-top"
                alt="Small dinosaurs"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-tags"></i> Discounted Dinos
              </h5>
              <p className="card-text">
                Check out our collection of small dinosaurs!
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <a href="prodDescription.html?dinosaur=Stegosaurus">
              <img src={bestseller} className="card-img-top" alt="" />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-chart-line"></i> Best Sellers
              </h5>
              <p className="card-text">
                Stegosaurus never ceases to be a family favourite.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <a href="prodDescription.html?dinosaur=Brachiosaurus">
              <img
                src={featured}
                className="card-img-top"
                alt="InGen's new Brachiosaurus"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-medal"></i> Featured Dinosaur
              </h5>
              <p className="card-text">
                InGen has just made their new Brachiosaurus model widely
                available.
              </p>
            </div>
          </div>
        </div>
        <div className="col mb-4">
          <div className="card">
            <a href="prodDescription.html?dinosaur=Pteranodon">
              <img
                src={lightning}
                className="card-img-top"
                alt="Pteranodon on sale!"
              />
            </a>
            <div className="card-body">
              <h5 className="card-title">
                <i className="fas fa-bolt"></i>
                <i className="fas fa-dollar-sign"></i> Lightning Deal
                <i className="fas fa-dollar-sign">
                  {" "}
                  <i className="fas fa-bolt"></i>
                </i>
              </h5>
              <p className="card-text">
                Pteranodons are 50% off for the next 24hrs! Don't miss it!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);
export default FrontPage;
