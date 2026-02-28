"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import useIsMobile from "./hooks/useIsMobile";
import ContactForm from "./components/ContactForm";
import { motion } from "motion/react";

// ToDo: //
//////////
// contact form button
// add layering
// add portfolio
// 1.618 fonts

export default function HomeClient() {
  const isMobile = useIsMobile(850);

  return (
    <div className={styles.page}>
      <div className={styles.navBar}>
        {isMobile ? <HamburgerMenu /> : <Header />}
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
            At Tech Wrench, we specialize in quick loading, responsive, lead
            generating websites for small businesses. Our websites are custom
            designed and hand coded to fit your specific needs -no Wordpress or
            AI slop. Our sites not only look great on both mobile and desktop
            screens, but also load quickly and are Search Engine Optimized
            (SEO). This means that not only will customers see your site, they
            will have a premimum experience when they visit it.
          </p>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className={styles.ctas}>
              <Link className={styles.primary} href={"./contact"}>
                Get Started
              </Link>
            </div>
          </motion.a>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.weDo}>
          <h2>Website Development Service</h2>
          <p>
            Our flagship service is custom website development for small
            businesses. We work closely with our clients to understand their
            unique needs and goals, and then create a website that not only
            looks great but also drives results. Our websites:
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
                  <p className={styles.support}>
                    Every website we develop has a 95+ performance score, this
                    promotes user interaction and reduces churn.
                  </p>
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
                    Responsive Design for Mobile and Desktop
                  </h3>
                  <p className={styles.support}>
                    We design each site to look and behave beautifully on every
                    screen size, from the smallest phone to the largest monitor.
                  </p>
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
                  <p className={styles.support}>
                    There's no point in having a stunning website if nobody is
                    going to see it. That's why we make sure each website is as
                    optimzed as possible to populate high in search results.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className={styles.services}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h1>Our Products</h1>
          </motion.div>

          <div className={styles.servicesContent}>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.establishText}>
                <h2>Starter Package</h2>
                <h3>
                  <i>Starting at $1,000 + $100/month</i>
                </h3>
                <p>
                  {" "}
                  Our flagship product described above, includes the responsive
                  design, SEO, plus hosting, maintenance, and updates.{" "}
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.growText}>
                <h2>Brand Refresh</h2>
                <h3>
                  <i>Contact for pricing</i>
                </h3>
                <p>
                  Work with our design expert to create a new brand book,
                  including primary and secondary logos, fonts, and a color
                  palette. We'll incorporate your custom elements and take your
                  website, social media, and other content to the next level.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className={styles.expandText}>
                <h2>Marketing Boost</h2>
                <h3>
                  <i>Contact for pricing</i>
                </h3>
                <p>
                  Reach even more of your target market with email and text
                  services, google ads, and social media assistance.
                </p>
              </div>
            </motion.div>
          </div>
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 20,
            }}
          >
            <div className={styles.buttonContainer}>
              <div className={styles.ctas}>
                <Link className={styles.primary} href={"/services"}>
                  Services
                </Link>
              </div>
            </div>
          </motion.a>
        </section>

        <section className={styles.contact}>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <h2>Get Started Today</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <ContactForm />
          </motion.div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
