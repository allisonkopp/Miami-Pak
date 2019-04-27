
import React, { Component } from "react";
import Navbar from "./components/navbar.js";
import About from "./components/about.js";
import "./App.css";
import Home from "./components/Home.js"
import "firebase/auth";

const firebase = require("firebase");
const Firestore = require("@google-cloud/firestore");


const config = {
  apiKey: "AIzaSyB-T7G05PGbsOzy99CqMWEUuaRHyKQbzyo",
  authDomain: "connecting-miami-to-the-world.firebaseapp.com",
  databaseURL: "https://connecting-miami-to-the-world.firebaseio.com",
  // databaseURL:
  //   "https://console.firebase.google.com/project/connecting-miami-to-the-world/database/firestore/data~2Ffood",
  projectId: "connecting-miami-to-the-world",
  storageBucket: "connecting-miami-to-the-world.appspot.com",
  messagingSenderId: "516476440799"
};
firebase.initializeApp(config);
console.log({ config });


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

const db = firebase.firestore();

// myDB
//   .doc("1Ej4n2WS3B5nH6ui6Ngw")
//   .get()
//   .then(x => {
//     console.log(x);
//   });

const myDB = db.collection("food");
const getAll = myDB
  .get()
  .then(snapshot => {
    snapshot.forEach(doc => {
      console.log(doc.id, "=>", doc.data());
    });
  })
  .catch(err => {
    console.log("Error getting documents", err);
  });

export default App;
