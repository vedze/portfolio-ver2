import { projects } from "@/data/project";
import Project from "./ProjectForm";

export default function ProjectsContent() {
  return (
    <div>
      {projects.map((project, i) => (
        <div key={i}>
          <Project project={project} />
        </div>
      ))}
    </div>
  );
}
