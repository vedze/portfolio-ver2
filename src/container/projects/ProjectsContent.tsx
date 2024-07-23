import styles from "@/styles/projects/projectscontent.module.css";
import { projects } from "@/data/project";

export default function ProjectsContent() {
  return (
    <div>
      {projects.map((project, i) => (
        <div key={i}>
          <h2>{project.type}</h2>
          <h1>{project.title}</h1>
          <p>{project.date}</p>
          <ul>
            {project.summaries.map((summary, i) => (
              <li key={i}>{summary}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}
