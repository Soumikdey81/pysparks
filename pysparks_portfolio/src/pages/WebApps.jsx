import styles from "./WebApps.module.css";
import { FaReact, FaNodeJs, FaDatabase, FaCloud } from "react-icons/fa";

export default function WebApplicationDevelopment() {
  return (
    <section className={styles.webdev}>
      <div className={styles.imageContainer}>
        <img
          src="/homepage.avif"
          alt="Web application development"
          className={styles.image}
        />
      </div>

      <div className={styles.text}>
        <h1>Web Application Development</h1>
        <p>
          We design and develop modern, scalable, and high-performing web
          applications tailored to your business needs. Our team leverages
          cutting-edge frameworks and cloud-first strategies to build
          applications that drive efficiency and deliver seamless user
          experiences.
        </p>
        <p>
          From MVPs to enterprise-grade systems, we ensure that every web
          application we craft is secure, optimized, and future-ready.
        </p>

        <h2 className={styles.servicesTitle}>Our Expertise</h2>
        <ul className={styles.servicesList}>
          <li>
            <FaReact /> Custom Web Applications with React & Angular
          </li>
          <li>
            <FaNodeJs /> Backend Development with Node.js & Express
          </li>
          <li>
            <FaDatabase /> Scalable Databases & API Integration
          </li>
          <li>
            <FaCloud /> Cloud-Native & Serverless Applications
          </li>
          <li>Progressive Web Apps (PWAs)</li>
          <li>Enterprise Software Solutions</li>
          <li>Performance Optimization & Security</li>
        </ul>
      </div>
    </section>
  );
}
