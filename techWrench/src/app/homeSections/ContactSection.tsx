import styles from "./contactSection.module.css";
import Image from "next/image";
import ContactForm from "../components/ContactForm";

export default function Contact() {
  return (

        <section className={styles.contact}>
          <div className={styles.contactText}>
            <h1>Get Started Today</h1>

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

  )
}