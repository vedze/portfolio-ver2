import styles from "@/styles/components/header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <div className={styles.header}>
      <Link href="#">LOGO</Link>
      <div>
        <Link href="/#home">Home</Link>
        <Link href="/#projects">Projects</Link>
        <Link href="/#contact">Contact</Link>
        <Link href="/#etc">Etc.</Link>
      </div>
    </div>
  );
}
