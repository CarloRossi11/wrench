"use client";

import styles from "./page.module.css";

import Navbar from "./components/Navbar";

import Intro from "./homeSections/Intro";
import Problems from "./homeSections/Problems";
import Solutions from "./homeSections/Solutions";
import CRM from "./homeSections/CRM";
import Wedo from "./homeSections/Wedo";
import Contact from "./homeSections/ContactSection";

import Footer from "./components/Footer";

// TODO //
// Create portal link on header
// fix leak padding

export default function HomeClient() {
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

        <Contact />
      </main>

      <Footer />
    </div>
  );
}
