import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImagePanel from "./components/Image";

class App extends Component {
  state = {
    options: [
      {
        src: "http://media.guitarcenter.com/is/image/MMGS7/2017-Les-Paul-Standard-T-Electric-Guitar-Honey-Burst/J45014000002000-00-500x500.jpg/",
        alt: "Les Paul Standard Honey Burst"
      },
      {
        src: "http://media.musiciansfriend.com/is/image/MMGS7/FA-135CE-Cutaway-Concert-Acoustic-Electric-Guitar-Natural/H70301000001000-00-500x500.jpg",
        alt: "Cutaway Concert Acoustic Electric"
      },
      {
        src: "https://www.dawsons.co.uk/media/catalog/product/cache/1/image/1200x/6b9ffbf72458f4fd2d3cb995d92e8889/y/a/yamaha_f310_acoustic_guitar_-_natural_-_main.jpg",
        alt: "yamaha f310"
      }
    ],
    idClicked: [],
    score: 0
  };

  click = id => {
    let arr = this.state.idClicked;
    if (this.state.idClicked.length === 0) {
      let newScore = this.state.score + 1;
      arr.push(id);
      this.setState({
        score: newScore,
        idClicked: arr
      });
    } else {
      let j = 0;
      console.log(id);
      console.log(this.state.idClicked);
      for (var i = 0; i < this.state.idClicked.length; i++) {
        if (this.state.idClicked[i] === id) {
          j++;
        };
        if (i === this.state.idClicked.length - 1) {
          if (j === 0) {
            let newScore = this.state.score + 1;
            arr.push(id);
            this.setState({
              score: newScore,
              idClicked: arr
            });
          } else {
            console.log("loss")
          };
        };
      };
    };
  };

  render() {
    return (
      <div className="container">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1 className="display-4">Clicky Game</h1>
            <p className="lead">Click each of the images to earn points. But be warned... clicking an image more than once means you lose</p>
            <p>Score: {this.state.score}</p>
          </div>
        </div>
        <div className="row">
        </div>
      </div>
    );
  }
}

export default App;
