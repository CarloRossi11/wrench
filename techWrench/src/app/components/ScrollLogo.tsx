"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
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
  const scrolledRef = useRef(false);

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
  }, [triggerId]);

  return (
    <motion.div
      className={styles.logoWrapper}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Image
        src={primarySrc}
        alt={alt}
        width={75}
        height={75}
        className={`${styles.logo} ${scrolled ? styles.hidden : styles.visible}`}
      />
      <Image
        src={secondarySrc}
        alt={alt}
        width={width}
        height={height}
        className={`${styles.logo} ${scrolled ? styles.visible : styles.hidden}`}
      />
    </motion.div>
  );
}