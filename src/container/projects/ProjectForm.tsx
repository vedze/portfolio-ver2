import styles from "@/styles/projects/projectscontent.module.css";
import { ProjectType } from "@/data/project";
import { FiCheck } from "react-icons/fi";

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  return (
    <div className={styles.projectContainer}>
      <div className={styles.project}>
        <div className={styles.titleSection}>
          <h1>{project.title}</h1>
        </div>
        <div className={styles.summarySection}>
          <h2>Details</h2>
          {project.details.map((detail, i) => (
            <p key={i}>
              <FiCheck style={{ marginRight: "10px" }} />
              {detail}
            </p>
          ))}
        </div>
        <div className={styles.skillSection}>
          <h2>Skills</h2>
          {project.skills.map((skill, idx) => (
            <p key={idx}>{skill}</p>
          ))}
        </div>
        {project.links && project.links.length > 0 && (
          <div className={styles.linkSection}>
            <h2>Link</h2>
            {project.links.map((link, idx) => (
              <p key={idx}>{link}</p>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
