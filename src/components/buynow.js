import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import openbox from "../Assets/open_box.png"


  
const Buynow = ({ Buynow }) => {
  return (
    <div class="buynowcont">
      <div class="columns">
        <div class="column">
          <img src={openbox} />
        </div>
        <div class="column">buy now button and desctiption</div>
      </div>
    </div>
  );
};
export default Buynow;