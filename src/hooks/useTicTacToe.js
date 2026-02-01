import { useState } from 'react';

const board = [
  2, 2, 2,
  0, 0, 0,
  0, 0, 0, 
]
function calculateWinner(squares) {
  const lines = [
      [0, 1, 2], [0, 3, 6],
      [6, 7, 8], [2, 5, 8], [0, 4, 8], [2, 4, 6], [1, 4, 7], [3, 4, 5]
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines [i];
    console.log('lines', lines);
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export function useTicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);  

  const winner = calculateWinner(board);
  const isDraw = !winner && board.every(cell => cell !== null);
  const isGameOver = !!winner || isDraw;
  const handleClick = (index) => {
    if (board[index] || winner) {
      return;
    }
  
    const newBoard = [...board];
    newBoard[index] = xIsNext ? 'x' : 'o';
    setBoard(newBoard);
    setXIsNext(!xIsNext);
  } 

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setXIsNext(true);
  }
console.log(board);
console.log('winner', winner);  
  let status;
  if (winner) {
    status = `Winner: ${winner}`;
  } else if (isDraw && board.every(cell => cell !== null)) {
    status = "It's a draw!";
  } else {
    status = `Next player: ${xIsNext ? 'x' : 'o'}`;
  }

  return {
    board,
    xIsNext,
    winner,
    isDraw,
    status,
    handleClick,
    resetGame,
    isGameOver
  };
}
