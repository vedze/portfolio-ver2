import styles from "@/styles/contact/contactpage.module.css";
import { homeConstants } from "@/constants/constants";
import ContactContent from "@/container/contact/ContactContent";

export default function ContactPage() {
  return (
    <div id="contact" className={styles.contactContainer}>
      <ContactContent />
      <div>phone: {homeConstants.PHONE_NUM}</div>
      <div>email: {homeConstants.EMAIL_ADD}</div>
    </div>
  );
}
