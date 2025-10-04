import { createContext } from "react";
import { useState } from "react";
import { projects as originPrjects } from "../utils/projects";

export const MainContext = createContext({
  projects: [],
  setProjects: () => {},
  activeProject: false,
  setActiveProject: () => {},
  addingNewProject: [],
  setAddingNewProject: () => {},
});

export default function MainContextProvider({ children }) {
  let [projects, setProjects] = useState(originPrjects);
  let [activeProject, setActiveProject] = useState(false);
  let [addingNewProject, setAddingNewProject] = useState(false);

  const ctxValues = {
    projects: projects,
    setProjects: setProjects,
    activeProject: activeProject,
    setActiveProject: setActiveProject,
    addingNewProject: addingNewProject,
    setAddingNewProject: setAddingNewProject,
  };

  return (
    <MainContext.Provider value={ctxValues}>{children}</MainContext.Provider>
  );
}
