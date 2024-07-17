import styles from "@/styles/about/aboutpage.module.css";

import Section from "@/components/Section";
import AboutContent from "@/container/about/AboutContent";

export default function AboutPage() {
  return (
    <div id="about" className={styles.aboutPage}>
      <Section num="01" name="About" />
      <AboutContent />
    </div>
  );
}
