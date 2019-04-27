import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Logo from "../Assets/miamipak.png";
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import Modal from "../components/modal.js"


// Button Click function

var showmenu = () => {
  var x = document.getElementsByClassName("navbar-menu");
  x.classList.toggle("is-active");
};

class Navbar extends Component {

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };





  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src={Logo} width="100" height="auto" />
          </a>

          <a
            role="button"
            className="navbar-burger burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onclick=""
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </a>
        </div>

        <div id="navbarBasicExample" className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item navitem">
              Home
            </Link>

            <Link to="/about" className="navbar-item navitem">
              About
            </Link>
          </div>

          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a className="button marvbtn">
                  <strong>Sign up</strong>
                  <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>hi</p>
          <p>Data</p>
        </Modal>
                </a>
                <a className="button is-light" onClick={this.showModal}>Log in</a>
              </div>
            </div>
          </div>
        </div>
        
      </nav>

      
    );
  }
}

export default Navbar;
