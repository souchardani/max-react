import { Button } from "@/components/ui/button";

function Aside({ projects, setActiveProject, setAddingNewProject }) {
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
    <aside className="aside">
      <h2>Your projects</h2>
      <div className="grid">
        <Button className="my" onClick={handleAddProject}>
          Add Project
        </Button>
      </div>
      <div>
        {projects && projects.length > 0
          ? projects.map((project, index) => (
              <>
                <div
                  id="projects-aside"
                  onClick={(e) => handleClick(index)}
                  key={project.name}
                >
                  {project.name}
                </div>
                <hr />
              </>
            ))
          : "you have no proyects yet"}
      </div>
    </aside>
  );
}

export default Aside;
