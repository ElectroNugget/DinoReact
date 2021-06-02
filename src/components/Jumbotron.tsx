/**
 * Used as a header for the product display pages.
 */
import { jumbotronArray } from "../storage/displaystorage";
import * as st from "./Jumbotron.st"
import "../css/stylesheet.css";

type JumbotronProps = {
  categoryValue: string;
};

function Jumbotron({ categoryValue }: JumbotronProps): JSX.Element {

  let result = jumbotronArray.filter(
    (item) => item.displayType === categoryValue
  )[0];
  return (
    <st.Banner
      className="jumbotron jumbotron-fluid"
      style={{
        backgroundImage: `url(/images/banners/${result.bannerImage})`,
      }}
    >
      <div>
        <st.BannerTitle>{result.title}</st.BannerTitle>
        <st.BannerText>
          {result.bannerText}
        </st.BannerText>
      </div>
    </st.Banner>
  );
}

export default Jumbotron;
