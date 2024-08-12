import styles from "@/styles/notfound.module.css";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className={styles.notFound}>
      <h1>404</h1>
      <p>Page Not Found</p>
      <div>
        <p>존재하지 않는 페이지입니다 😥</p>
        <Link href="/">포트폴리오 홈으로 돌아가기 →</Link>
      </div>
    </div>
  );
}
