import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ImagePanel from "./components/Image";

class App extends Component {
  state = {
    idClicked: [],
    score: 0
  }

  click = id => {
    if (this.state.idClicked.length === 0) {
      let newScore = this.state.score + 1;
      this.setState({
        score: newScore
      });
    } else {
      let j = 0;
      for (var i = 0; i < this.state.idClicked.length; i++) {
        if (this.state.idClicked[i] === id) {
          j++;
        };
        if (i === this.state.idClicked.length - 1 && j === 0) {
          let newScore = this.state.score + 1;
          this.setState({
            score: newScore,
            idClicked: this.state.idClicked.push(id)
          });
        };
      };
    };
  }

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
        <ImagePanel src="http://media.guitarcenter.com/is/image/MMGS7/2017-Les-Paul-Standard-T-Electric-Guitar-Honey-Burst/J45014000002000-00-500x500.jpg/" id="1" alt="Les Paul Standard Guitar" click={this.click}/>
      </div>
    );
  }
}

export default App;
