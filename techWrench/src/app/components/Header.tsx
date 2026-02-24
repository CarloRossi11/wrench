import Link from "next/link";
import styles from "./header.module.css";
import Image from "next/image";
import ScrollLogo from "./ScrollLogo";

export default function Header() {
  return (
    <div className={styles.main}>
      <div className={styles.links}>
        <div className={styles.linkGroup}>
          <Link className={styles.button} href={"/"}>
            <h3>Home</h3>
          </Link>
          <Link className={styles.button} href={"/about"}>
            <h3>About</h3>
          </Link>
        </div>
        <div className={styles.logoContainer}>
          <Link href={"/"}>
            <ScrollLogo
              primarySrc="/logo-light.png"
              secondarySrc="/logo-dark.png"
              width={160}
              height={40}
              triggerId="hero"
            />
          </Link>
        </div>
        <div className={styles.linkGroup}>
          <Link className={styles.button} href={"/services"}>
            <h3>Services</h3>
          </Link>
          <Link className={styles.button} href={"/contact"}>
            <h3>Contact</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}
