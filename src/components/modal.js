import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Hero from "../components/hero.js";
import Threecol from "../components/threecol.js";
import Slider from "../components/slider.js";
import Buynow from "../components/buynow.js";
import ReactLoading from "react-loading";


const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button class="button" onClick={handleClose}>Close</button>
      </section>
    </div>
  );
};

export default Modal