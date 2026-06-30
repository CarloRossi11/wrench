import styles from "./intro.module.css";
import Image from "next/image";
import { motion } from "motion/react";
import Link from "next/link";

export default function HomeClient() {
  const MotionLink = motion.create(Link);

  return (
    <section className={styles.intro}>
      <div className={styles.introLeft}>
        <Image
          id="hero"
          className={styles.logo}
          src="/twsVerticalWhite.svg"
          alt="Tech Wrench Web Solutions Logo"
          width={350}
          height={250}
          priority
        />
      </div>
      <div className={styles.introRight}>
        <h1>Get Found. Capture Every Lead. Win More Customers.</h1>
        <p className={styles.introText}>
          From automated lead follow-up and high-performance websites to Google
          Business optimization and review generation, Tech Wrench equips local
          service businesses with the digital tools they need to get found
          online, convert more leads, and grow with confidence.
        </p>
        <div className={styles.ctas}>
          <MotionLink
            className={styles.primary}
            href={"./contact"}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            Start Growing Today
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
