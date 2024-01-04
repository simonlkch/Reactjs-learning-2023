import { useState } from "react"

export default function Player({ name, symbol, isActive }) {
  let [isEditing, setIsEditing] = useState(false)
  let [editedPlayerName, setEditedPlayerName] = useState(name)// default value
  const onClickEdit = () => {
    
    // there have 3 ways to swtich the button
    // 1 and 2 ways is pass by value, not recomment, cause it depend the previous state
    // 1. setIsEditing(isEditing ? false : true)
    // 2. setIsEditing(!isEditing)
    // Recommend, pass by function, it pass guaranteed lastest state value
    // 3. setIsEditing(isEditing => !isEditing)
    setIsEditing(isEditing => !isEditing)
    // setEditedPlayerName()
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