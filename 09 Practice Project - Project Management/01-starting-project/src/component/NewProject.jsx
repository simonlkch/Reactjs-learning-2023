import { useState } from "react"
import Input from "./Input"
import { useRef } from "react"

export default function NewProject({onAdd}) {
  const title = useRef()
  const description = useRef()
  const dueDate = useRef()

  const handleSave = () => {  
    const enteredTitle = title.current.value
    const enteredDesciption = description.current.value
    const enteredDueDate = dueDate.current.value
    onAdd({
      title: enteredTitle,
      description : enteredDesciption,
      dueDate : enteredDueDate
    })
  }

  return (
    <div className="w-[35rem] mt-8">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li><button className="px-2 py-1">Cancel</button></li>
        <li><button onClick={handleSave} className="px-2 py-1 bg-stone-800 text-stone-200 hover:bg-stone-950 rounded-md">Save</button></li>
      </menu>
      <Input type="text" ref={title} label="Title"/>
      <Input type="text" ref={description} label="Description" textarea/>
      <Input type="date" ref={dueDate} label="Date" />
    </div>
  )
}