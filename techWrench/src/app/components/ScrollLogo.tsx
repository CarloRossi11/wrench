"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./scrollLogo.module.css";

interface ScrollLogoProps {
  primarySrc: string;
  secondarySrc: string;
  alt?: string;
  width?: number;
  height?: number;
  triggerId?: string;
}

export default function ScrollLogo({
  primarySrc,
  secondarySrc,
  alt = "Logo",
  width = 200,
  height = 75,
  triggerId = "hero",
}: ScrollLogoProps) {
  const [scrolled, setScrolled] = useState(false);
  const scrolledRef = useRef(false); // ✅ moved to top level of component

  useEffect(() => {
    const target = document.getElementById(triggerId);
    if (!target) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const isScrolled = !entry.isIntersecting;
        if (isScrolled !== scrolledRef.current) {
          scrolledRef.current = isScrolled;
          setScrolled(isScrolled);
        }
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, [triggerId]); // scrolledRef is stable, no need to include it

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
