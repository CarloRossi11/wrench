"use client";

import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

import Navbar from "./components/Navbar";
import Intro from "./homeSections/Intro";
import Problems from "./homeSections/Problems";
import Solutions from "./homeSections/Solutions";
import CRM from "./homeSections/CRM";
import Wedo from "./homeSections/Wedo";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

// TODO //
// Move Portfolio to separate page
// Create portal link on header
// Move sections to individual files
// fix leak padding

export default function HomeClient() {
  const MotionLink = motion.create(Link);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  // const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const check = () => setIsLargeScreen(window.innerWidth > 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <div className={styles.page}>
      <div className={styles.navBar}>
        <Navbar />
      </div>

      <Intro />

      <main className={styles.main}>
        <Problems />

        <Solutions />

        <CRM />

        <Wedo />

        <section className={styles.contact}>
          <div className={styles.contactText}>
            <h1>Get Started Today</h1>

            <ContactForm />
          </div>
          <div className={styles.overlayImageWrapper}>
            <Image
              src="Tech_Wrench_Pattern-02.svg"
              alt="Tech Wrench Web Solutions Logo"
              fill
              className={styles.overlayImage}
            />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
