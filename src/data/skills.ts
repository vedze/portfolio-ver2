export interface Skill {
  id: number;
  name: string;
  defaultDesc: string;
}

export const skills: Skill[] = [
  {
    id: 1,
    name: "React",
    defaultDesc: "React 설명입니다.",
  },
  {
    id: 2,
    name: "TypeScript",
    defaultDesc: "TypeScript 설명입니다.",
  },
  {
    id: 3,
    name: "JavaScript",
    defaultDesc: "JavaScript 설명입니다.",
  },
  {
    id: 4,
    name: "NextJS",
    defaultDesc: "NextJS 설명입니다.",
  },
  {
    id: 5,
    name: "Styled-components",
    defaultDesc: "Styled-components 설명입니다.",
  },
  {
    id: 6,
    name: "Swagger API",
    defaultDesc: "Swagger API 설명입니다.",
  },
  {
    id: 7,
    name: "POSTMAN",
    defaultDesc: "POSTMAN 설명입니다.",
  },
  {
    id: 8,
    name: "Module CSS",
    defaultDesc: "Module CSS 설명입니다.",
  },
];
