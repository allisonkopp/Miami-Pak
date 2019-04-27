import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { CSSTransitionGroup } from "react-transition-group";
import openBox from "../Assets/open_box.png"



const Slider = ({ Slider }) => {
    return (
      <div class="slider">
        <div class="columns">
          <div class="column">
           <img src={openBox}></img>
           <input type="submit" value="Subscribe"></input>
          </div>
        </div>
      </div>
  );
};
export default Slider;