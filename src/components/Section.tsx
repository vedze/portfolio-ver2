import styles from "@/styles/components/section.module.css";

interface ISection {
  sectionNum: string;
  sectionName: string;
}

export default function Section({ sectionNum, sectionName }: ISection) {
  return (
    <div className={styles.section}>
      <span>{sectionNum}</span>
      <span>{sectionName}</span>
    </div>
  );
}
