import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import calendar from "../Assets/cal.png";
import truck from "../Assets/truck.png";
import snack from "../Assets/snack.png";

import { CSSTransitionGroup } from "react-transition-group";

const Threecol = ({ threecol }) => {
 return (
   <div class="threecol center">
     <h1>How it works</h1>
     <div class="columns">
       <div class="column">
         <h4 class="topText">Step 1</h4>
         <img width="200px" src={calendar} />
         <h2>Start Subscription or Single Purchase</h2>

         <p>Order for yourself or for a friend!</p>
       </div>
       <div class="column">
         <h4 class="topText">Step 2</h4>
         <img width="200px" src={truck} />
         <h2>Hand Packed and Shipped in Miami</h2>
         <p>
           Your order is packed with love here in Miami and shipped off in less
           than 24 hours.
         </p>
       </div>
       <div class="column">
         <h4 class="topText">Step 3</h4>
         <img width="200px" src={snack} />
         <h2>Look forward to more snacks!</h2>
         <p>New Miami Snacks delivered to your door as often as you choose.</p>
       </div>
     </div>
   </div>
 );
};
export default Threecol;