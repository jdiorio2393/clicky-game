import React, { Component } from "react";
import Card from "./components/Card";
import Wrapper from "./components/Wrapper";
import Header from "./components/Header";
import game_cards from "./game_cards.json";
import "./App.css";

class App extends Component { 
  state = {
    game_cards,
    score: 0,
    high_score: 0
  };

  // Managing clickCount via state
  clickCount = id => {
    this.state.game_cards.find((chosenCard, i) => {
      if (chosenCard.id === id) {
        if(game_cards[i].count === 0){
          game_cards[i].count = game_cards[i].count + 1;
          this.setState(
            {score : this.state.score + 1}, () => {
            // console.log(this.state.score);
            // console.log(this.state)
          });
          this.state.game_cards.sort(() => Math.random() - 0.5)
          return true; 
        } 
        else {
          this.userLosesGame();
        }
      }
    });
  }

  // Loss condition set
  userLosesGame = () => {
    if (this.state.score > this.state.high_score) {
      this.setState({high_score: this.state.score}, () => {
        // console.log(this.state.high_score);
        // console.log(this.state.score)
      });
    }
    this.state.game_cards.forEach(card => {
      card.count = 0;
    });
    alert(`YOU LOSE!! \nscore: ${this.state.score}`);
    this.setState({score: 0});
    return true;
  }
  
  render() {
    return (
      <Wrapper>
        <Header score={this.state.score} high_score={this.state.high_score}>Clicky Game Homework</Header>
        {this.state.game_cards.map(card => (
          <Card
            clickCount={this.clickCount}
            id={card.id}
            key={card.id}
            image={card.image}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
