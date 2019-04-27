import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Hero from "../components/hero.js";
import Threecol from "../components/threecol.js";
import Slider from "../components/slider.js";
import Buynow from "../components/buynow.js";
import ReactLoading from "react-loading";



class Buynowcard extends Component {

  render() {
    return (
      <div class="buycontent">
        <div class="headertext">
          <h1>Our Food Options</h1>
        </div>
      </div>
    );
  }
}

export default Buynowcard;