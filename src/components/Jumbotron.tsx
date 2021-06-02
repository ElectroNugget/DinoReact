/**
 * Used as a header for the product display pages.
 */
import { jumbotronArray } from "../storage/displaystorage";

type JumbotronProps = {
  categoryValue: string;
};

function Jumbotron({ categoryValue }: JumbotronProps): JSX.Element {
  let result = jumbotronArray.filter(
    (item) => item.displayType === categoryValue
  )[0];
  return (
    <div
      className="jumbotron jumbotron-fluid"
      style={{
        backgroundImage: `url(/images/banners/${result.bannerImage})`,
        height: "300px",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div>
        <h3 className="display-4">{result.title}</h3>
        <p id="jumbotronText" className="lead">
          {result.bannerText}
        </p>
      </div>
    </div>
  );
}

export default Jumbotron;
