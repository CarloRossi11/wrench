"use client";

import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import useIsMobile from "./hooks/useIsMobile";
import ContactForm from "./components/ContactForm";

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
          <div className={styles.ctas}>
            <a className={styles.primary} href={"./contact"}>
              Contact
            </a>
          </div>
        </div>
      </section>

      <main className={styles.main}>
        <section className={styles.weDo}>
          <div className={styles.weDoLeft}>
            <h2>Website Development Service</h2>
            <p>
              With over 5 years of deveplopment experience, we specialize in
              creating custom websites that not only look great but also drive
              results. Our websites load quickly, are mobile-friendly, and are
              optimized for search engines to help your business get found
              online.
            </p>
            <div className={styles.ctas}>
              {/* <Link className={styles.primary} href="/about">
                View Services
              </Link> */}
            </div>
          </div>

          <div className={styles.weDoRight}>
            <h2>Our Websites</h2>
            <ul>
              <li>Load quickly</li>
              <li>Responsive Design for Mobile and Desktop</li>
              <li>Search Engine Optimized (SEO)</li>
            </ul>
            <div className={styles.ctas}>
              {/* <Link className={styles.primary} href="/about">
                View Services
              </Link> */}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
