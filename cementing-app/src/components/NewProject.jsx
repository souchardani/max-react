import Title2 from "./ui/Title2";
import { Button } from "@/components/ui/button";
import { IconFolderPlus } from "@tabler/icons-react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";

function NewProject({ setAddingNewProject, setProjects, setActiveProject }) {
  const [open, setOpen] = useState(false);
  const [date, setDate] = useState(undefined);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  function handleCancel() {
    setAddingNewProject((old) => false);
  }

  function handleCreateProject() {
    let newProject = {
      name: title,
      description,
      date: date.toLocaleDateString("sv-SE"),
      tasks: [],
    };

    setProjects((oldProjects) => [...oldProjects, newProject]);
  }
  return (
    <div>
      <header>
        <Title2>Add new Project</Title2>
        <div className="grid">
          <Button onClick={handleCancel} className="outline">
            Cancel
          </Button>
          <Button onClick={handleCreateProject} variant="secondary" size="sm">
            <IconFolderPlus /> Save
          </Button>
        </div>
      </header>
      <form>
        <fieldset>
          <Label htmlFor="title">Title</Label>
          <Input
            type="text"
            id="title"
            placeholder="Enter the title."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <Label htmlFor="message">Description</Label>
          <Textarea
            className="bg-white"
            placeholder="Type the description here."
            id="message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <Label htmlFor="date" className="px-1">
            Due Date
          </Label>

          <input
            type="date"
            selected={date}
            value={date ? date.toISOString().split("T")[0] : ""}
            onChange={(e) => setDate(new Date(e.target.value))}
          />
        </fieldset>
      </form>
    </div>
  );
}

export default NewProject;
