"use client";

import styles from "@/styles/contact/contactpage.module.css";
import Section from "@/components/Section";
import ContactForm from "@/container/contact/ContactForm";
import { homeConstants } from "@/constants/constants";
import { useState } from "react";

export default function ContactPage() {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(homeConstants.EMAIL_ADD);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 5000);
    } catch (error) {
      alert("copy denied :(");
      console.log("copy error: ", error);
    }
  };

  return (
    <div>
      <Section sectionNum="03" sectionName="Contact" />
      <div id="contact" className={styles.contactContainer}>
        <div className={`${styles.contactMsg} ${isCopy ? styles.clicked : ""}`}>
          {isCopy ? "Success!" : "click to copy!"}
        </div>
        <div className={styles.contactEmail} onClick={onClick}>
          {homeConstants.EMAIL_ADD}
        </div>
        <div className={styles.contactMsg}>or send it directly</div>
        <ContactForm />
      </div>
    </div>
  );
}
