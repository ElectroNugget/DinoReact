/**
 * Used as a header for the product display pages.
 */
import { jumbotronArray } from "../storage/displaystorage";
import styled from "styled-components";
import "../css/stylesheet.css";

type JumbotronProps = {
  categoryValue: string;
};

function Jumbotron({ categoryValue }: JumbotronProps): JSX.Element {
  const Banner = styled.div`
    height: 300px;
    color: white;
    display: flex;
    text-align: center;
    padding: 0px 100px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  let result = jumbotronArray.filter(
    (item) => item.displayType === categoryValue
  )[0];
  return (
    <Banner
      className="jumbotron jumbotron-fluid"
      //Would be nice to get this banner image URL into the styled component but can't find a fix atm.
      style={{
        backgroundImage: `url(/images/banners/${result.bannerImage})`,
      }}
    >
      <div>
        <h3 className="display-4">{result.title}</h3>
        <p id="jumbotronText" className="lead">
          {result.bannerText}
        </p>
      </div>
    </Banner>
  );
}

export default Jumbotron;
