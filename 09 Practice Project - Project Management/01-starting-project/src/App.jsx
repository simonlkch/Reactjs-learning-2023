import ProjectsSideBar from "./component/ProjectsSideBar.jsx";
import NewProject from "./component/NewProject.jsx"
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import { useState } from "react";

function App() {
  // null = add new project, undefined = no project
  const [projectsState, setProjectsState] = useState({
    selectedProjectId : undefined,
    projects : []
  })


  const handleStartAddProject = () => {
    setProjectsState(prevState =>{
      return {
        ...prevState,
        selectedProjectId: null
      }
    })
  }

  const handleAddProject = (projectData) => {
    const newProject = {
      ...projectData,
      id: Math.random()
    }
    setProjectsState(prevState =>{
      return{
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  let content
  if (projectsState.selectedProjectId === null){
    content = <NewProject onAdd={handleAddProject}/>
  }else if (projectsState.selectedProjectId ===undefined){
    content = <NoProjectSelected onStartAddProject={handleStartAddProject}/>
  }

  return (
    <main className="h-screen my-2 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjectsSideBar onStartAddProject={handleStartAddProject} projects={projectsState.projects}/>
      {content}
    </main>
  );
}

export default App;
