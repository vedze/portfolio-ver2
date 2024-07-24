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
  const [isEmailValid, setIsEmailValid] = useState(true);

  // 이메일 유효성 검사
  // [Aa~Zz,0~9,._-중 하나 이상]@[동일].[도메인은 Aa~Zz 2개이상으로 구성된 문자열] + 대소문자 구분 x
  const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/i;
  // 입력값 업데이트
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setContactData({ ...contactData, [id]: value });

    // from value가 비워져있으면 valid true, 채워져있으면 valid test로 넘김
    if (id === "from") {
      if (value === "") {
        setIsEmailValid(true);
      } else {
        setIsEmailValid(emailRegExp.test(value));
      }
    }
  };

  // form handler
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // console.log("data: ", contactData); -> ok
    e.preventDefault();

    // 유효성검사 통과 못했으면 submit 종료
    if (!isEmailValid) {
      setIsEmailValid(false);
      return;
    }

    try {
      await SendContactEmail(contactData);
      console.log("이메일 전송에 성공하였습니다.");
      setContactData(initContactData); // 입력칸 초기화
      if (textareaRef.current) {
        textareaRef.current.style.height = "auto";
      }
      setIsEmailValid(true); // 유효성 검사 초기화(true)
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
      {!isEmailValid && (
        <p className={styles.errorText}>유효한 이메일 주소를 입력해주세요.</p>
      )}
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
