import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"
import Log from "./components/Log.jsx"
import { WINNING_COMBINATIONS } from './winning-combinations.js'


function App() {
  const [activePlayer, setActivePlayer] = useState("X")
  const [gameTurns, setGameTurns] = useState([])

  const handleSelectSquare = (rowIndex, colIndex) => {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X")
    // console.log(activePlayer)

    setGameTurns((prevTurns) => {
      let currentPlayer = "X"

      if (prevTurns.length > 0 && prevTurns[0].player === "X") {
        currentPlayer = "O"
      }

      const updatedTurns = [
        { square: { row: rowIndex, col: colIndex }, player: currentPlayer },
        ...prevTurns,
      ]

      console.log(updatedTurns)
      return updatedTurns
    })
  }

  return (
    <div id="game-container">

      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
        <Player name="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
      </ol>
      {/* Lifting State up, pass by function */}
      <GameBoard onSelectSquare={handleSelectSquare} turns={gameTurns} />
      <Log turns={gameTurns}/>
    </div>

  )
}

export default App
