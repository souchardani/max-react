import Tasks from "./ui/Tasks";

function Project({ project, setProjects, setActiveProject }) {
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
