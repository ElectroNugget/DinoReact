/**
 * The home page. Displays the current sales, username and a sweet carousel.
 */
import FrontPageCarousel from "./FrontPageCarousel";
import Headline from "./Headline";
import LargeCard from "./LargeCard";
import { salesCards } from "../storage/salestorage";

const message: string = "! Welcome to DinoStore!";

function FrontPage(): JSX.Element {
  return (
    <div>
      <FrontPageCarousel />
      <div className="container">
        <Headline message={message} />
      </div>
      <div className="container">
        <div className="row row-cols-1 row-cols-md-2">
          {salesCards.map((card, index) => (
            <div className="col mb-4">
              <LargeCard
                key={index}
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
