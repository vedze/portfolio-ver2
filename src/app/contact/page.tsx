import styles from "@/styles/contact/contactpage.module.css";
import Section from "@/components/Section";
import ContactForm from "@/container/contact/ContactForm";
import { homeConstants } from "@/constants/constants";

export default function ContactPage() {
  return (
    <>
      <Section sectionNum="03" sectionName="Contact" />
      <div id="contact" className={styles.contactContainer}>
        <div className={styles.contactMsg}>click to copy!</div>
        <div className={styles.contactEmail}>{homeConstants.EMAIL_ADD}</div>
        <div className={styles.contactMsg}>or send it directly</div>
        <ContactForm />
      </div>
    </>
  );
}
