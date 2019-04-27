import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Hero from "../components/hero.js";
import Threecol from "../components/threecol.js";
import Slider from "../components/slider.js";
import Buynow from "../components/buynow.js";
import ReactLoading from "react-loading";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class Buynowcard extends Component {
  render() {
    return (
      // <div class="buycontent">
      //   <div class="headertext">
      <div class="columns">
        <div class="column">
          <h1>BIWEEKLY</h1>
          <button>
            <Link to="/checkout">
              <h1>Buy Now</h1>
            </Link>
          </button>
        </div>
        <div class="column">
          <h1>MONTHLY</h1>
          <button>
            <Link to="/checkout">
              <h1>Buy Now</h1>
            </Link>
          </button>
        </div>
        <div class="column">
          <h1>TWO MONTHS</h1>
          <button>
            <Link to="/checkout">
              <h1>Buy Now</h1>
            </Link>
          </button>
        </div>
      </div>

      //   </div>
      // </div>
    );
  }
}

export default Buynowcard;
