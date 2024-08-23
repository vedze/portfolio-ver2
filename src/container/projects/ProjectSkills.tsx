import styles from "@/styles/projects/projectscontent.module.css";
import { skills } from "@/data/skills";
import { Accordion } from "@/components/Accordion";
import { SlGraph } from "react-icons/sl";

type ProjectSkillsProps = {
  skillIds: number[];
};

export default function ProjectSkills({ skillIds }: ProjectSkillsProps) {
  const filteredSkills = skills.filter((skill) => skillIds.includes(skill.id));

  return (
    <div className={styles.skills}>
      {filteredSkills.map((skill) => (
        // <Accordion name={skill.name} desc={skill.defaultDesc} key={skill.id} />
        <div key={skill.id}>
          <SlGraph />
          {skill.name}
        </div>
      ))}
    </div>
  );
}
