"use client";

import styles from "@/styles/contact/contactcontent.module.css";
import ContactForm from "@/container/contact/ContactForm";
import { useState } from "react";
import { personalCons } from "@/data/constants";

export default function ContactContent() {
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(personalCons.EMAIL_ADD);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 4000);
    } catch (error) {
      alert("copy denied :(");
      console.log("copy error: ", error);
    }
  };

  return (
    <div id="contact" className={styles.contactContainer}>
      <div className={`${styles.msg} ${isCopy ? styles.clicked : ""}`}>
        {isCopy ? "Success!" : "click to copy!"}
      </div>
      <div className={styles.email} onClick={onClick}>
        {personalCons.EMAIL_ADD}
      </div>
      <div className={styles.msg}>or send it directly!</div>
      <ContactForm />
    </div>
  );
}
