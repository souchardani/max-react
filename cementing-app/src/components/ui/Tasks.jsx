import Title2 from "./Title2";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

function Tasks({ project, setProjects, setActiveProject }) {
  let [newTask, setNewTask] = useState("");

  function handleAddTask(e) {
    e.preventDefault();
    //find the project
    //update the property inside project and create a new task list
    let newTasks = [...project.tasks, newTask];
    let newProject = { ...project, tasks: newTasks };
    setProjects((oldArray) =>
      oldArray.map((item) => (item.name == newProject.name ? newProject : item))
    );

    setActiveProject(newProject);
    setNewTask("");
  }

  function handleClearTask(task) {
    let newTaskList = project.tasks.filter((item) => item !== task);
    let newProject = { ...project, tasks: newTaskList };
    setProjects((oldArray) =>
      oldArray.map((item) => (item.name == newProject.name ? newProject : item))
    );
    setActiveProject(newProject);
  }

  return (
    <div>
      <Title2 className="py-3">Tasks</Title2>
      <form
        className="flex w-full max-w-sm items-center gap-2"
        onSubmit={handleAddTask}
      >
        <Input
          placeholder="Add a task"
          className=" bg-white"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <Button variant="outline" type="submit">
          Add
        </Button>
      </form>
      <div className="shadow-lg rounded-lg my-8 p-4">
        {project.tasks && project.tasks.length > 0 ? (
          project.tasks.map((task) => (
            <section className="grid" key={task}>
              {task}
              <Button
                className="contrast"
                onClick={(e) => handleClearTask(task)}
              >
                Clear
              </Button>
            </section>
          ))
        ) : (
          <p>This project have no tasks.</p>
        )}
      </div>
    </div>
  );
}

export default Tasks;
