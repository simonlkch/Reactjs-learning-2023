import React from 'react'
import { useState } from "react"
import Tasks from '../component/Tasks.jsx'
import Input from "./Input.jsx"

export default function Projects() {
  const [containProject, setContainProject] = useState(false)
  const [addMode, setAddMode] = useState(true)

  return (
    <div className='w-2/3'>
      {!containProject && !addMode && (
        <>
          <h1>No Project Selected</h1>
          <p>Select a project or get start with new one</p>

          <button>Create new project</button>
        </>
      )}

      {addMode && (
        <>
          <button>Cancel</button>
          <button>Save</button>

          <Input label="Title" />
          <Input label="Description" />
          <Input label="Date" datepicker />
        </>
      )}

      {containProject && (
        <>
          <h1>Title</h1>
          <span>Dec 29, 2024</span>
          <p>Description</p>
          <Tasks />
        </>
      )}




    </div>
  )
}