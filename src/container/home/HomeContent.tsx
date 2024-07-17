import styles from "@/styles/home/homecontent.module.css";

export default function HomeContent() {
  return (
    <div className={styles.homeContent}>
      <div className={styles.homeGreetings}>
        안녕하세요!
        <br />
        이상을 꿈꾸는 개발자 <strong>이지은</strong>입니다.
      </div>
      <div className={styles.homeIntroduce}>
        <div>
          여기는 제 소개가 들어갈 부분입니다.
          <br />
          줄글이 들어갑니다.
          <br />
          짧은 소개말 뭐라고 할 지 고민 백만번
        </div>
      </div>
    </div>
  );
}
