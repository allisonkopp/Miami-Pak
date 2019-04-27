import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { CSSTransitionGroup } from "react-transition-group";



const Threecol = ({ threecol }) => {
    return (
      <div class="threecol center">
        <h1>How it works</h1>
        <div class="columns">
          <div class="column">
            <h1>Step 1</h1>
            <p>ljhbfghkjwrbekhjgbwkehrjgew</p>
          </div>
          <div class="column">
            <h1>Step 2</h1>
            <p>ljhbfghkjwrbekhjgbwkehrjgew</p>
          </div>
          <div class="column">
            <h1>Step 3</h1>
            <p>ljhbfghkjwrbekhjgbwkehrjgew</p>
          </div>
        </div>
      </div>
  );
};
export default Threecol;