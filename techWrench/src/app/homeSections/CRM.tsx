import styles from "./crm.module.css";
import { motion } from "motion/react";

export default function CRM() {
  return (
    <section className={styles.crm}>
      <h1>Every Lead on One Platform</h1>
      <p>
        Most local businesses juggle phone calls, text messages, website
        inquiries, Facebook messages, and Google chats across multiple apps.
        Tech Wrench centralizes every conversation into one system and automates
        follow-up so opportunities never slip through the cracks.
      </p>
      <div className={styles.crmFeatures}>
        <motion.div
          className={styles.crmFeatureWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.crmFeature}>
            <h3 className={styles.crmTitle}>Unified lead inbox</h3>
            <div className={styles.crmFeatureContent}>
              <p>
                Manage website leads, text messages, Facebook messages, Google
                chats, and missed calls from a single dashboard.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.crmFeatureWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.crmFeature}>
            <h3 className={styles.crmTitle}>Automated Follow-Up</h3>
            <div className={styles.crmFeatureContent}>
              <p>
                Respond to new leads within seconds using automated SMS and
                email workflows, even when you're busy serving customers or
                after regular business hours.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.crmFeatureWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.crmFeature}>
            <h3 className={styles.crmTitle}>Lead Pipeline Management</h3>
            <div className={styles.crmFeatureContent}>
              <p>
                Track every prospect from inquiry, to estimate, to completed
                job, and beyond so you always know where your opportunities
                stand.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          className={styles.crmFeatureWrapper}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.2 }}
        >
          <div className={styles.crmFeature}>
            <h3 className={styles.crmTitle}>Appointment Booking</h3>
            <div className={styles.crmFeatureContent}>
              <p>
                Let customers schedule estimates and consultations online while
                reducing the back-and-forth of phone calls and voicemails.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
