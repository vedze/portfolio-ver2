import styles from "@/styles/contact/contactcontent.module.css";

export default function ContactContent() {
  return (
    <form className={styles.contactContent}>
      <div className={styles.inputGroup}>
        <input type="text" required />
        <label>보내는 분</label>
        <span></span>
      </div>
      <div className={styles.inputGroup}>
        <input type="text" required />
        <label>제목</label>
        <span></span>
      </div>
      <div className={styles.inputGroup}>
        <textarea required />
        <label>내용</label>
        <span></span>
      </div>
    </form>
  );
}
