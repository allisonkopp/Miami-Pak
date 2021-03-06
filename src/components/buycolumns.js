import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import { CSSTransitionGroup } from "react-transition-group";

const Buynowcard = ({ Buynowcard }) => {
  return (
    <div class="cardcont">
      <div class="columns">
        <div class="column">
          <div class="card">
            <header class="card-header">
              <p class="card-header-title">Component</p>
              <a href="#" class="card-header-icon" aria-label="more options">
                <span class="icon">
                  <i class="fas fa-angle-down" aria-hidden="true" />
                </span>
              </a>
            </header>
            <div class="card-content">
              <div class="content">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus nec iaculis mauris.
                <a href="#">@bulmaio</a>. <a href="#">#css</a>{" "}
                <a href="#">#responsive</a>
                <br />
                <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
              </div>
            </div>
            <footer class="card-footer">
              <a href="#" class="card-footer-item">
                Save
              </a>
              <a href="#" class="card-footer-item">
                Edit
              </a>
              <a href="#" class="card-footer-item">
                Delete
              </a>
            </footer>
          </div>
        </div>
        <div class="column" />
        <div class="column" />
      </div>
    </div>
  );
};
export default Buynowcard;
