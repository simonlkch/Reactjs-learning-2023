import NewTask from "./NewTask.jsx"

export default function Tasks({ tasks, onAdd, onDelete,selectedProjectId  }) {
  const filteredTasks = tasks.filter(task => task.projectId === selectedProjectId)
  return (
    <section>
      <h2 className="text-xl font-bold">Tasks</h2>
      <p>Total tasks: {filteredTasks.length}</p>
      {filteredTasks.length === 0 && <p>This project does not have any tasks yet</p>}

      {filteredTasks.length > 0 &&
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {filteredTasks.map((task) => (
            
            <li key={task.id} className="flex justify-between my-4">
              <span>{task.text}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      }


      <NewTask onAdd={onAdd} />
    </section>
  )
}