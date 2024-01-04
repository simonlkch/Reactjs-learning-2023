import { useState } from "react"

const initialGameBoard = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export default function GameBoard() {
  const [gameBoard, setGameBoard] = useState(initialGameBoard)

  const handleSeIectSquare = (rowIndex, colIndex) => {
    // try to copy the gameboard, not reference the existing gameboard
    console.log(`Click: x:${rowIndex} y:${colIndex}`)
    setGameBoard( (prevGameBoard) => {
      // clone array
      const updatedBoard = [...prevGameBoard.map(innerArray => [...innerArray])]
      console.log(updatedBoard)
      updatedBoard[rowIndex][colIndex] = "X"

      return updatedBoard
    })
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
          {row.map((col, colIndex) =>
            <li key={colIndex}>
              <button onClick={() => handleSeIectSquare(rowIndex,colIndex)}>
                {col}
              </button>
            </li>
          )}
        </ol>

      </li>)}

    </ol>
  )
}