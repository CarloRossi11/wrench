"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HamburgerMenu from "./components/HamburgerMenu";
import useIsMobile from "./hooks/useIsMobile";
import ContactForm from "./components/ContactForm";

// ToDo: //
//////////
// add portfolio
// update seo files ?
// add layering
// 1.618 fonts
// contact form button
// header logo & contact

// adjust max width on text sections -DONE
// increase white space -DONE
// uniform button colors/ accessibility -DONE
// adjust features ul/li use -DONE

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
          <h2>Website Development Service</h2>
          <p>
            Our flagship service is custom website development for small
            businesses. We work closely with our clients to understand their
            unique needs and goals, and then create a website that not only
            looks great but also drives results.
          </p>
          <div className={styles.features}>
            <h3>Our Websites:</h3>
            <div>
              <div className={styles.feature}>
                <p className={styles.bullet}>Load quickly</p>
                <p className={styles.support}>
                  Every website we develop has a 95+ performance score, this
                  promotes user interaction and reduces churn.
                </p>
              </div>
              <div className={styles.feature}>
                <p className={styles.bullet}>
                  Responsive Design for Mobile and Desktop
                </p>
                <p className={styles.support}>
                  We design each site to look and behave beautifully on every
                  screen size, from the smallest phone to the largest monitor.
                </p>
              </div>
              <div className={styles.feature}>
                <p className={styles.bullet}>Search Engine Optimized (SEO)</p>
                <p className={styles.support}>
                  There's no point in having a stunning website if nobody is
                  going to see it. That's why we make sure each website is as
                  optimzed as possible to populate high in search results.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.services}>
          <h1>Our Products</h1>
          <div className={styles.servicesContent}>
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
          </div>
          <div className={styles.buttonContainer}>
            <div className={styles.ctas}>
              <a className={styles.primary} href={"/services"}>
                Services
              </a>
            </div>
          </div>
        </section>

        <section className={styles.contact}>
          <h2>Get Started Today</h2>
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
