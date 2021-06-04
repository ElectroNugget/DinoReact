/**
 * FOOTER:
 * Fairly simple footer that displays on every page.
 */
import * as st from "./Footer.st";
import "../css/stylesheet.css";

const Footer = (): JSX.Element => (
  //TODO: Move this styling to a styled component.
  <div
    style={{
      bottom: "0",
      width: "100%",
      height: "2.5rem",
    }}
  >
    <st.FooterBox>
      <st.InnerBox></st.InnerBox>
      <st.InnerBox style={{textAlign:"center"}}>
        <strong>Stay Connected:</strong>
        <hr/>
        <p>
          Join over 50,000 customers who stay up to date with our latest
          releases on these platforms:
        </p>
        <br />
        <i className="fab fa-facebook" style={{margin: "5px"}}></i>
        <i className="fab fa-instagram" style={{margin: "5px"}}></i>
        <i className="fab fa-twitter" style={{margin: "5px"}}></i>
      </st.InnerBox>
      <st.InnerBox>
        <st.ListBox>
          <li>Contact Us:</li>
          <hr/>
          <li>
            <i className="fas fa-map-marker-alt"></i> Dinosaur Island, Costa
            Rica
          </li>
          <li>
            <i className="fas fa-envelope-square"></i> www.dinostore@ingen.com
          </li>
          <li>
            <i className="fas fa-phone-square"></i> +45 999 999 999
          </li>
        </st.ListBox>
      </st.InnerBox>
    </st.FooterBox>
  </div>
);

export default Footer;
