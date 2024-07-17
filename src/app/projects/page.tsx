import styles from "@/styles/projects/projectspage.module.css";

import Section from "@/components/Section";
import ProjectsContent from "@/container/projects/ProjectsContent";

export default function ProjectsPage() {
  return (
    <div id="projects" className={styles.projectsPage}>
      <Section num="02" name="Projects" />
      <ProjectsContent />
    </div>
  );
}
