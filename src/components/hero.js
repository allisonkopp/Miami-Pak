import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";


  
const Hero = ({ Hero }) => {
  return (
    <div class="hero-container">
    <div class="columns">
      <div class="column">
        <img src="https://munchpak.com/static/version_2f60d29b99/frontend/Ripen/munchpak/en_US/images/pages/home/slides/slide-munchpak.png" />
      </div>
      <div class="column desctext">
        <h1>MiamiPak</h1>
          <h2>
            New and popular snacks from around the world. Delivered to your
            door. fdskjhgbsdkhjfbshkdbfkhjsdbhkfbsadhjfbakhjsbdkhjfabsdkhjdfbas.
          </h2>
      </div>
    </div>
  </div>
  );
};
export default Hero;
