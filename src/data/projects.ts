export interface ProjectType {
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
    type: "개인 프로젝트",
    title: "개인 포트폴리오 (현재 사이트)",
    date: "2024.06 - 진행중",
    details: [
      "개인 프로젝트",
      "나만의 포트폴리오를 갖기 위해 제작",
      "nodemailer를 이용한 메일링 기능",
      "clipboard API를 이용한 복사 기능",
    ],
    skills: [
      { name: "React", desc: "React는 이러이러해서 사용했습니다." },
      { name: "TypeScript", desc: "TS는 이러이러해서 사용했습니다." },
      { name: "NextJS", desc: "NextJS는 이러이러해서 사용했습니다." },
      { name: "Module CSS", desc: "Module CSS는 이러이러해서 사용했습니다." },
    ],
    links: ["Github Link"],
  },
  {
    type: "개인 프로젝트",
    title: "감정 일기장",
    date: "2024.05",
    details: ["감정과 함께 기록할 수 있는 일기장 프로젝트"],
    skills: [
      { name: "React", desc: "React는 이러이러해서 사용했습니다." },
      { name: "JavaScript", desc: "JS는 이러이러해서 사용했습니다." },
    ],
    links: ["Github Link"],
  },
  {
    type: "팀 프로젝트",
    title: "TEAM PORTFOLIO (배포 중단)",
    date: "2024.03 - 2024.04",
    details: [
      "누구나 열람하고 게시할 수 있는 포트폴리오 사이트",
      "중도 참여하여 유저별 프로젝트 페이지 제작",
    ],
    skills: [
      { name: "React", desc: "React는 이러이러해서 사용했습니다." },
      { name: "TypeScript", desc: "TS는 이러이러해서 사용했습니다." },
      {
        name: "Styled-components",
        desc: "Styled-components는 이러이러해서 사용했습니다.",
      },
      { name: "Swagger API", desc: "Swagger API는 이러이러해서 사용했습니다." },
      { name: "POSTMAN", desc: "POSTMAN은 이러이러해서 사용했습니다." },
    ],
    links: ["Github Link"],
  },
];
