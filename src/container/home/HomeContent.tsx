import styles from "@/styles/home/homecontent.module.css";
import { CATCH_PHRASE } from "@/data/constants";

export default function HomeContent() {
  return (
    <div className={styles.homeContent}>
      <div className={styles.homeGreetings}>
        안녕하세요!
        <br />
        {CATCH_PHRASE} <strong>이지은</strong>입니다.
      </div>
      <div className={styles.homeIntroduce}>
        <div>
          양심은 효율이 아니라 가치라는 말이 있습니다.
          <br />
          스스로에게 떳떳한 실력을 갖추기 위해
          <br />
          저만의 시간을 착실히 쌓아가고 있습니다.
        </div>
      </div>
    </div>
  );
}
