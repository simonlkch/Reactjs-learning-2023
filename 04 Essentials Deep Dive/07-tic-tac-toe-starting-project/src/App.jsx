import { useState } from "react"
import Player from "./components/Player"
import GameBoard from "./components/GameBoard"


function App() {
  const [activePlayer, setActivePlayer] = useState("X")

  const handleSelectSquare = () => {
    setActivePlayer((curActivePlayer) => curActivePlayer === "X" ? "O" : "X" )
    console.log(activePlayer)
  }

  return (
    <div id="game-container">

      <ol id="players" className="highlight-player">
        <Player name="Player 1" symbol="X" isActive={activePlayer === "X"}></Player>
        <Player name="Player 2" symbol="O" isActive={activePlayer === "O"}></Player>
      </ol>
      {/* Lifting State up, pass by function */}
      <GameBoard onSelectSquare={handleSelectSquare} activePlayerSymbol={activePlayer} />
    </div>

  )
}

export default App
