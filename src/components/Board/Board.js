import React, {useState} from 'react';
import Square from '../Square/Square';
import calculateWinner from '../../utils/calculateWinner';
import checkIfDraw from '../../utils/checkIfDraw';

export default function Board() {
    const [xIsNext, setXIsNext] = useState(true);
    const [squares, setSquares] = useState(Array(9).fill(null));
  
    function handleClick(i) {
      if (calculateWinner(squares) || squares[i]) {
        return;
      }
      const nextSquares = squares.slice();
      if (xIsNext) {
        nextSquares[i] = "X";
      } else {
        nextSquares[i] = "O";
      }
      setSquares(nextSquares);
      setXIsNext(!xIsNext);
    }
  
    const winner = calculateWinner(squares);
    const isDraw = checkIfDraw(squares);
    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else if(isDraw){
      status= "Draw";
    } else {
      status = "Next player: " + (xIsNext ? "X" : "O");
    }
  
    return (
      <>
        <div data-testid="next-player-status" className="status">{status}</div>
        <div data-testid="board-row" className="board-row">
          <Square index={0} value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square index={1} value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square index={2} value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div data-testid="board-row" className="board-row">
          <Square index={3} value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square index={4} value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square index={5} value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div data-testid="board-row" className="board-row">
          <Square index={6} value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square index={7} value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square index={8} value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </>
    );
  }
  
  