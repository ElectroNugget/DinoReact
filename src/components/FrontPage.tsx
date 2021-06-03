/**
 * The home page. Displays the current sales, username and a sweet carousel.
 */
import FrontPageCarousel from "./FrontPageCarousel";
import Headline from "./Headline";
import LargeCard from "./LargeCard";
import { salesCards } from "../storage/salestorage";
import "../css/stylesheet.css"

const message: string = "! Welcome to DinoStore!";

function FrontPage(): JSX.Element {
  return (
    <div style={{ paddingBottom: "2.5rem" }}>
      <FrontPageCarousel />
      <div className="container" style={{width:"60%"}}>
        <Headline message={message} />
      </div>
      <div className="container" style={{width:"60%"}}>
        <div className="row row-cols-1 row-cols-md-2">
          {salesCards.map((card, index) => (
            <div className="col mb-4">
              <LargeCard
                key={index}
                state={card.state}
                linkUrl={card.linkUrl}
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
}

export default FrontPage;
