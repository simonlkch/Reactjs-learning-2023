import { useState } from 'react'
export default function NewTask({ onAdd }) {
  const [enteredTask,setEnteredTask] = useState('')

  const handleTaskChange = (e) => {
    setEnteredTask(e.target.value)
  }

  const handleAddTask = () => {
    if (enteredTask === undefined || enteredTask==='')
      return
    onAdd(enteredTask)
    console.log('hit')
    setEnteredTask('')
  }

  return (
    <section className="flex items-center gap-4">
      <input type="text" className="w-64 px-2 py-1 rounded-sm bg-stone-200" onChange={handleTaskChange} value={enteredTask}/>
      <button className="w-64 px-2 py-1 rounded-sm bg-stone-200" onClick={handleAddTask}>Add</button>
    </section>
  )
}