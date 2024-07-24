"use client";

import styles from "@/styles/contact/contactcontent.module.css";
import ContactForm from "@/container/contact/ContactForm";
import { useState } from "react";
import { personalCons } from "@/data/constants";

export default function ContactContent() {
  const [isCopy, setIsCopy] = useState<boolean>(false);
  const [isSended, setIsSended] = useState<"success" | "fail" | null>(null);

  const onClick = async () => {
    try {
      await navigator.clipboard.writeText(personalCons.EMAIL_ADD);
      setIsCopy(true);
      setTimeout(() => {
        setIsCopy(false);
      }, 4000);
    } catch (error) {
      alert("copy denied :(");
      console.error("copy error: ", error);
    }
  };

  return (
    <div>
      <div className={`${styles.msg} ${isCopy ? styles.copied : ""}`}>
        {isCopy ? "Success!" : "click to copy!"}
      </div>
      <div className={styles.email} onClick={onClick}>
        {personalCons.EMAIL_ADD}
      </div>
      <div
        className={`${styles.msg} ${
          isSended === "success"
            ? styles.success
            : isSended === "fail"
            ? styles.fail
            : ""
        }`}
      >
        {isSended === "success"
          ? "이메일이 성공적으로 전송되었습니다 :)"
          : isSended === "fail"
          ? "이메일 전송에 실패하였습니다 :("
          : "or send it directly!"}
      </div>
      <ContactForm sendStatus={setIsSended} />
    </div>
  );
}
