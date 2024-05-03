import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import cart from "../../../images/carts.png";
import "./Footer.css";
const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftfooter">
        <h4>Download Our App</h4>
        <p>Download App for IOS and android mobile phones</p>
        <img src={playStore} alt="playStore" />
        <img src={appStore} alt="appStore" />
      </div>
      <div className="midfooter">
        <h1>
          <img src={cart} alt="cart" />
          E-Store
        </h1>
        <p>High quality is our priority</p>
        <p>Copyrights 2022 &copy; TechGeek</p>
      </div>
      <div className="rightfooter">
        <h4>Follow Us on</h4>
        <a href="https://twitter.com/AJ_cK04">Instagram</a>
        <a href="https://twitter.com/AJ_cK04">Youtube</a>
        <a href="https://twitter.com/AJ_cK04">Twitter</a>
      </div>
    </footer>
  );
};

export default Footer;
