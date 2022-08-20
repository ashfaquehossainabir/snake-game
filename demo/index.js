import React from 'react';
import ReactDOM from 'react-dom';
import SnakeGame from '../src/SnakeGame.jsx'
import './index.css'

ReactDOM.render(
  <React.StrictMode>
    <h1>react-simple-snake</h1>
    <div className="textWrapper">
      <p className="subTitle">
        Made By A.H. Abir
        <a href="https://facebook.com/ashfaquehossain.abir" target="_blank" rel="noopener noreferrer">Facebook</a> -
        <a href="https://github.com/Abirett" target="_blank" rel="noopener noreferrer"> Github</a>
      </p>
      <p id="instructions">Use the arrow keys or W/A/S/D to play</p>
      <p className="subTitle">A simple snake game created with the
      <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer"> React </a>
      JavaScript library</p>
    </div>
    <SnakeGame />
  </React.StrictMode>,
  document.getElementById('root')
);
