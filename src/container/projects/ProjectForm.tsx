import styles from "@/styles/projects/projectscontent.module.css";
import { ProjectType } from "@/data/project";
import { FiCheck } from "react-icons/fi";

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className={styles.project}>
      <div className={styles.titleSection}>
        <p>{project.type}</p>
        <h1>{project.title}</h1>
        <time>{project.date}</time>
      </div>
      <div className={styles.summarySection}>
        {project.summaries.map((summary, i) => (
          <p key={i}>
            <FiCheck style={{ marginRight: "10px" }} />
            {summary}
          </p>
        ))}
      </div>
      <div className={styles.skillSection}>
        <h2>사용 기술</h2>
        {project.skills.map((skill, idx) => (
          <p key={idx}>{skill}</p>
        ))}
      </div>
      {project.links && project.links.length > 0 && (
        <div className={styles.linkSection}>
          <h2>링크</h2>
          {project.links.map((link, idx) => (
            <p key={idx}>{link}</p>
          ))}
        </div>
      )}
    </div>
  );
}
