"use client";

import styles from "./about.module.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HamburgerMenu from "../components/HamburgerMenu";
import useIsMobile from "../hooks/useIsMobile";
import HeroOverlay from "../components/HeroOverlay";
import Image from "next/image";

export default function Page() {
  const isMobile = useIsMobile(850);
  return (
    <div className={styles.wrapper}>
      {isMobile ? <HamburgerMenu /> : <Header />}
      <HeroOverlay
        backgroundSrc="/jungleSolar.jpeg"
        height="500px"
        overlayDarkness={0.5}
        gradientOverlay
        fadeIn
      >
        <h1>ABOUT</h1>
      </HeroOverlay>
      <div className={styles.main}>
        <div className={styles.founder}>
          <div className={styles.founderText}>
            <h1>Services</h1>
            <p>
              With over 5 years of deveplopment experience, we specialize in
              creating custom websites that not only look great but also drive
              results. Our websites load quickly, are mobile-friendly, and are
              optimized for search engines to help your business get found
              online.
            </p>
          </div>
          <div className={styles.founderImage}>
            <ul>
              <li>Custom Websites</li>
              <li>SEO</li>
              <li>Branding</li>
              <li>Online Advertising</li>
            </ul>
          </div>
        </div>
        <div className={styles.company}>
          <h1>About The Company</h1>
          <p>
            {/* CaLi Cleanerz, where we set the standard for window cleaning in San
            Diego! With over a decade of experience, we confidently deliver
            top-tier service to both commercial and residential clients. Our
            mission is simple: to exceed expectations and ensure that every
            window shines brilliantly while every customer walks away completely
            satisfied. Fully Insured-NAIC #12831 EIN #33-4820557" */}
          </p>
        </div>
      </div>
      <div className={styles.buttonContainer}>
        <div className={styles.ctas}>
          <a className={styles.primary} href={"./contact"}>
            Contact
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
}
