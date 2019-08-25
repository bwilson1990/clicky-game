import React from 'react';
import Buttons from "./Buttons"

class Clickers extends React.Component {
    state = {
        buttons: {},
        score: 0,
        targetScore: 0
    }


    makeGuess = () => {
        this.SetState({
            score: this.state.score + 1
        })
        if (this.state.score > this.state.targetScore) {
            alert("You Lost!");
            // startGame();
        } else if (this.state.score === this.state.targetScore) {
            alert("You Won!");
            // startGame();
        }
    };

    // startGame = () => {

    // };

    render() {
        return (
            <main className="container">
                <div className="row">
                    {this.state.buttons.slice(0, 12).map(buttons => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={buttons.id} onClick={() => this.handleGuess(buttons.id)}>
                            <Buttons
                                id={buttons.id}
                                name={buttons.name}
                                image={buttons.image}
                            />
                        </div>
                    ))}
                </div>
            </main>
        );
    }
}
export default Clickers;


// const $root = document.querySelector("#root");

// let score;
// let targetScore;

// const makeGuess = () => {
//   const $score = document.querySelector("#root p");
//   $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;

//   if (score > targetScore) {
//     alert("You lost this round!");
//     playRound();
//   } else if (score === targetScore) {
//     alert("You won this round!");
//     playRound();
//   }
// };

// // Constructor Function (does not work with Fat Arror => Functions)
// const Crystal = function(color) {
//   this.element = document.createElement("div");
//   this.element.className = "crystal " + color;
//   this.value = 0;

//   this.element.addEventListener(
//     "click",
//     () => {
//       score += this.value;
//       makeGuess();
//     },
//     false
//   );
// };

// Crystal.prototype.render = function(target) {
//   this.value = Math.floor(Math.random() * 15) + 1;
//   target.appendChild(this.element);
// };

// const crystals = [
//   new Crystal("red"),
//   new Crystal("blue"),
//   new Crystal("green")
// ];

// const playRound = () => {
//   let fragment = document.createDocumentFragment();
//   let $score = document.createElement("p");
//   targetScore = Math.floor(Math.random() * 50) + 25;
//   score = 0;
//   $score.textContent = "Score: " + score + " | " + "Target: " + targetScore;
//   crystals
//     .sort(() => 0.5 - Math.random())
//     .forEach(crystal => crystal.render(fragment));
//   fragment.appendChild($score);
//   $root.innerHTML = "";
//   $root.appendChild(fragment);
// };

// playRound();