export interface ProjectType {
  type: string;
  title: string;
  date: string;
  summaries: string[];
  skills: string[];
  links?: string[];
  imgs?: string[];
}

export const projects: ProjectType[] = [
  {
    type: "개인 프로젝트",
    title: "개인 포트폴리오 사이트",
    date: "2024.06.25 - 진행중",
    summaries: [
      "개인 포트폴리오 제작 프로젝트입니다.",
      "포트폴리오 summary 1",
      "포트폴리오 summary 2",
    ],
    skills: ["React", "TypeScript", "NextJS"],
    links: ["github link"],
    imgs: ["/images/projects/portfolio-1.jpg"],
  },
  {
    type: "팀 프로젝트",
    title: "Team Portfolio",
    date: "2024.03.20 - 2024.04.18",
    summaries: ["누구나 이용할 수 있는 공유 포트폴리오 사이트 프로젝트입니다."],
    skills: ["React", "TypeScript"],
    // links: ["https://github.com/Plain-Portfolio/portfolio_front"],
    imgs: ["/images/projects/team-portfolio-1.jpg"],
  },
];
