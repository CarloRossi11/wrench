"use client";

import styles from "./contact.module.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import Image from "next/image";
import Navbar from "../components/Navbar";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Page() {
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
            <h1>CONTACT</h1>
            <p>
              Complete the form below to discuss the next steps of your
              project.{" "}
            </p>
          </div>
        </Reveal>
        <motion.div className={styles.overlayImageWrapper} style={{ y }}>
          <Image
            src="Tech_Wrench_Pattern-03.svg"
            alt="Tech Wrench Web Solutions Logo"
            fill
            className={styles.overlayImage}
          />
        </motion.div>
      </div>
      <div className={styles.main}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
