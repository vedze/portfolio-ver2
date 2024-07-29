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
        <h1>{project.title}</h1>
        <p>{project.date}</p>
      </div>

      <div className={styles.summarySection}>
        <div className={styles.details}>
          {project.details.map((detail, i) => (
            <p key={i}>
              <FiCheck />
              {detail}
            </p>
          ))}
        </div>
        <div className={styles.skills}>
          <h2>사용 스킬</h2>
          {project.skills.map((skill, i) => (
            <p key={i}>{skill.name}</p>
          ))}
        </div>
        <div className={styles.links}>
          <h2>관련 링크</h2>
          {project.links?.map((link, i) => (
            <p key={i}>{link}</p>
          ))}
        </div>
      </div>
    </div>
  );
}
