"use client";

import styles from "./contact.module.css";
import Footer from "../components/Footer";
import ContactForm from "../components/ContactForm";
import Reveal from "../components/Reveal";
import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Page() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <div className={styles.heroText}>
            <h1>CONTACT</h1>
            <p>
              Please complete the form below and we will get back to you soon to
              discuss the next steps for your project.{" "}
            </p>
          </div>
        </Reveal>
        <Image
          src="Tech_Wrench_Pattern-03.svg"
          alt="Tech Wrench Web Solutions Logo"
          fill
          className={styles.overlayImage}
        />
      </div>
      <div className={styles.main}>
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
