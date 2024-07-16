import styles from "@/styles/projects/projectscontent.module.css";
import { projects } from "@/data/project";

export default function ProjectsContent() {
  return (
    <div className={styles.projectsContent}>
      <h3>테스트 해봅니다~</h3>
      {projects.map((project, i) => (
        <div key={i}>
          <div>{project.type}</div>
          <div>{project.title}</div>
          <div>{project.date}</div>
          <div>{project.summaries}</div>
        </div>
      ))}
    </div>
  );
}
