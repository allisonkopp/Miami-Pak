import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./components/about.js";
import Navbar from "./components/navbar.js";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import * as serviceWorker from "./serviceWorker";
import Buynow from "./components/buynow";
import Buynowcard from "./components/buypage";
import Checkoutcard from "./components/checkout";

const routing = (
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={App} />
      <Route exact path="/buynow" component={Buynow} />
      <Route exact path="/buypage" component={Buynowcard} />
      <Route exact path="/checkout" component={Checkoutcard} />
    </div>
  </Router>
);

ReactDOM.render(routing, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
