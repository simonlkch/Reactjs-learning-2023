import { useState } from "react";

import ProjectsSideBar from "./component/ProjectsSideBar.jsx";
import NewProject from "./component/NewProject.jsx"
import NoProjectSelected from "./component/NoProjectSelected.jsx";
import SelectedProject from "./component/SelectedProject.jsx";

function App() {
  // null = add new project, undefined = no project
  const [projectsState, setProjectsState] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  })

  const handleAddTask = (task) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: [{
          id: Math.random(),
          text: task,
          projectId: prevState.selectedProjectId
        },
        ...prevState.tasks]
      }
    })

  }

  const handleDeleteTask = (id) => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        tasks: prevState.tasks.filter(task => task.id !== id)
      }
    })
  }

  const handleStartAddProject = () => {
    setProjectsState(prevState => {
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
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      }
    })
  }

  const handleCancelAddProject = () => {
    setProjectsState(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined
      }
    })
  }

  const handleSelectProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }

  const handleDeleteProject = (id) => {
    setProjectsState((prevState) => {
      return {
        ...prevState,
        projects: prevState.projects.filter(project => project.id !== id),
        selectedProjectId: undefined
      }
    })
  }

  let selectedProject = projectsState.projects.find(project => project.id === projectsState.selectedProjectId)



  let content = <SelectedProject
    project={selectedProject}
    onDeleteProject={handleDeleteProject}
    tasks={projectsState.tasks}
    onAddTask={handleAddTask}
    onDeleteTask={handleDeleteTask}
  />;
  if (projectsState.selectedProjectId === null) {
    content = <NewProject onAdd={handleAddProject} onCancel={handleCancelAddProject} />
  } else if (projectsState.selectedProjectId === undefined) {
    content = <NoProjectSelected onStartAddProject={handleStartAddProject} />
  }

  return (
    <main className="h-screen my-2 flex gap-8">
      {/* <h1 className="my-8 text-center text-5xl font-bold">Hello World</h1> */}
      <ProjectsSideBar
        onStartAddProject={handleStartAddProject}
        projects={projectsState.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={projectsState.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;
