import React from "react";
import { useTicTacToe } from "./hooks/useTicTacToe";
import { useState } from "react";
import './Game.scss';

export default function Game() {
  const {
    board,
    winner,
    isGameOver,
    handleClick,
    resetGame,
    status, 
  } = useTicTacToe();

  const [isDark, setIsDark] = useState(false);

  return (
    <div className={`game ${isDark ? 'game--dark' : ''}`}>
      <div className="theme-toggle" onClick={() => setIsDark(!isDark)}>
        <div className="theme-toggle__circle"></div>
      </div>
      <h1 className="game__title">Tic Tac Toe</h1>
      <div className={`game__status ${isGameOver ? 'game__status--game-over' : ''}`}> 
        { status}
      </div>
      <div className="game__board">
        {board.map((cell, index) => (
          <button
            key={index}
            className={`game__cell ${cell ? `game__cell--${cell}` : ''}`}
            onClick={() => handleClick(index)}
            disabled={isGameOver || cell}
          >
            {cell}
          </button>
        ))}
      </div>

      <button className="game__reset-button" onClick={resetGame}>Restart Game</button>
    </div> 
  );
}
