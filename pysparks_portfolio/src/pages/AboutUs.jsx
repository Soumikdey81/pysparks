import Navigation from "../components/Navigation";
import styles from "./AboutUs.module.css";
import Footer from "../components/Footer";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";

export default function AboutUs() {
  return (
    <>
      <Navigation />
      <section className={styles.about}>
        <div className={styles.imageContainer}>
          <img
            src="/homepage.avif"
            alt="IT services workspace"
            className={styles.image}
          />
        </div>

        <div className={styles.text}>
          <h1>ABOUT US</h1>
          <p>
            We are a dynamic IT solutions and consulting company, driven by
            innovation and a passion for delivering value to businesses
            worldwide. Our team of experts blends technology with strategy to
            empower organizations with smarter, scalable, and future-ready
            digital solutions.
          </p>
          <p>
            From end-to-end digital transformation to secure business
            operations, we specialize in providing high-impact IT support and
            consultancy tailored to modern enterprises. Our mission is to
            simplify technology, enhance efficiency, and enable sustainable
            growth for our clients.
          </p>

          <h2 className={styles.servicesTitle}>Our Core Services</h2>
          <ul className={styles.servicesList}>
            <li>Business Process & Consulting Solutions</li>
            <li>Web Application Development</li>
            <li>Mobile App Development</li>
            <li>Analytical & Data-driven Solutions</li>
            <li>AI Bots & Automation</li>
            <li>Digital Marketing</li>
            <li>Finance & Accounting Services</li>
            <li>Cyber Crime Investigation</li>
            <li>Cyber Security Consultancy & Solutions</li>
          </ul>

          <div className={styles.socials}>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
          </div>
          <div className={styles.underline}></div>
        </div>
      </section>
      <Footer />
    </>
  );
}
