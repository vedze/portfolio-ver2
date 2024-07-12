import styles from "@/styles/common.module.css";

import HomeFooter from "@/container/home/HomeFooter";
import HomeContent from "@/container/home/HomeContent";
import HomeHeader from "@/container/home/HomeHeader";

export default function HomePage() {
  return (
    <div className={styles.commonContainer}>
      <div className={styles.homeHeader}>
        <HomeHeader />
      </div>
      <div className={styles.homeContent}>
        <HomeContent />
      </div>
      <div className={styles.homeFooter}>
        <HomeFooter />
      </div>
    </div>
  );
}
