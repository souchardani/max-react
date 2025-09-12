import Title2 from "./ui/Title2";
import { Button } from "@/components/ui/button";
import { IconTrashX } from "@tabler/icons-react";
import Tasks from "./ui/Tasks";

function Project({ project, setProjects, setActiveProject }) {
  function handleDelete() {
    setProjects((oldProjects) =>
      oldProjects.filter((actualProject) => project.name !== actualProject.name)
    );
    setActiveProject(false);
  }

  return (
    <div className="py-12 px-10 relative">
      <Button
        variant="destructive"
        size="icon"
        className="size-8 absolute top-4 right-4"
        onClick={handleDelete}
      >
        <IconTrashX />
      </Button>

      <Title2 className="py-2">{project.name}</Title2>
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
