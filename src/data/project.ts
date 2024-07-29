export interface ProjectType {
  id: number;
  type: string;
  title: string;
  date?: string;
  details: string[];
  skills: Skill[];
  links?: string[];
}

interface Skill {
  name: string;
  desc: string;
}

export const projects: ProjectType[] = [
  {
    id: 1,
    type: "personal",
    title: "개인 포트폴리오 (현재 사이트)",
    date: "2024.06 - 진행중",
    details: [
      "개인 프로젝트",
      "나만의 포트폴리오를 갖기 위해 제작",
      "nodemailer를 이용한 메일링 기능",
      "clipboard API를 이용한 복사 기능",
    ],
    skills: [
      { name: "React", desc: "React 설명" },
      { name: "TypeScript", desc: "TS 설명" },
      { name: "NextJS", desc: "" },
      { name: "Module CSS", desc: "" },
    ],
    links: ["Github Link"],
  },
  {
    id: 2,
    type: "personal",
    title: "감정 일기장",
    date: "2024.05",
    details: ["감정과 함께 기록할 수 있는 일기장 프로젝트"],
    skills: [
      { name: "React", desc: "React 설명" },
      { name: "JavaScript", desc: "JS 설명" },
    ],
    links: ["Github Link"],
  },
  {
    id: 3,
    type: "team",
    title: "TEAM PORTFOLIO (배포 중단)",
    date: "2024.03 - 2024.04",
    details: [
      "팀 프로젝트 (FE 3명, BE 1명)",
      "누구나 열람하고 게시할 수 있는 포트폴리오 사이트",
      "중도 참여하여 유저별 프로젝트 페이지 제작",
    ],
    skills: [
      { name: "React", desc: "" },
      { name: "TypeScript", desc: "" },
      { name: "Styled-components", desc: "" },
      { name: "Swagger API", desc: "" },
      { name: "POSTMAN", desc: "" },
    ],
    links: ["Github Link"],
  },
];
