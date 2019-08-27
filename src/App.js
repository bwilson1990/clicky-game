import React, { Component } from "react";
import Header from "./components/Header/Header";
import Clicker from "./components/Clicker/Clicker"
import Wrapper from "./components/Wrapper/Wrapper"
import clickers from "./clickers.json";

class App extends Component {

  state = {
    clickers,
    score: 0,
    highscore: 0
  };

  clickCount = id => {
    this.state.clickers.find((o, i) => {
      if (o.id === id) {
        if (clickers[i].count === 0) {
          clickers[i].count = clickers[i].count + 1;
          this.setState({ score: this.state.score + 1 });
          this.state.clickers.sort(() => Math.random() - 0.5);
          return true;
        } else {
          this.gameOver();
        }
      }
    });
  };

  gameOver = () => {
    if (this.state.score > this.state.highscore) {
      this.setState({ highscore: this.state.score }, function() {
        console.log(this.state.highscore);
      });
    }
    this.state.clickers.forEach(clicker => {
      clicker.count = 0;
    });
    this.setState({ score: 0 });
    return true;
  };

  render() {
    return (
      <div>
      <Wrapper>
        <h1>
          <Header score={this.state.score} highscore={this.state.highscore}>
            Click on the Images and try to get the High Score!
          </Header>
        </h1>
        {this.state.clickers.map(clicker => (
            <Clicker
            clickCount={this.clickCount}
            id={clicker.id}
            key={clicker.id}
            image={clicker.image}
            />
        ))}
        </Wrapper>
        </div>
    );
  }
}

export default App;