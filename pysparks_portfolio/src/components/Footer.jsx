import { useEffect, useRef, useState } from "react";
import styles from "./Footer.module.css";
import { FaTwitter, FaFacebookF, FaInstagram } from "react-icons/fa";
import Logo from "./Logo";

export default function Footer() {
  const footerRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = footerRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.intersectionRatio >= 0.2) {
          setIsVisible(true);
        }
      },
      { threshold: [0, 0.2, 1] }
    );

    if (node) {
      observer.observe(node);
    }
    return () => {
      if (node) {
        observer.unobserve(node);
      }
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className={`${styles.footer} ${isVisible ? styles.fadeIn : ""}`}
    >
      <Logo className={styles.logo} />
      <div className={styles.contactContainer}>
        <div className={styles.contacts}>
          <h3>CONTACTS</h3>
          <p>123-456-7890</p>
          <a href="mailto:info@presson.com" className={`${styles.email} email`}>
            info@presson.com
          </a>
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
        </div>

        <div className={styles.address}>
          <h3>ADDRESS</h3>
          <p>123 your street name,</p>
          <p>City name, Country, post code</p>
        </div>
      </div>
    </footer>
  );
}
