import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import openbox from "../Assets/open_box.png";
import Buynowcard from "./buycolumns.js";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import App from "../App.js";
// let itemsArray;

let items;
items.getData();

console.log(items, "++++++");

class Discovercard extends Component {
  render() {
    return (
      <div>
        <h2>See what people have recieved in the past</h2>
        <div class="columns">
          <div class="column"> {items}</div>
          <div class="column">Second column</div>
          <div class="column">Third column</div>
        </div>
      </div>
    );
  }
}

export default Discovercard;
