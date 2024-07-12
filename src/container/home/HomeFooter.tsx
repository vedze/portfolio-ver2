import { homeConstants } from "@/constants/constants";
import styles from "@/styles/container/homefooter.module.css";

export default function HomeFooter() {
  return (
    <div className={styles.homeFooter}>
      <span>
        {homeConstants.PHONE_NUM}
        <br />
        {homeConstants.EMAIL_ADD}
      </span>
      <span>▼</span>
      <span>last updated: {homeConstants.LAST_UPDATED}</span>
    </div>
  );
}
