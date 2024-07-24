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
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // console.log("data: ", contactData); -> ok
    e.preventDefault();
    try {
      await SendContactEmail(contactData);
      console.log("이메일 전송에 성공하였습니다.");
      setContactData(initContactData); // 입력칸 초기화
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
    } catch (error) {
      console.error("이메일 전송에 실패하였습니다: ", error);
    }
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
          value={contactData.from}
          onChange={handleChange}
          placeholder="이메일을 입력해주세요"
          required
        />
        <label htmlFor="from">보내는 분</label>
      </div>
      <div className={styles.inputGroup}>
        <input
          id="title"
          type="text"
          value={contactData.title}
          onChange={handleChange}
          placeholder="제목을 입력해주세요"
          required
          autoComplete="off"
        />
        <label htmlFor="title">제목</label>
      </div>
      <div className={styles.inputGroup}>
        <textarea
          id="text"
          value={contactData.text}
          onChange={handleChange}
          onInput={handleTextarea}
          placeholder="내용을 입력해주세요"
          ref={textareaRef}
          rows={1}
          required
          autoComplete="off"
        />
        <label htmlFor="text">내용</label>
      </div>
      <button type="submit">이메일 보내기</button>
    </form>
  );
}
