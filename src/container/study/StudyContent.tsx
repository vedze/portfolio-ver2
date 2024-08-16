import { studyData } from "@/data/study";

export default function StudyContent() {
  return (
    <div>
      <p>
        관심 분야가 넓어 이것저것 다 공부하고 있어요.
        <br />
        의미없는 시간은 없다고 생각하기에, 이 모든 것들은 결국 제 강한 무기가 될
        거라고 믿어요.
      </p>
      {studyData.map((study, i) => (
        <div key={i}>
          <h1>{study.category}</h1>
          {study.lists.map((list, i) => (
            <div key={i}>
              <strong>{list.name}</strong>
              <p>{list.expl}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
