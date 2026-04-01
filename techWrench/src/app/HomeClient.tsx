"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import { motion } from "motion/react";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";

// ToDo: //
//////////
// add portfolio

export default function HomeClient() {
  const MotionLink = motion.create(Link);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

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

      <section className={styles.intro}>
        <div className={styles.introLeft}>
          <Image
            id="hero"
            className={styles.logo}
            src="/twsVerticalWhite.svg"
            alt="Tech Wrench Web Solutions Logo"
            width={350}
            height={250}
            priority
          />
        </div>
        <div className={styles.introRight}>
          <h1>Beautiful, High Performing Websites</h1>
          <p className={styles.introText}>
            {" "}
            We specialize in custom designed & developed lead generating
            websites to fit your specific needs. Our entire digital toolkit is
            built to reach more customers and deliver a premium experience.
          </p>
          <div className={styles.ctas}>
            <MotionLink
              className={styles.primary}
              href={"./contact"}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 20,
              }}
            >
              Get Started
            </MotionLink>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.weDo}>
          <h2>Website Development Service</h2>
          <p>
            Our primary solution is custom website development for small
            businesses. We work closely with our clients to understand their
            unique needs and goals, and then create a website that looks great
            and drives results. Our websites:
          </p>
          <div className={styles.features}>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.feature}>
                  <h3 className={styles.bullet}>Load quickly</h3>
                  <div className={styles.featureContent}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.47 122.84"
                      preserveAspectRatio="xMidYMid meet"
                      aria-label="Speed performance icon"
                    >
                      <path
                        fill="#051D22"
                        d="M104.76.04H17.73C7.97.04.07,7.95.07,17.7v87.03c0,9.75,7.91,17.66,17.66,17.66h25.36v-31.04c-11.55-6.28-19.39-18.53-19.39-32.6,0-11.6,5.33-21.96,13.68-28.76h.03v23.67l1.66,1.66,6.2,6.2,1.66,1.66h27.76l1.66-1.66,6.14-6.14,1.66-1.66v-23.73h.05c8.34,6.8,13.68,17.15,13.68,28.76,0,14.05-7.82,26.27-19.34,32.56v31.07h26.23c9.75,0,17.66-7.91,17.66-17.66V17.7C122.42,7.95,114.51.04,104.76.04z"
                      />
                    </svg>
                    <p className={styles.support}>
                      Every website we develop has a 95+ performance score, this
                      promotes user interaction and reduces churn.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.feature}>
                  <h3 className={styles.bullet}>
                    Designed for Mobile & Desktop
                  </h3>
                  <div className={styles.featureContent}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.72 122.84"
                      preserveAspectRatio="xMidYMid meet"
                      aria-label="Responsive design icon"
                    >
                      <path
                        fill="#051D22"
                        d="M117.44,5.21C113.93,1.71,109.83-.05,105.16-.05h-24.41l-43.39,43.39c1.03,1.8,1.62,3.89,1.62,6.11,0,6.84-5.55,12.39-12.39,12.39s-12.39-5.55-12.39-12.39,5.55-12.39,12.39-12.39c1.89,0,3.67.43,5.27,1.19L70.16-.05H17.56C12.89-.05,8.8,1.71,5.29,5.21,1.79,8.72.03,12.81.03,17.49v87.66c0,4.68,1.76,8.77,5.26,12.27,3.51,3.51,7.6,5.26,12.27,5.26h24.67l41.81-41.81c-1.03-1.8-1.62-3.89-1.62-6.11,0-6.84,5.55-12.39,12.39-12.39s12.39,5.55,12.39,12.39-5.55,12.39-12.39,12.39c-1.89,0-3.67-.43-5.27-1.19l-36.72,36.72h52.34c4.67,0,8.76-1.75,12.27-5.26,3.5-3.51,5.26-7.59,5.26-12.27V17.49c0-4.67-1.76-8.77-5.26-12.27ZM98.75,41.5c-3.67,3.67-9.13,4.45-13.57,2.35l-42.13,42.12c2.09,4.44,1.32,9.9-2.35,13.57-3.09,3.09-7.46,4.13-11.41,3.13l5.9-5.9v-3.19s-5.49-5.49-5.49-5.49h-3.22s-5.86,5.86-5.86,5.86c-.97-3.94.07-8.27,3.14-11.35,3.83-3.83,9.61-4.52,14.14-2.07l41.83-41.83c-2.44-4.54-1.76-10.31,2.07-14.15,3.09-3.09,7.46-4.13,11.41-3.13l-5.9,5.9v3.19s5.49,5.49,5.49,5.49h3.22l5.86-5.86c.97,3.94-.07,8.27-3.14,11.35z"
                      />
                    </svg>
                    <p className={styles.support}>
                      We design each site to look and behave beautifully on
                      every screen size, from the smallest phone to the largest
                      monitor.
                    </p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className={styles.feature}>
                  <h3 className={styles.bullet}>
                    Search Engine Optimized (SEO)
                  </h3>
                  <div className={styles.featureContent}>
                    <svg
                      className={styles.icon}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 122.68 122.84"
                      preserveAspectRatio="xMidYMid meet"
                      aria-label="Search engine optimization icon"
                    >
                      <path
                        fill="#051D22"
                        d="M112.91.08H9.82C4.41.08.03,4.46.03,9.86v103.09c0,5.4,4.38,9.79,9.79,9.79h28.39c0-.07-.04-.14-.04-.21v-46.7c0-.82-.34-1.59-.94-2.15l-6.42-5.91c-1.52.9-3.28,1.43-5.16,1.43-5.6,0-10.15-4.55-10.15-10.15s4.55-10.15,10.15-10.15,10.15,4.55,10.15,10.15c0,.96-.14,1.89-.4,2.78l8.21,7.55c1.31,1.2,2.05,2.9,2.05,4.67v48.48c0,.08-.04.14-.04.21h6.19c0-.07-.04-.14-.04-.21v-58.75c0-.77-.31-1.52-.85-2.06l-9.98-9.98c-1.19-1.19-1.86-2.81-1.86-4.49v-16.28c-3.75-1.49-6.41-5.15-6.41-9.43,0-5.6,4.55-10.15,10.15-10.15s10.15,4.55,10.15,10.15c0,4.28-2.66,7.93-6.41,9.43v14.6c0,.77.31,1.52.85,2.06l9.98,9.98c1.19,1.19,1.86,2.81,1.86,4.49v60.43c0,.08-.04.14-.04.21h6.14V54.97c-4.93-1.48-8.53-6.05-8.53-11.46,0-4.37,2.35-8.19,5.86-10.28v8.34s2.26,2.26,2.26,2.26h7.76s2.27-2.27,2.27-2.27v-8.29c3.47,2.1,5.8,5.89,5.8,10.24,0,5.19-3.31,9.6-7.93,11.25v67.98h6.17c0-.07-.04-.14-.04-.21v-48.77c0-1.78.74-3.47,2.05-4.67l6.55-5.82c-.27-.92-.42-1.88-.42-2.88,0-5.6,4.55-10.15,10.15-10.15s10.15,4.55,10.15,10.15-4.55,10.15-10.15,10.15c-1.85,0-3.58-.51-5.08-1.37l-4.82,4.23c-.6.55-.94,1.33-.94,2.15v46.99c0,.08-.04.14-.04.21h26.51c5.4,0,9.79-4.38,9.79-9.79V9.86c0-5.4-4.38-9.79-9.79-9.79z"
                      />
                    </svg>
                    <p className={styles.support}>
                      There's no point in having a stunning website if nobody
                      will see it. We make sure each website is optimized to
                      populate high in search results.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={styles.services}>
          <h1>Our Products</h1>
          <div className={styles.servicesContent}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.establishText}>
                <h2>Starter Package</h2>
                <h3></h3>
                <p>
                  Our flagship product described above. Includes responsive
                  design, SEO, maintenance, and updates.
                </p>
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
              <div className={styles.growText}>
                <h2>Brand Refresh</h2>
                <h3></h3>
                <p>
                  Work with our design expert to create a new brand book,
                  including logos, icons, and colors. We'll utilize your custom
                  elements and take your web presence to the next level.
                </p>
              </div>
            </motion.div>

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
              <div className={styles.expandText}>
                <h2>Marketing Boost</h2>
                <h3></h3>
                <p>
                  Expand your reach with email and text services, google ads,
                  and social media assistance.
                </p>
              </div>
            </motion.div>
          </div>

          <div className={styles.buttonContainer}>
            <div className={styles.ctas}>
              <MotionLink
                className={styles.primary}
                href={"./services"}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 20,
                }}
              >
                Services
              </MotionLink>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <div className={styles.contactText}>
            <h2>Get Started Today</h2>

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
