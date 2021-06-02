/**
 * Fairly simple footer that displays on every page.
 * TODO: Make sure it sits at the bottom properly on shorter pages.
 */
import * as st from "./Footer.st"
import "../css/stylesheet.css"

const Footer = (): JSX.Element => (
  <div>
    <st.FooterBox>
      <st.InnerBox></st.InnerBox>
      <st.InnerBox>
        Stay Connected:
        <p>
          Join over 50,000 customers who stay up to date with our latest
          releases on these platforms:
        </p>
        <br />
        <i className="fab fa-facebook"></i>
        <i className="fab fa-instagram"></i>
        <i className="fab fa-twitter"></i>
      </st.InnerBox>
      <st.InnerBox>
        <st.ListBox>
          <li>Contact Us:</li>
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
