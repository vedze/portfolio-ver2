import styles from "@/styles/page.module.css";

import HomePage from "./home/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import EtcPage from "./etc/page";
import ProjectsPage from "./projects/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div>
      <HomePage />
      <Header />
      <main className={styles.main}>
        <ProjectsPage />
        <ContactPage />
        <EtcPage />
        <Footer />
      </main>
    </div>
  );
}
