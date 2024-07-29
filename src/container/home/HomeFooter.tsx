import styles from "@/styles/home/homefooter.module.css";
import { personalCons } from "@/data/constants";
import { IoIosArrowDown } from "react-icons/io";

export default function HomeFooter() {
  return (
    <div className={styles.homeFooter}>
      <span>
        {personalCons.PHONE_NUM}
        <br />
        {personalCons.EMAIL_ADD}
      </span>
      <p className={styles.icon}>
        <IoIosArrowDown />
      </p>
      <span>Last updated: {personalCons.LAST_UPDATED}</span>
    </div>
  );
}
