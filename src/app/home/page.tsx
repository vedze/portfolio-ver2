import styles from "@/styles/container/homepage.module.css";

import HomeFooter from "@/container/home/HomeFooter";
import HomeContent from "@/container/home/HomeContent";
import HomeHeader from "@/container/home/HomeHeader";

export default function HomePage() {
  return (
    <div className={styles.homeContainer}>
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </div>
  );
}
