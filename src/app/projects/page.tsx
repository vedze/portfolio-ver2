import styles from "@/styles/pages.module.css";
import Section from "@/components/Section";
import ProjectsContent from "@/container/projects/ProjectsContent";

export default function ProjectsPage() {
  return (
    <div id="project" className={styles.commonPage}>
      <Section num="01" name="PROJECT" />
      <ProjectsContent />
    </div>
  );
}
