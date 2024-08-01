"use client";

import styles from "@/styles/projects/projectscontent.module.css";
import { ProjectType } from "@/data/projects";
import { FiCheck } from "react-icons/fi";
import { useState } from "react";

interface ProjectProps {
  project: ProjectType;
}

export default function Project({ project }: ProjectProps) {
  const [selectedSkillIdx, setSelectedSkillIdx] = useState<number | null>(null);

  const handleSelect = (idx: number) => {
    setSelectedSkillIdx(idx === selectedSkillIdx ? null : idx);
  };

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
            <div key={i}>
              <p onClick={() => handleSelect(i)}>{skill.name}</p>
              {selectedSkillIdx === i && <p>{skill.desc}</p>}
            </div>
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
