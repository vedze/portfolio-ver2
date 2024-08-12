export interface ProjectType {
  type: string;
  title: string;
  date?: string;
  details: string[];
  skills: number[];
  links?: Link[];
}

interface Link {
  name: string;
  url: string;
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
    ],
    skills: [1, 2, 4],
    links: [
      {
        name: "Github 바로가기",
        url: "https://github.com/vedze/portfolio-ver2",
      },
    ],
  },
  {
    type: "개인 프로젝트",
    title: "감정 일기장",
    date: "2024.05",
    details: ["감정과 함께 기록할 수 있는 일기장 프로젝트"],
    skills: [1, 3],
    links: [
      {
        name: "Github 바로가기",
        url: "https://github.com/vedze/emotional-diary",
      },
    ],
  },
  {
    type: "팀 프로젝트",
    title: "TEAM PORTFOLIO (배포 중단)",
    date: "2024.03 - 2024.04",
    details: [
      "FE 팀원 2명, BE 팀원 1명과 진행한 팀 프로젝트",
      "누구나 열람하고 게시할 수 있는 사이트로, 회원가입, 로그인, 소셜회원가입 및 로그인, 글 게시, 수정, 삭제 기능",
      "중도 참여하여 유저별 프로젝트 페이지 제작",
    ],
    skills: [1, 2, 5, 6, 7],
    links: [
      {
        name: "Github 바로가기",
        url: "https://github.com/Plain-Portfolio/portfolio_front",
      },
    ],
  },
];
