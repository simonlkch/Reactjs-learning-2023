import { useState } from "react"

export default function Player({ name, symbol, isActive }) {
  let [isEditing, setIsEditing] = useState(false)
  let [editedPlayerName, setEditedPlayerName] = useState(name)// default value
  const onClickEdit = () => {
    setIsEditing(isEditing => !isEditing)
  }

  const onChangeInput = (e) => {
    setEditedPlayerName(e.target.value)
  }

  const btnCaption = isEditing ? 'Save' : 'Edit'
  const playerDom = isEditing ? 
    <input type="text" required value={editedPlayerName} onChange={onChangeInput}></input> :  
    <span className="player-name">{editedPlayerName}</span>

  return (
    <li className={isActive? 'active': undefined}>
      <span className="player">
        {playerDom}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={onClickEdit}>{btnCaption}</button>
    </li>
  )
}