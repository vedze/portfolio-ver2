import HomePage from "./home/page";
import AboutPage from "./about/page";
import ContactPage from "./contact/page";
import EtcPage from "./etc/page";
import ProjectsPage from "./projects/page";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <HomePage />
      <div>
        <Header />
        <ProjectsPage />
        <ContactPage />
        <EtcPage />
        <Footer />
      </div>
    </main>
  );
}
