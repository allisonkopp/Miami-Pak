import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { CSSTransitionGroup } from "react-transition-group";
import openBox from "../Assets/open_box.png"
import { Route, Link, BrowserRouter as Router } from "react-router-dom";



const Slider = ({ Slider }) => {
    return (
      <div class="slider">
        <div class="columns">
          <div class="column">
           <img src={openBox}></img>
           <button>
            <Link to="/buypage">
              <h3>Subscribe!</h3>
            </Link>
          </button>
          </div>
        </div>
      </div>
  );
};
export default Slider;