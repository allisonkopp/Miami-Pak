import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import openbox from "../Assets/open_box.png";
import Buynowcard from "./buycolumns.js";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

const Buynow = ({ Buynow }) => {
  return (
    <div class="buycolumns">
      <div class="columns">
        <div class="column">
          <button>
            <Link to="/buypage">
              <h1>Buy Now</h1>
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Buynow;
