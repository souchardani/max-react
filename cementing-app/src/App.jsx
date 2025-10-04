import Aside from "./components/Aside";
import Project from "./components/Project";
import Title2 from "./components/ui/Title2";
import NewProject from "./components/NewProject";
import MainContextProvider from "./store/main-context";
import { useContext } from "react";
import { MainContext } from "./store/main-context";
import "./index.css";

function App() {
  const mainCtx = useContext(MainContext);
  return (
    <div className="container">
      <header>
        <h1>Project Manager</h1>
      </header>

      <div>
        <Aside
          projects={mainCtx.projects}
          setAddingNewProject={mainCtx.setAddingNewProject}
          setActiveProject={mainCtx.setActiveProject}
        />

        {!mainCtx.addingNewProject ? (
          mainCtx.activeProject ? (
            <div>
              <Project
                project={mainCtx.activeProject}
                setProjects={mainCtx.setProjects}
                setActiveProject={mainCtx.setActiveProject}
              />
            </div>
          ) : (
            <div>
              <Title2>select a project</Title2>
            </div>
          )
        ) : (
          <NewProject
            setAddingNewProject={mainCtx.setAddingNewProject}
            setProjects={mainCtx.setProjects}
            setActiveProject={mainCtx.setActiveProject}
          />
        )}
      </div>
    </div>
  );
}

export default App;
