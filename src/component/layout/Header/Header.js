import React from "react";
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/Frame 1 (1).png";
import "./Header.css";

const options = {
  burgerColor: "#fbbf24",
  // burgerColorHover: "#FBBF25",
  logo,
  logoWidth: "19vmax",
  navColor1: "#111827",
  logoHoverSize: "0px",
  logoHoverColor: "rgba(0,0,0)",
  link1Text: "Home",
  link2Text: "Products",
  link3Text: "Contact",
  link4Text: "About",
  link1Url: "/",
  link2Url: "/products",
  link3Url: "/contact",
  link4Url: "/about",
  link1Size: "1.3vmax",
  link1Color: "#ffff",
  nav1justifyContent: "flex-end",
  nav2justifyContent: "flex-end",
  nav3justifyContent: "flex-start",
  nav4justifyContent: "flex-start",
  link1ColorHover: "#FBBF25",
  link1Margin: "1vmax",
  profileIconColor: "#fbbf24",
  searchIconColor: "#fbbf24",
  cartIconColor: "#fbbf24",
  profileIconUrl: "/login",
  // profileIconColorHover: "#FF0816",
  // searchIconColorHover: "#FBBF25",
  // cartIconColorHover: "#FBBF25",
  cartIconMargin: "1vmax",
};

const Header = () => {
  return <ReactNavbar {...options} />;
};

export default Header;
