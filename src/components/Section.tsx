import styles from "@/styles/components/section.module.css";

interface ISection {
  num: string;
  name: string;
  intro?: string;
}

export default function Section({ num, name, intro }: ISection) {
  return (
    <div>
      <div className={styles.section}>
        <span>{num}</span>
        <span>{name}</span>
      </div>
      {intro && <p className={styles.intro}>{intro}</p>}
    </div>
  );
}
