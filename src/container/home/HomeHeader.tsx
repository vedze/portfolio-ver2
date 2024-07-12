import styles from "@/styles/container/homeheader.module.css";

export default function HomeHeader() {
  return (
    <div className={styles.homeHeader}>
      <div>Github</div>
      <div>Blog</div>
      <div>
        <div>Resume</div>
        <div>이력서 보러가기</div>
      </div>
    </div>
  );
}
