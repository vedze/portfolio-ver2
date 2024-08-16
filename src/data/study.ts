// 수정 필요

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
        name: "NextJS 14",
        expl: "직관적인 라우팅 방식과 이미지 최적화 방식 등 Next의 간편함에 흥미를 느껴 학습중",
      },
      {
        name: "Modern JavaScript",
        expl: "Typescript를 사용하며 JavaScript에 대한 꼼꼼한 학습이 필요하다고 느껴 학습중",
      },
    ],
  },
  {
    category: "Back End",
    lists: [
      {
        name: "Java",
        expl: "백엔드의 구조와 원리에 대한 깊은 이해를 바탕으로 더욱 효율적인 프론트엔드 개발을 위해 공부중",
      },
      {
        name: "express",
        expl: "nodejs 기반이고, 보편적으로 사용되기에 학습중",
      },
    ],
  },
  {
    category: "Etc.",
    lists: [
      {
        name: "React Native",
        expl: "순수 리액트와 닮고도 다른 리액트 네이티브를 이용한 여러가지 실용적인 애플리케이션을 개발하고 싶어 공부중",
      },
    ],
  },
];
