import { personalCons } from "@/data/constants";
import styles from "@/styles/home/homefooter.module.css";

export default function HomeFooter() {
  return (
    <div className={styles.homeFooter}>
      <span>
        {personalCons.PHONE_NUM}
        <br />
        {personalCons.EMAIL_ADD}
      </span>
      <span>▼</span>
      <span>last updated: {personalCons.LAST_UPDATED}</span>
    </div>
  );
}
