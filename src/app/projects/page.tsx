import styles from "@/styles/pages.module.css";
import Section from "@/components/Section";
import ProjectsContent from "@/container/projects/ProjectsContent";

export default function ProjectsPage() {
  return (
    <div id="projects" className={styles.commonPage}>
      <Section num="02" name="Projects" />
      <ProjectsContent />
    </div>
  );
}
