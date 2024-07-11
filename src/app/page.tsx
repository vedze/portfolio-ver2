import HomePage from "./home/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import EtcPage from "./etc/page";
import ProjectsPage from "./projects/page";

export default function Home() {
  return (
    <main>
      <HomePage />
      <AboutPage />
      <ProjectsPage />
      <ContactPage />
      <EtcPage />
    </main>
  );
}
