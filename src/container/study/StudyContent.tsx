import "@/styles/globals.css";
import styles from "@/styles/study/studycontent.module.css";
import { studyData } from "@/data/study";
import { IoMdArrowDropright } from "react-icons/io";

export default function StudyContent() {
  return (
    <div>
      {studyData.map((study, i) => (
        <div key={i} className={styles.studyForm}>
          <h1>{study.category}</h1>
          {study.lists.map((list, i) => (
            <div key={i} className={styles.list}>
              <h4>
                <IoMdArrowDropright />
                <span className="highlighter">{list.name}</span>
              </h4>
              <p>{list.expl}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
