export interface ProjectType {
  title: string;
  status?: string;
  about: {
    type: string;
    date?: string;
    member?: string;
  };
  skills: string[];
  details: string[];
  links?: string[];
}

export const projects: ProjectType[] = [
  {
    title: "개인 포트폴리오",
    status: "(현재 사이트)",
    about: {
      type: "개인 프로젝트",
      date: "2024.06 - 진행중",
    },
    skills: ["React", "TypeScript", "NextJS", "Module CSS"],
    details: [
      "나만의 포트폴리오를 갖기 위해 제작",
      "nodemailer를 이용한 메일링 기능",
      "clipboard API를 이용한 복사 기능",
    ],
    links: ["Github Link"],
  },
  {
    title: "감정 일기장",
    about: {
      type: "개인 프로젝트",
      date: "2024.05",
    },
    skills: ["React", "JavaScript"],
    details: ["감정과 함께 기록할 수 있는 일기장 프로젝트"],
    links: ["Github Link"],
  },
  {
    title: "TEAM PORTFOLIO",
    status: "(배포 중단)",
    about: {
      type: "팀 프로젝트",
      date: "2024.03 - 2024.04",
      member: "프론트엔드 3명, 백엔드 1명",
    },
    skills: [
      "React",
      "TypeScript",
      "Styled-components",
      "Swagger API",
      "POSTMAN",
    ],
    details: [
      "누구나 열람하고 게시할 수 있는 포트폴리오 사이트",
      "중도 참여하여 유저별 프로젝트 페이지 제작",
    ],
    links: ["Github Link"],
  },
  // {
  //   type: "개인 프로젝트",
  //   title: "개인 포트폴리오 사이트",
  //   date: "2024.06.25 - 진행중",
  //   summaries: [
  //     "개인 포트폴리오 제작 프로젝트입니다.",
  //     "포트폴리오 summary 1",
  //     "포트폴리오 summary 2",
  //   ],
  //   skills: ["React", "TypeScript", "NextJS"],
  //   links: ["github link"],
  //   imgs: ["/images/projects/portfolio-1.jpg"],
  // },
  // {
  //   type: "팀 프로젝트",
  //   title: "Team Portfolio",
  //   date: "2024.03.20 - 2024.04.18",
  //   summaries: ["누구나 이용할 수 있는 공유 포트폴리오 사이트 프로젝트입니다."],
  //   skills: ["React", "TypeScript"],
  //   // links: ["https://github.com/Plain-Portfolio/portfolio_front"],
  //   imgs: ["/images/projects/team-portfolio-1.jpg"],
  // },
];
