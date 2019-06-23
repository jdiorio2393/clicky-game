import React from "react";
import "./Header.css";

const Header = props => (
  <div className="header">
    <div className="title">{props.children}</div>
    <div className="score">Score: {props.score}</div>
    <div className="highscore">Highscore: {props.high_score}</div>
  </div>
);

export default Header;
