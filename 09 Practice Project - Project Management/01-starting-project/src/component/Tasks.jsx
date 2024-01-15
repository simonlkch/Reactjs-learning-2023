import NewTask from "./NewTask.jsx"

export default function Tasks({ tasks, onAdd, onDelete }) {
  return (
    <section>
      <h2 className="text-xl font-bold">Tasks</h2>
      <p>Total tasks: {tasks.length}</p>
      {tasks.length === 0 && <p>This project does not have any tasks yet</p>}

      {tasks.length > 0 &&
        <ul className="p-4 mt-8 rounded-md bg-stone-100">
          {tasks.map((task, index) => (
            <li key={index} className="flex justify-between my-4">
              <span>{task}</span>
              <button
                className="text-stone-700 hover:text-red-500"
                onClick={() => onDelete(task)}>
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