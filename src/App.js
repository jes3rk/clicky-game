import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImagePanel from "./components/Image";

class App extends Component {
  state = {
    idClicked: [],
    score: 0,
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
      },
      {
        src: "http://media.guitarcenter.com/is/image/MMGS7/LTD-Kirk-Hammett-Ouija-Limited-Edition-Electric-Guitar-Gloss-Natural/K36962000001000-00-500x500.jpg",
        alt: "ouija guitar"
      },
      {
        src: "https://cdn.shopify.com/s/files/1/0657/6821/products/1_248d476a-bac9-4e8b-ab41-448c5242fc82_x700.jpg?v=1489761307",
        alt: "Les Paul smokey"
      },
      {
        src: "https://www.artistguitars.com.au/assets/full/12683.jpg",
        alt: "Strat"
      },
      {
        src: "http://media.guitarcenter.com/is/image/MMGS7/Starter-Acoustic-Guitar-Blue-Burst/519266000030000-00-500x500.jpg",
        alt: "Starter acoustic blue"
      },
      {
        src: "http://media.guitarcenter.com/is/image/MMGS7/200-Series-Deluxe-224ce-K-Grand-Auditorium-Acoustic-Electric-Guitar-Shaded-Edge-Burst/J45043000001000-00-500x500.jpg",
        alt: "K Grand Auditorium Acoustic Electric"
      },
      {
        src: "https://www.jbhifi.com.au/FileLibrary/ProductResources/Images/203293-L-LO.jpg",
        alt: "Epiphone SG"
      },
      {
        src: "http://media.musiciansfriend.com/is/image/MMGS7/Les-Paul-Special-I-P90-Electric-Guitar-Worn-Black/H77433000001000-00-500x500.jpg",
        alt: "Black Les Paul"
      },
      {
        src: "http://media.musiciansfriend.com/is/image/MMGS7/ES-339-P90-PRO-Semi-Hollowbody-Electric-Guitar-Cherry/J07390000001000-00-500x500.jpg",
        alt: "Epiphone Hollowbody"
      },
      {
        src: "http://media.guitarcenter.com/is/image/MMGS7/Special-Edition-Deluxe-Ash-Telecaster-Maple-Fretboard-Butterscotch-Blonde/H72859000001001-00-500x500.jpg",
        alt: "Fender Telecaster"
      }
    ]
  };

  click = id => {
    let arr = this.newArray(this.state.idClicked);
    if (this.state.idClicked.length === 0) {
      let newScore = this.state.score + 1;
      arr.push(id.toString());
      this.setState({
        score: newScore,
        idClicked: arr,
      });
    } else {
      let j = 0;
      for (var i = 0; i < this.state.idClicked.length; i++) {
        if (this.state.idClicked[i] === id.toString()) {
          j++;
        };
      };
      if (j === 0) {
        let newScore = this.state.score + 1;
        if (newScore === 12) {
          this.setState({
            score: 0,
            idClicked: []
          });
          alert("You win!");
        } else {
          arr.push(id.toString());
          this.setState({
            score: newScore,
            idClicked: arr,
          });
        };
      } else {
        this.setState({
          score: 0,
          idClicked: []
        });
        alert("You lost, please try again");
      };
    };
    let placeholder = this.newArray(this.state.options)
    let newArr = [];
    while (newArr.length < 12) {
      let rand = Math.floor(Math.random() * placeholder.length);
      newArr.push(placeholder[rand]);
      placeholder.splice(rand, 1);
    };
    this.setState({ options: newArr });
  };

  newArray = arr => {
    let result = [];
    for (var i = 0; i < arr.length; i++) {
      result.push(arr[i]);
    };
    return result;
  };

  addElements = () => {
    return this.state.options.map((element, i) => (
      <div className="col md3" key={i}>
        <ImagePanel
          src={element.src}
          alt={element.alt}
          id={i}
          click={this.click}
        />
      </div>
    ));
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
          {this.addElements()}
        </div>
      </div>
    );
  };
}

export default App;
