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
    <div className="w-4/6 py-12 px-10">
      <header className="flex justify-between items-center">
        <Title2>Add new Project</Title2>
        <div>
          <Button onClick={handleCancel} variant="link">
            Cancel
          </Button>
          <Button onClick={handleCreateProject} variant="secondary" size="sm">
            <IconFolderPlus /> Save
          </Button>
        </div>
      </header>
      <section className="w-2/3 grid gap-12 mt-12">
        <div className="grid gap-3">
          <Label htmlFor="title">Title</Label>
          <Input
            className="w-full bg-white"
            type="text"
            id="title"
            placeholder="Enter the title."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="grid gap-3">
          <Label htmlFor="message">Description</Label>
          <Textarea
            className="bg-white"
            placeholder="Type the description here."
            id="message"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </div>
        {/* datepicker */}
        <div className="flex flex-col gap-3">
          <Label htmlFor="date" className="px-1">
            Due Date
          </Label>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                id="date"
                className="w-48 justify-between font-normal"
              >
                {date ? date.toLocaleDateString() : "Select date"}
                <ChevronDownIcon />
              </Button>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto overflow-hidden p-0"
              align="start"
            >
              <Calendar
                mode="single"
                selected={date}
                captionLayout="dropdown"
                onSelect={(date) => {
                  setDate(date);
                  setOpen(false);
                }}
              />
            </PopoverContent>
          </Popover>
        </div>
      </section>
    </div>
  );
}

export default NewProject;
