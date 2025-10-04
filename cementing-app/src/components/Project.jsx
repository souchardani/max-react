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
      <h2 className="py-2">{project.name}</h2>
      <button onClick={handleDelete}>delete</button>
      <p className="text-muted-foreground text-sm ">{project.date}</p>
      {/* description */}
      <p className="py-8">{project.description}</p>
      <div className="h-px w-full  bg-gray-500"></div>

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
