import styles from "@/styles/pages.module.css";
import Section from "@/components/Section";
import ContactContent from "@/container/contact/ContactContent";

export default function ContactPage() {
  return (
    <div id="contact" className={styles.commonPage}>
      <Section num="03" name="CONTACT" />
      <ContactContent />
    </div>
  );
}
