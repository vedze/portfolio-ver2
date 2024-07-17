import styles from "@/styles/contact/contactpage.module.css";

import Section from "@/components/Section";
import ContactContent from "@/container/contact/ContactContent";

export default function ContactPage() {
  return (
    <div className={styles.contactPage}>
      <Section num="03" name="Contact" />
      <ContactContent />
    </div>
  );
}
