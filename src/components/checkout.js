import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Hero from "../components/hero.js";
import Threecol from "../components/threecol.js";
import Slider from "../components/slider.js";
import Buynow from "../components/buynow.js";
import ReactLoading from "react-loading";
import Box from "../Assets/Box.png"
import { Route, Link, BrowserRouter as Router } from "react-router-dom";

class Checkoutcard extends Component {
  render() {
    return (
      <div class="columns legendsBG">
        <div class="column">
          <form class="form-horizontal" >
            <fieldset>

              <legend class="center title is-2">COMPLETE THE CHECK OUT</legend>

              <div class="field">
                <label class="label" for="firstName">First Name:</label>
                <div class="control">
                  <input id="firstName" name="firstName" type="text" class="input " required="" />

                </div>
              </div>

              <div class="field">
                <label class="label" for="lastName">Last Name:</label>
                <div class="control">
                  <input id="lastName" name="lastName" type="text" class="input " required="" />

                </div>
              </div>

              <div class="field">
                <label class="label" for="email">Email:</label>
                <div class="control">
                  <input id="email" name="email" type="text" class="input " required="" />

                </div>
              </div>

              <div class="field">
                <label class="label" for="phoneNumber">Phone Number:</label>
                <div class="control">
                  <input id="phoneNumber" name="phoneNumber" type="text" placeholder="+1(555) 555-5555" class="input " required="" />

                </div>
              </div>

              <div class="field">
                <label class="label" for="textinput-3">Address:</label>
                <div class="control" />
                <input id="textinput-3" name="textinput-3" type="text" class="input " required="" />

              </div>


              <div class="field">
                <label class="label" for="state">State:</label>
                <div class="control">
                  <input id="state" name="state" type="text" class="input " required="" />

                </div>
              </div>

              <div class="field">
                <label class="label" for="zipCode">Zip Code:</label>
                <div class="control">
                  <input id="zipCode" name="zipCode" type="text" class="input " required="" />

                </div>
              </div>

              <div class="field">
                <label class="label" for="cardHolder">Credit Card Holder:</label>
                <div class="control">
                  <input id="cardHolder" name="cardHolder" type="text" class="input " />

                </div>
              </div>

              <div class="field">
                <label class="label" for="cardNumber">Credit Card Number:</label>
                <div class="control">
                  <input id="cardNumber" name="cardNumber" type="text" class="input " required="" />

                </div>
              </div>


              <div class="field">
                <label class="label" for="billingAddress">Billing Address:</label>
                <div class="control">
                  <input id="billingAddress" name="billingAddress" type="text" class="input " />

                </div>
              </div>


              <div class="field">
                <label class="label" for="CardZipCode">Zip Code:</label>
                <div class="control">
                  <input id="CardZipCode" name="CardZipCode" type="text" class="input " required="" />

                </div>
              </div>


              <div class="field">
                <label class="label" for="">Subscription:</label>
                <div class="control">
                  <label class="radio inline" for="multipleradiosinline-0-0">
                    <input type="radio" name="multipleradiosinline-0" id="multipleradiosinline-0-0" value="BiWeekly" checked="checked" required="required" />
                    BiWeekly
    </label>
                  <label class="radio inline" for="multipleradiosinline-0-1">
                    <input type="radio" name="multipleradiosinline-0" id="multipleradiosinline-0-1" value="Monthly" required="required" />
                    Monthly
    </label>
                  <label class="radio inline" for="multipleradiosinline-0-2">
                    <input type="radio" name="multipleradiosinline-0" id="multipleradiosinline-0-2" value="2 Months" required="required" />
                    2 Months
    </label>
                </div>
              </div>

              <div>
                <img src="https://www.woppu.com/wp-content/uploads/2018/09/safe-checkout-800x257.png"></img>
              </div>



              <div class="field">
                <label class="label" for="submit"></label>
                <div class="control center">
                  <button id="submit" name="submit" class="button is-danger center">SUBMIT</button>
                </div>
              </div>

            </fieldset>
          </form>

        </div>
        <div class="column center">
          <img src={Box}></img>
        </div>
      </div >
    );
  }
}

export default Checkoutcard;
