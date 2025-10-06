import Aside from "./components/Aside";
import Project from "./components/Project";
import NewProject from "./components/NewProject";
import { useContext } from "react";
import { MainContext } from "./store/main-context";
import "./index.css";

export interface User {
  isSubscribed: Boolean;
  name: String;
}

function App() {
  const mainCtx = useContext(MainContext);
  return (
    <div className="container">
      <section>
        <header>
          <h1>Project Manager</h1>
        </header>
      </section>

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
              <h2>select a project</h2>
            </div>
          )
        ) : (
          <NewProject />
        )}
      </div>
    </div>
  );
}
export default App;
