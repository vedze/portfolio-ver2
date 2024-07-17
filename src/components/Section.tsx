import styles from "@/styles/components/section.module.css";

interface ISection {
  num: string;
  name: string;
}

export default function Section({ num, name }: ISection) {
  return (
    <div className={styles.section}>
      <span>{num}</span>
      <span>{name}</span>
    </div>
  );
}
