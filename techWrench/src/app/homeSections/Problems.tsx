import styles from "./problems.module.css";
import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export default function Problems() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return(
<section className={styles.problems}>
          <h2>The Hidden Leaks in Your Customer Pipeline</h2>
          <p>
            Most local businesses don't have a lead problem—they have a lead
            conversion problem. Missed calls, slow follow-up, weak online
            visibility, and failing to leverage your existing customers quietly
            cost businesses customers every day.
          </p>
          <div className={styles.leaks}>
            <div className={styles.leak}>
              <button
                className={styles.leakHeader}
                onClick={() => setOpenIndex(openIndex === 0 ? null : 0)}
              >
                <h3>Buried Local Visibility</h3>
                <motion.span
                  className={styles.leakIcon}
                  animate={{ rotate: openIndex === 0 ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === 0 && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      marginTop: "0.75rem",
                    }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    An outdated website, weak local SEO, too few reviews, and an
                    under-optimized Google Business Profile make it harder for
                    customers to discover and trust your business.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className={styles.leak}>
              <button
                className={styles.leakHeader}
                onClick={() => setOpenIndex(openIndex === 1 ? null : 1)}
              >
                <h3>Missed Phone Opportunities</h3>
                <motion.span
                  className={styles.leakIcon}
                  animate={{ rotate: openIndex === 1 ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === 1 && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      marginTop: "0.75rem",
                    }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    Over half of inbound business calls go unanswered after
                    business hours or when you're out in the field. Without an
                    instant response, those homeowners immediately move on to
                    your closest competitor.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className={styles.leak}>
              <button
                className={styles.leakHeader}
                onClick={() => setOpenIndex(openIndex === 2 ? null : 2)}
              >
                <h3>Slow Follow-Up</h3>
                <motion.span
                  className={styles.leakIcon}
                  animate={{ rotate: openIndex === 2 ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === 2 && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      marginTop: "0.75rem",
                    }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    80% of leads choose the contractor who responds first.
                    Letting website contact forms or Facebook messages sit
                    untouched for even an hour slashes your booking rate to near
                    zero.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>

            <div className={styles.leak}>
              <button
                className={styles.leakHeader}
                onClick={() => setOpenIndex(openIndex === 3 ? null : 3)}
              >
                <h3>Lost Repeat & Referral Business</h3>
                <motion.span
                  className={styles.leakIcon}
                  animate={{ rotate: openIndex === 3 ? 45 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  +
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {openIndex === 3 && (
                  <motion.p
                    initial={{ opacity: 0, height: 0, marginTop: 0 }}
                    animate={{
                      opacity: 1,
                      height: "auto",
                      marginTop: "0.75rem",
                    }}
                    exit={{ opacity: 0, height: 0, marginTop: 0 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    style={{ overflow: "hidden" }}
                  >
                    Your past customers are your most profitable asset. Leaving
                    them stranded without consistent check-ins or automated
                    referral requests leaves massive revenue trapped inside your
                    old client lists.
                  </motion.p>
                )}
              </AnimatePresence>
            </div>
          </div>
        </section>
    )
}