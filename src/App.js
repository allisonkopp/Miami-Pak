import React, { Component } from 'react';
import Navbar from './components/navbar.js'
import Home from './components/Home.js'
import About from './components/about.js'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="content">
      {/* <Navbar /> */}
      <Home />
      </div>
    );
  }
}

export default App;
