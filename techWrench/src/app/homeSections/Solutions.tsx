import styles from "./solutions.module.css";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import Link from "next/link";

export default function Solutions() {
  const MotionLink = motion.create(Link);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const check = () => setIsLargeScreen(window.innerWidth > 600);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  return (
    <section className={styles.services}>
      <h1>Solutions</h1>
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
                  Local SEO Foundation & Google Business Profile optimization
                </li>
                <li>Website hosting, security, and monthly maintenance</li>
                <li>
                  <b>Missed-Call Text Back:</b>automatically text back missed
                  calls to never miss an opportunity
                </li>
              </ul>
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
                  <b>Automated Review Generation:</b> SMS/Email review campaigns
                  to win the Google Maps ranking game.
                </li>
                <li>
                  <b>Unified Lead Inbox:</b> All FB messages, Google chats, SMS,
                  and website leads in one screen.
                </li>
                <li>
                  <b>Lead Nurturing & Automation:</b> Instant automated
                  follow-ups, pipeline tracking, and online calendar booking.
                </li>
              </ul>
            </div>
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
                  <b>Google Local Services Ads (LSA):</b> Setup and weekly
                  management
                </li>
                <li>
                  <b>Database Reactivation:</b> Running seasonal email/SMS
                  campaigns to their existing customer list to unearth "hidden"
                  revenue.
                </li>
                <li>
                  <b>Referral & Loyalty Systems:</b> Automated post-job referral
                  request workflows.
                </li>
              </ul>
            </div>
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
            Learn More
          </MotionLink>
        </div>
      </div>
    </section>
  );
}
