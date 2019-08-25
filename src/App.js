import React from 'react';
import Header from "./components/Header";
import Clickers from "./components/CrystalClicker"
import "./style.css";

class App extends React.Component {

  constructor(props) { 
    super(props);
    this.state = {
      scoreFromChild: null, 
      topScoreFromChild: null, 
      messageFromChild: null 
    };
  };

  myCallback = (scoreData) => {
    this.setState({ 
      scoreFromChild: scoreData.scoreFromChild,
      topScoreFromChild: scoreData.topScoreFromChild,
      messageFromChild: scoreData.messageFromChild
      });
  };

  render() {
    return (
        <div>
            <Header />
            <Clickers />

      </div>
    )
  }
}

export default App;