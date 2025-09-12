import { projects as originPrjects } from "./utils/projects";
import { useState } from "react";
import Aside from "./components/aside";
import Project from "./components/Project";
import Title2 from "./components/ui/Title2";
import NewProject from "./components/NewProject";

function App() {
  let [projects, setProjects] = useState(originPrjects);
  let [activeProject, setActiveProject] = useState(false);
  let [addingNewProject, setAddingNewProject] = useState(false);

  return (
    <>
      <h1 className="my-6 text-center text-5xl font-bold">Project Manager</h1>
      <div className="bg-slate-300 flex my-4 mx-8 min-h-lvh shadow-xl rounded-2xl">
        {/* aside section */}
        <Aside
          projects={projects}
          setAddingNewProject={setAddingNewProject}
          setActiveProject={setActiveProject}
        />
        {/* project section */}

        {!addingNewProject ? (
          activeProject ? (
            <div className="w-4/6">
              <Project
                project={activeProject}
                setProjects={setProjects}
                setActiveProject={setActiveProject}
              />
            </div>
          ) : (
            <div className="text-center w-4/6">
              <Title2 className="p-12 text-center">select a project</Title2>
            </div>
          )
        ) : (
          <NewProject
            setAddingNewProject={setAddingNewProject}
            setProjects={setProjects}
            setActiveProject={setActiveProject}
          />
        )}
      </div>
    </>
  );
}

export default App;
