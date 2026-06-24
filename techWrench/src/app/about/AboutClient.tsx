"use client";

import styles from "./about.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";
import { useRef } from "react";

export default function Page() {
  const MotionLink = motion.create(Link);
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // tracks while hero is in view
  });

  // Move image upward as user scrolls down — adjust the output range to taste
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className={styles.wrapper} ref={heroRef}>
      <div className={styles.navBar}>
        <Navbar />
      </div>

      <div className={styles.heroArea}>
        <Reveal direction="right">
          <div className={styles.heroText}>
            <h1>ABOUT</h1>
            <p>Learn more about what Tech Wrench is and who's behind it.</p>
          </div>
        </Reveal>
        <motion.div className={styles.overlayImageWrapper} style={{ y }}>
          <Image
            src="/Tech_Wrench_Pattern-03.svg"
            alt="Tech Wrench Web Solutions Logo"
            fill
            priority
            className={styles.overlayImage}
          />
        </motion.div>
      </div>

      <div className={styles.main}>
        <div className={styles.company}>
          <div className={styles.companyImage}>
            <Image
              src="/twsVerticalWhite.svg"
              alt="Tech Wrench Web Solutions Logo"
              width={300}
              height={400}
              priority
            />
          </div>
          <div className={styles.founderText}>
            <h1>The Company</h1>
            <p>
              Tech Wrench helps local service businesses get found online,
              capture every lead, and convert more inquiries into paying
              customers. We combine high-performance websites, Google Business
              Profile optimization, review generation, lead management, and
              marketing automation into a complete customer acquisition system
              designed to drive measurable growth. By leveraging modern
              technology and proven growth strategies, we help our clients build
              trust, improve visibility, and create a more predictable pipeline
              of new business.
            </p>
          </div>
        </div>
        <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>The Founder</h1>
            <p>
              Carlo Berardelli established Tech Wrench Web Solutions in 2025. He
              graduated with a Business Degree in 2014 from California
              University of Pennsylvania, and later received his Software
              Engineering Immersive Certificate from General Assembly in 2020.
              Carlo has over 5 years of professional experience in web
              development, and an additional 5 years of account management and
              customer support experience. With his diverse background and
              skillset, Carlo is uniquely qualified to help small businesses
              establish a strong online presence by combining technical
              expertise with a deep understanding of achieving business goals.
            </p>
          </div>
          <div className={styles.founderImage}>
            <Image
              src="/founder.jpeg"
              alt="Photo of Carlo Berardelli, founder of Tech Wrench Web Solutions"
              width={300}
              height={400}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.ctas}>
          <MotionLink
            className={styles.primary}
            href="/contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            Contact
          </MotionLink>
        </div>
      </div>
      <Footer />
    </div>
  );
}
