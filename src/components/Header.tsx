import styles from "@/styles/components/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="#" className={styles.headerLogo}>
        LEE JI EUN
      </Link>
      <div className={styles.headerMenu}>
        <Link href="#about">ABOUT</Link>
        <Link href="#project">PROJECT</Link>
        <Link href="#contact">CONTACT</Link>
      </div>
    </div>
  );
}
