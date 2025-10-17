import { Button } from "@/components/ui/button";
import { useMainContext } from "../store/main-context";

function Aside() {
  const { projects, setActiveProject, setAddingNewProject } = useMainContext();

  function handleClick(index) {
    setAddingNewProject((old) => false);
    setActiveProject((old) => {
      return projects[index];
    });
  }

  function handleAddProject() {
    setAddingNewProject((old) => true);
  }

  return (
    <div>
      <h2>Your projects</h2>
      <div>
        <Button onClick={handleAddProject}>Add Project</Button>
      </div>
      <div>
        {projects && projects.length > 0
          ? projects.map((project, index) => (
              <div onClick={(e) => handleClick(index)} key={project.name}>
                {project.name}
              </div>
            ))
          : "you have no proyects yet"}
      </div>
    </div>
  );
}

export default Aside;
