import styles from "@/styles/home/homepage.module.css";

import HomeHeader from "@/container/home/HomeHeader";
import HomeContent from "@/container/home/HomeContent";
import HomeFooter from "@/container/home/HomeFooter";

export default function HomePage() {
  return (
    <div id="home" className={styles.homePage}>
      <HomeHeader />
      <HomeContent />
      <HomeFooter />
    </div>
  );
}
