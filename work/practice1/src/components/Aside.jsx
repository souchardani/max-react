import { Button } from "@/components/ui/button";
import { IconPlus } from "@tabler/icons-react";
import Title2 from "./ui/Title2.jsx";

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
    <aside className="w-2/6 min-h-lvh bg-blue-300 rounded-2xl flex flex-col items-center">
      <Title2 className="py-6 px-2">Your projects</Title2>
      <Button variant="secondary" size="sm" onClick={handleAddProject}>
        <IconPlus /> New Project
      </Button>
      {/* projects list */}
      <div className="my-12">
        {projects && projects.length > 0
          ? projects.map((project, index) => (
              <div
                onClick={(e) => handleClick(index)}
                className="cursor-pointer p-1 border-b border-b-blue-800 my-2 hover:bg-blue-400 rounded"
                key={project.name}
              >
                {project.name}
              </div>
            ))
          : "you have no proyects yet"}
      </div>
    </aside>
  );
}

export default Aside;
