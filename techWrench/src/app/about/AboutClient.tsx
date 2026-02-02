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
        <div className={styles.founder}>
          <div className={styles.founderImage}>
            <Image
              src="/founder.jpeg"
              alt="Photo of Carlo Berardelli, founder of Tech Wrench Web Solutions"
              width={300}
              height={400}
              priority
            />
          </div>
          <div className={styles.founderText}>
            <h1>About The Founder</h1>
            <p>
              Carlo Berardelli established Tech Wrench Web Solutions in 2025. He
              graduated with a Business Degree in 2014 from California
              University of Pennsylvania, and later received his Software
              Engineering Immersive Certificate from General Assembly in 2020.
              Carlo has over 5 years of professional experience in web
              development, and an additional 5 years of account managment and
              customer support experience. With his diverse background and
              skillset, Carlo is uniquely qualified to help small businesses
              establish a strong online presence through custom websites,
              effective SEO strategies, and compelling branding.
            </p>
          </div>
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
