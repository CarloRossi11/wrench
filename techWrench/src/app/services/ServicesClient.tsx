"use client";

import styles from "./services.module.css";
import Footer from "../components/Footer";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "motion/react";
import Reveal from "../components/Reveal";
import Navbar from "../components/Navbar";
import { useState, useEffect, useRef } from "react";

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
    <div className={styles.wrapper} ref={heroRef}>
      <div className={styles.navBar}>
        <Navbar />
      </div>
      <div className={styles.heroArea}>
        <Reveal direction="right">
          <div className={styles.heroText}>
            <h1>SERVICES</h1>
            <p>
              Web solutions designed to help small businesses thrive in a
              technology-driven world.
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
        <div className={styles.services}>
          <div className={styles.servicesContent}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.solution}>
                <h2>Tier 1: The Essential Presence </h2>
                {/* <h3>(Capture & Trust)</h3> */}
                <p>$1,500 setup fee + $149/month</p>
                <i className={styles.beige}>Get Found and Never Miss a Lead</i>
                <div className={styles.included}>
                  <ul>
                    Includes:
                    <li>Custom high-performing website</li>
                    <li>
                      Local SEO Foundation & Google Business Profile
                      optimization
                    </li>
                    <li>Website hosting, security, and monthly maintenance</li>
                    <li>
                      <b>Missed-Call Text Back:</b>automatically text back
                      missed calls to never miss an opportunity
                    </li>
                  </ul>
                </div>
                <p className={styles.beige}>
                  We build your site, manage your hosting, keep your Google
                  profile updated, and activate Missed-Call Text Back, so you
                  stop losing leads to your competitors when you can't answer
                  the phone.
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
              <div className={styles.solution}>
                <h2>
                  Tier 2: The Growth Engine <i>*Recommended Best Seller</i>
                </h2>
                {/* <h3>(Convert & Automate)</h3> */}
                <p>$2,500 setup fee + $499/month</p>
                <i className={styles.beige}>
                  Automate Follow-Up and Convert More Customers{" "}
                </i>
                <div className={styles.included}>
                  <ul>
                    Includes:
                    <li>Everything in Tier 1</li>
                    <li>
                      <b>Automated Review Generation:</b> SMS/Email review
                      campaigns to win the Google Maps ranking game.
                    </li>
                    <li>
                      <b>Unified Lead Inbox:</b> All FB messages, Google chats,
                      SMS, and website leads in one screen.
                    </li>
                    <li>
                      <b>Lead Nurturing & Automation:</b> Instant automated
                      follow-ups, pipeline tracking, and online calendar
                      booking.
                    </li>
                  </ul>
                </div>
                <p className={styles.beige}>
                  We build your entire digital foundation, automate your Google
                  review generation to win the local maps game, and provide a
                  unified CRM inbox to manage all your customer conversations in
                  one place.
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
              <div className={styles.solution}>
                <h2>Tier 3: The Local Authority </h2>
                {/* <h3>(Scale & Accelerate)</h3> */}
                <p>$3,500 setup fee + $799/month</p>
                <i className={styles.beige}>
                  Generate More Leads and Unlock Hidden Revenue
                </i>
                <div className={styles.included}>
                  <ul>
                    Includes:
                    <li>Everything in Tiers 1 & 2</li>
                    <li>
                      <b>Google Local Services Ads (GLA):</b> Setup and weekly
                      management
                    </li>
                    <li>
                      <b>Database Reactivation:</b> Running seasonal email/SMS
                      campaigns to their existing customer list to unearth
                      "hidden" revenue.
                    </li>
                    <li>
                      <b>Referral & Loyalty Systems:</b> Automated post-job
                      referral request workflows.
                    </li>
                  </ul>
                </div>
                <p className={styles.beige}>
                  We handle your website, automation, reviews, and manage your
                  Google Local Services Ads to actively flood your pipeline with
                  qualified, inbound leads.
                </p>
              </div>
            </motion.div>
            
          </div>
          <h3 className={styles.add}>Ask about our Brand Refresh add on!</h3>
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
    </div>
  );
}
