import styles from "@/styles/home/homeheader.module.css";
import Link from "next/link";
import { personalCons } from "@/data/constants";

export default function HomeHeader() {
  return (
    <div className={styles.homeHeader}>
      <Link
        href={personalCons.GIT_LINK}
        target="blank"
        className={styles.headerLink}
      >
        Github
      </Link>
      <Link
        href={personalCons.BLOG_LINK}
        target="blank"
        className={styles.headerLink}
      >
        Blog
      </Link>
      <span className={styles.headerLink}>
        <Link
          href={personalCons.RESUME_LINK}
          target="blank"
          className={styles.headerLink}
        >
          Resume
        </Link>
        <div className={styles.headerLinkResume}>
          <div>▲</div>
          <div>이력서 보러 가기</div>
        </div>
      </span>
    </div>
  );
}
