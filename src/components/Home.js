import React, { Component } from "react";
import "bulma/css/bulma.css";
import "../App.css";
import Hero from "../components/hero.js";
import Threecol from "../components/threecol.js";
import Slider from "../components/slider.js";
import Buynow from "../components/buynow.js";
import ReactLoading from "react-loading";
import Modal from "../components/modal.js"



// var imgSrc = [];

//var character = character => {
//  marvel.characters
//    .findNameStartsWith(character)
//    .then(function(res) {
//      console.log(res.data);
//      console.log("found character " + res.data[0].name);
//      console.log(res.data[0].thumbnail.path + ".jpg");
//    })
//    .fail(console.error)
//    .done();
//};

//character("black panther")

class Home extends Component {

  state = { show: false };

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };
  //  constructor(props) {
  //    super(props);
  //    this.state = {
  //      value: "",
  //      cards: []
  //
  //    };
  //
  //    this.handleChange = this.handleChange.bind(this);
  //    this.handleSubmit = this.handleSubmit.bind(this);
  //  }
  //
  //  handleChange(event) {
  //    this.setState({ value: event.target.value });
  //  }
  //
  //  handleSubmit(event) {
  //    //alert('A name was submitted: ' + this.state.value);
  //
  //    marvel.characters
  //      .findNameStartsWith(this.state.value)
  //      .then((res) => {
  //        console.log(res.data)
  //        this.setState({cards:res.data})
  //        // for (var i=0; i < res.data.length; i++){
  //        //   var name = res.data[i].name
  //        //   var thumb = res.data[i].thumbnail.path + ".jpg"
  //        //   var bio = res.data[i].description
  //        //   //console.log(res.data[i])
  //        //   console.log(name)
  //        //   console.log(thumb)
  //        //   console.log(bio)
  //        //   // console.log("----------- ", this.state)
  //        //   this.state.cards.push({img: thumb});
  //        //   // imgSrc.push({name: thumb})
  //        //   // console.log("=========== ", this.state)
  //        // }
  //        //console.log(res.data);
  //        //console.log("found character " + res.data[0].name);
  //        //console.log(res.data[0].thumbnail.path + ".jpg");
  //      })
  //      .fail(console.error)
  //      .done();
  //    event.preventDefault();
  //    // this.setState({cards: i  mgSrc})
  //  }
  //
  //  showCards = () => {
  //    console.log(">>>>>>>>>>>>>> ", this.state)
  //
  //    return this.state.cards.map(card=> <Card bio={card.description} img={card.thumbnail.path + '.' + card.thumbnail.extension} name={card.name} wiki={card.urls[1].url}></Card>) //<Card {name}/>//this.state.cards.map(card=>card.name)
  //  }
  //
  render() {
    return (
      <div class="homecontent">
        <Hero />
        <Threecol />
        <Slider />
        <Buynow />

        
        <Modal show={this.state.show} handleClose={this.hideModal}>
          <p>Modal</p>
          <p>Data</p>
        </Modal>
  
      </div>
    );
  }
}

export default Home;
