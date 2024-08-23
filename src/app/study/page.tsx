import styles from "@/styles/pages.module.css";
import Section from "@/components/Section";
import StudyContent from "@/container/study/StudyContent";
import { INTRO } from "@/data/constants";

export default function StudyPage() {
  return (
    <div id="study" className={styles.commonPage}>
      <Section num="02" name="STUDY" />
      <StudyContent />
    </div>
  );
}
