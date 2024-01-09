import { useState,useRef } from "react";

export default function Player() {
  const playerNameRef = useRef()
  const [playerName,setPlayerName] = useState()

  const handleSetName = () => {
    setPlayerName(playerNameRef.current.value)
    // just like get element by id usage
    playerNameRef.current.value = ''
  }

  return (
    <section id="player">
      <h2>Welcome {playerName} entity</h2>
      <p>
        <input type="text" ref={playerNameRef}/>
        <button onClick={handleSetName}>Set Name</button>
      </p>
    </section>
  );
}
