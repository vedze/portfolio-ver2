import styles from "@/styles/projects/projectscontent.module.css";
import { ProjectType } from "@/data/projects";
import { FiCheck } from "react-icons/fi";
import ProjectSkills from "./ProjectSkills";
import Link from "next/link";

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
          <h2>프로젝트 소개</h2>
          {project.details.map((detail, i) => (
            <p key={i}>
              <FiCheck />
              {detail}
            </p>
          ))}
        </div>
        <div>
          <h2>기술 스택</h2>
          <ProjectSkills skillIds={project.skills} />
        </div>
        <div className={styles.links}>
          <h2>관련 링크</h2>
          {project.links?.map((link, i) => (
            <Link key={i} href={link.url}>
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
