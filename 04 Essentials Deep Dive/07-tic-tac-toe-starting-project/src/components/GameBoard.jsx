import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

// Lifting State up, pass by function
export default function GameBoard({ onSelectSquare, turns }) {
  let gameBoard = initialGameBoard;

  // for, use of, not in
  for (const turn of turns) {
    // use {}, not []
    const { square, player } = turn;
    const { row, col } = square;
    gameBoard[row][col] = player;
  }
  return (
    <ol id="game-board">

      {/* <li>
        <ol>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </li> */}

      {gameBoard.map((row, rowIndex) => <li key={rowIndex}>
        <ol>
          {row.map((playerSymbol, colIndex) =>
            <li key={colIndex}>
              <button onClick={() => onSelectSquare(rowIndex, colIndex)} disabled={playerSymbol!==null}>
                {playerSymbol}
              </button>
            </li>
          )}
        </ol>

      </li>)}

    </ol>
  )
}