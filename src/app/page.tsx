import HomePage from "./home/page";
import ProjectsPage from "./projects/page";
import StudyPage from "./study/page";
import ContactPage from "./contact/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HomePage />
      <section>
        <Header />
        <ProjectsPage />
        <StudyPage />
        <ContactPage />
      </section>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
