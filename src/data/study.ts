interface Study {
  category: string;
  lists: StudyList[];
}

interface StudyList {
  name: string;
  expl: string;
}

export const studyData: Study[] = [
  {
    category: "Front End",
    lists: [
      {
        name: "Next.JS",
        expl:
          "직관적인 라우팅 시스템으로 처음 관심을 갖게 되었습니다.\n" +
          "NextJS 14에서 컴포넌트의 렌더링 여부를 선택하는 점이 특히 매력적이어서 학습을 시작했습니다.\n" +
          "많은 매력을 가진 프레임워크인 만큼 깊이 있는 학습을 위해 노력하고 있습니다.",
      },
      {
        name: "Modern JavaScript",
        expl:
          "모던 자바스크립트를 먼저 학습한 것이 아닌, 프로젝트를 진행하며 공부했기에 기초를 더 다지고 싶었습니다.\n" +
          "보다 더 효율적인 코드 작성과 타입스크립트의 활용을 위하여 기초부터 고급 개념까지 깊게 이해하기 위해 학습하고 있습니다.",
      },
    ],
  },
  {
    category: "Back End",
    lists: [
      {
        name: "Java",
        expl: "백엔드의 구조와 원리에 대한 깊은 이해를 바탕으로 더욱 효율적이고 안정적인 웹 개발을 목표로 하고 있습니다.",
      },
      {
        name: "Express",
        expl: "가벼운 프레임워크인 만큼 보편적으로 사용되고 있기에 학습하고 있습니다.",
      },
    ],
  },
  {
    category: "Etc.",
    lists: [
      {
        name: "React Native",
        expl:
          "Ios와 Android를 단일 코드베이스로 통합 개발이 가능하다는 매력적인 점을 보고 학습을 시작했습니다.\n" +
          "일상생활의 아이디어를 가볍고 실용적인 애플리케이션으로 구현하는 것이 목표입니다.",
      },
    ],
  },
];
