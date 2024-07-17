import HomePage from "./home/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import ProjectsPage from "./projects/page";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <HomePage />
      <section>
        <Header />
        <AboutPage />
        <ProjectsPage />
        <ContactPage />
      </section>
      <footer>
        <div>© 2024. Lee Jieun All rights reserved.</div>
      </footer>
    </main>
  );
}
