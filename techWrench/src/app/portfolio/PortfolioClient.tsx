"use client";

import { useState, useEffect, useRef } from "react";
import styles from "./portfolio.module.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "../components/Reveal";

export default function Page() {
  const MotionLink = motion.create(Link);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const check = () => setIsLargeScreen(window.innerWidth > 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"], // tracks while hero is in view
  });

  // Move image upward as user scrolls down — adjust the output range to taste
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <div className={styles.heroText}>
            <h1>Portfolio</h1>
            <p>
              Beautiful websites build to perform exceptionally and capture
              leads.
            </p>
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
        <section className={styles.portfolio}>
          {/* <h2>
            <u>Website Portfolio</u>
          </h2> */}
          {/* Device Mockups created from <a href="https://deviceframes.com/templates/iphone-13">iPhone mockups</a> */}
          <div className={styles.portfolioContent}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: isLargeScreen ? 0.3 : 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.portfolioItem}>
                <h2>Cali Cleanerz</h2>
                <div className={styles.portfolioImage}>
                  <Image
                    src="/califrames.png"
                    alt="Screenshot of a website built for Cali Cleanerz"
                    fill
                    sizes="(max-width: 600px) 85vw, 400px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>
                  Similar to the Tech Wrench site with a split landing but with
                  the contact form in the initial view. The page also features a
                  live Instagram Preview and a link to their affiliate shop.
                </p>
                <div className={styles.buttonContainer}>
                  <div className={styles.ctas}>
                    <MotionLink
                      className={styles.primary}
                      target="blank"
                      href="https://www.calicleanerz.com"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      Visit Website
                    </MotionLink>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: isLargeScreen ? 0.15 : 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.portfolioItem}>
                <h2>Mitchell Builds</h2>
                <div className={styles.portfolioImage}>
                  <Image
                    src="/mitchellframes.png"
                    alt="Screenshot of a website built for Mitchell Builds"
                    fill
                    sizes="(max-width: 600px) 85vw, 400px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>
                  A bold and modern design with a custom color scheme and logo.
                  The site focuses on showcasing the client's work with a
                  parallax image title animation.
                </p>
                <div className={styles.buttonContainer}>
                  <div className={styles.ctas}>
                    <MotionLink
                      className={styles.primary}
                      target="blank"
                      href="https://mitchellbuilds.netlify.app/"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      Visit Website
                    </MotionLink>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0,
              }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.portfolioItem}>
                <h2>Woodwright Millwork</h2>
                <div className={styles.portfolioImage}>
                  <Image
                    src="/woodwrightframes.png"
                    alt="Screenshot of a website built for Woodwright Millwork"
                    fill
                    sizes="(max-width: 600px) 85vw, 400px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
                <p>
                  Another take on letting the product speak for itself, this
                  website features a carousel with fade effects and a custom
                  shuffle component to quickly view different images.
                </p>
                <div className={styles.buttonContainer}>
                  <div className={styles.ctas}>
                    <MotionLink
                      className={styles.primary}
                      target="blank"
                      href="https://woodwright.netlify.app/"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }}
                    >
                      Visit Website
                    </MotionLink>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.ctas}>
              <MotionLink
                className={styles.secondary}
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
        </section>
      </div>
      <Footer />
    </div>
  );
}
