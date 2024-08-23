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
    title: "이지은 | 포트폴리오 (현재 사이트)",
    date: "2024.07 - 진행중",
    details: [
      "나를 담은 포트폴리오를 만들기 위해 제작",
      "폴더 구조화와 컴포넌트 분리에 중점을 둠",
      "API routes와 nodemailer 모듈을 활용한 메일링 기능",
      "모바일 반응형 화면",
    ],
    skills: [1, 2, 4],
    links: [
      {
        name: "Github Repository",
        url: "https://github.com/vedze/portfolio-ver2",
      },
    ],
  },
  {
    type: "개인 프로젝트",
    title: "감정 일기장",
    date: "2024.05",
    details: [
      "감정과 함께 기록할 수 있는 일기장 프로젝트",
      "일기 게시, 수정, 삭제 및 월별 조회 기능",
      "메모이제이션과 콜백, Context를 활용한 최적화 진행",
      "Open Graph 적용하여 링크 공유 시 미리보기 생성",

      // "useReducer를 이용한 컴포넌트 외부에서의 상태 관리법을 익힘",
      // "메모이제이션과 콜백, Context를 활용한 props drilling 방지로 프로젝트 최적화",
    ],
    skills: [1, 3],
    links: [
      {
        name: "Github Repository",
        url: "https://github.com/vedze/emotional-diary",
      },
    ],
  },
  {
    type: "팀 프로젝트",
    title: "TEAM PORTFOLIO",
    date: "2024.03 - 2024.04",
    details: [
      "FE 팀원 2명, BE 팀원 1명과 진행한 팀 프로젝트",
      "중도 참여하여 유저별 프로젝트 조회 페이지 제작",
      "프로젝트의 중심 페이지를 담당하며 페이지 간 유저 정보와 유저가 가진 데이터 flow 관리",
      "팀 활동 종료로 배포 중단",
    ],
    skills: [1, 2, 5, 6, 7],
    links: [
      {
        name: "Github Repository",
        url: "https://github.com/Plain-Portfolio/portfolio_front",
      },
    ],
  },
];
