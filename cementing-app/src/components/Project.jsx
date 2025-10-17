import Tasks from "./ui/Tasks";
import { useContext } from "react";
import { MainContext } from "../store/main-context";

function Project() {
  const mainCtx = useContext(MainContext);

  const {
    activeProject: project,
    setProjects,
    setActiveProject,
  } = mainCtx || {};

  function handleDelete() {
    setProjects((oldProjects) =>
      oldProjects.filter((actualProject) => project.name !== actualProject.name)
    );
    setActiveProject(false);
  }

  return (
    <div>
      <div>
        <h2>{project.name}</h2>
        <button onClick={handleDelete}>delete</button>
      </div>

      <p>{project.date}</p>
      {/* description */}
      <p>{project.description}</p>

      {/* project tasks  */}
      <Tasks
        project={project}
        setProjects={setProjects}
        setActiveProject={setActiveProject}
      />
    </div>
  );
}

export default Project;
