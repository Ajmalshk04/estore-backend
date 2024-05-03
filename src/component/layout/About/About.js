import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/ajmal_shk";
  };
  return (
    <div className="aboutSection">
      <div></div>
      <div className="aboutSectionGradient"></div>
      <div className="aboutSectionContainer">
        <Typography
          component="h1"
          style={{ color: "#111827", fontWeight: "600" }}
        >
          About Us
        </Typography>

        <div>
          <div>
            <Avatar
              style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
              src="../../../images/Profile.png"
              alt="Founder"
            />
            <Typography style={{ color: "#111827" }}>TEAM E-Store</Typography>
            <Button onClick={visitInstagram} color="primary">
              Visit Instagram
            </Button>
            <span>
              This is a sample wesbite made by @team_e-store. Only with the
              purpose to learn build and optimize MERN Stack Web App
            </span>
          </div>
          <div className="aboutSectionContainer2">
            <Typography component="h2" style={{ color: "#111827" }}>
              Our Brands
            </Typography>
            <a href="./About.js" target="blank">
              <YouTubeIcon className="youtubeSvgIcon" />
            </a>

            <a href="https://instagram.com/ajmal_shk" target="blank">
              <InstagramIcon className="instagramSvgIcon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
