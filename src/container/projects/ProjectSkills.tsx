import { useState } from "react";
import { skills } from "@/data/skills";
import { SlGraph } from "react-icons/sl";
import { IoIosArrowDown, IoIosArrowBack } from "react-icons/io";

type ProjectSkillsProps = {
  skillIds: number[];
};

export default function ProjectSkills({ skillIds }: ProjectSkillsProps) {
  const filteredSkills = skills.filter((skill) => skillIds.includes(skill.id));

  return (
    <div>
      {filteredSkills.map((skill) => (
        <div key={skill.id}>
          <SlGraph />
          {skill.name}
        </div>
      ))}
    </div>
  );
}
