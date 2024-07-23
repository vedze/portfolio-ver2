"use client";

import { SendContactEmail } from "@/app/api/send-email";
import styles from "@/styles/contact/contactform.module.css";
import { useState, useRef } from "react";

interface ContactDataType {
  from: string;
  title: string;
  text: string;
}

const initContactData = {
  from: "",
  title: "",
  text: "",
};

export default function ContactForm() {
  const [contactData, setContactData] =
    useState<ContactDataType>(initContactData);

  // 입력값 업데이트
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    // console.log(e.target.id);
    // console.log(e.target.value);
    const { id, value } = e.target;
    setContactData({ ...contactData, [id]: value });
  };

  // form handler
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    // console.log("data: ", contactData); -> ok
    e.preventDefault();
    SendContactEmail(contactData);
  };

  // 반응형 textarea
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const handleTextarea = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.contactContent}>
      <div className={styles.inputGroup}>
        <input
          id="from"
          type="text"
          onChange={handleChange}
          placeholder="이메일 또는 연락처를 남겨주세요"
          required
        />
        <label htmlFor="from">보내는 분</label>
      </div>
      <div className={styles.inputGroup}>
        <input
          id="title"
          type="text"
          onChange={handleChange}
          placeholder="제목을 입력해주세요"
          required
        />
        <label htmlFor="title">제목</label>
      </div>
      <div className={styles.inputGroup}>
        <textarea
          id="text"
          onChange={handleChange}
          onInput={handleTextarea}
          placeholder="내용을 입력해주세요"
          ref={textareaRef}
          rows={1}
          required
        />
        <label htmlFor="text">내용</label>
      </div>
      <button type="submit">이메일 보내기</button>
    </form>
  );
}
