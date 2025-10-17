import Title2 from "./ui/Title2";
import { Button } from "@/components/ui/button";
import { IconFolderPlus } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { MainContext } from "../store/main-context";
import { useContext } from "react";

function NewProject() {
  const ctx = useContext(MainContext);

  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleCancel() {
    ctx.setAddingNewProject((old) => false);
  }

  function handleCreateProject() {
    let newProject = {
      name: title,
      description,
      date: date && date.toLocaleDateString("sv-SE"),
      tasks: [],
    };

    ctx.setProjects((oldProjects) => [...oldProjects, newProject]);
    ctx.setActiveProject((old) => {
      return newProject;
    });
    console.log(newProject);
    ctx.setAddingNewProject((old) => false);
  }
  return (
    <div>
      <header>
        <Title2>Add new Project</Title2>
        <div>
          <Button onClick={handleCancel}>Cancel</Button>
          <Button onClick={handleCreateProject}>Add project</Button>
        </div>
      </header>
      <form>
        <fieldset>
          <legend>add a new project</legend>
          <div>
            <Label htmlFor="title">Title</Label>
            <Input
              type="text"
              id="title"
              placeholder="Enter the title."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="message">Description</Label>
            <Textarea
              placeholder="Type the description here."
              id="message"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="date">Due Date</Label>
            <input
              type="date"
              selected={date}
              value={date ? date.toISOString().split("T")[0] : ""}
              onChange={(e) => setDate(new Date(e.target.value))}
            />
          </div>
        </fieldset>
      </form>
    </div>
  );
}

export default NewProject;
