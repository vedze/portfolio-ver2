"use client";

import styles from "@/styles/projects/projectscontent.module.css";
import { skills } from "@/data/skills";
import { Accodion } from "@/components/Accodion";

type ProjectSkillsProps = {
  skillIds: number[];
};

export default function ProjectSkills({ skillIds }: ProjectSkillsProps) {
  const filteredSkills = skills.filter((skill) => skillIds.includes(skill.id));

  return (
    <div className={styles.skills}>
      {filteredSkills.map((skill) => (
        <Accodion name={skill.name} desc={skill.defaultDesc} key={skill.id} />
      ))}
    </div>
  );
}
