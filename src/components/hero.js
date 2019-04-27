import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Box from "../Assets/Box.png"


  
const Hero = ({ Hero }) => {
  return (
    <div class="hero-container">
    <div class="columns">
      <div class="column">
        <img src={Box} />
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
