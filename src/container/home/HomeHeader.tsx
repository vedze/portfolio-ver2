import styles from "@/styles/home/homeheader.module.css";
import Link from "next/link";
import { homeConstants } from "@/constants/constants";

export default function HomeHeader() {
  return (
    <div className={styles.homeHeader}>
      <Link
        href={homeConstants.GIT_LINK}
        target="blank"
        className={styles.headerLink}
      >
        Github
      </Link>
      <Link
        href={homeConstants.BLOG_LINK}
        target="blank"
        className={styles.headerLink}
      >
        Blog
      </Link>
      <span className={styles.headerLink}>
        <Link href={homeConstants.RESUME_LINK} target="blank">
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
