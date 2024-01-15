import React from "react"


export default function ProjectsSideBar({
  onStartAddProject,
  projects,
  onSelectProject,
  selectedProjectId
}) {
  return (
    <aside className="w-1/3 px-8 py-8 bg-stone-700 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className=" mb-8 font-bold uppercase md:text-xl text-stone-200">Your Projects</h2>
      <div>
        <button type="button"
          className=" px-4 py-2 text-xs md:text-base rounded-md bg-stone-500 text-stone-100 hover:bg-stone-600"
          onClick={onStartAddProject}>+ You Project</button>
      </div>
      <menu>
        <ul className=" ml-8 my-2 ">
          {projects.map((project) => {
            let cssClass = "w-full text-left px-2 py-1 rounded-sm my-1 first-letter:uppercase"
            
            if (project.id === selectedProjectId) {
              cssClass += " bg-stone-800 text-stone-200"
            }else{
              cssClass += " text-stone-400"
            }


            return (
              <li key={project.id} className="normal-case">
                <button className={cssClass} onClick={()=> onSelectProject(project.id)}>{project.title}</button>
              </li>
            )
          }
          )}
        </ul>
      </menu>
    </aside>
  )
}