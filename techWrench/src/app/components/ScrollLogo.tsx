"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./scrollLogo.module.css";

interface ScrollLogoProps {
  primarySrc: string;
  secondarySrc: string;
  alt?: string;
  width?: number;
  height?: number;
  triggerId?: string; // element to watch (hero section id)
}

export default function ScrollLogo({
  triggerId = "hero",
}: ScrollLogoProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const target = document.getElementById(triggerId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When hero leaves viewport → switch logo
        setScrolled(!entry.isIntersecting);
      },
      { threshold: 0.1 },
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [triggerId]);

  return (
    <div className={styles.logoWrapper}>
      <Image
        src="/logoBlueT.svg"
        alt="Tech Wrench logo"
        width={75}
        height={75}
        className={`${styles.logo} ${scrolled ? styles.hidden : styles.visible}`}
      />

      <Image
        src="/twsHorizontalBlue.svg"
        alt="Tech Wrench Web Solutions logo"
        width={200}
        height={75}
        className={`${styles.logo} ${scrolled ? styles.visible : styles.hidden}`}
      />
    </div>
  );
}
