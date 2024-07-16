import styles from "@/styles/contact/contactform.module.css";

export default function ContactForm() {
  return (
    <form className={styles.contactContent}>
      <div className={styles.inputGroup}>
        <input type="text" required />
        <label>보내는 분</label>
      </div>
      <div className={styles.inputGroup}>
        <input type="text" required />
        <label>제목</label>
      </div>
      <div className={styles.inputGroup}>
        <textarea rows={1} required />
        <label>내용</label>
      </div>
      <button type="submit">이메일 보내기</button>
    </form>
  );
}
