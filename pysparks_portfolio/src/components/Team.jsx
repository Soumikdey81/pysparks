import { useEffect, useRef, useState } from "react";
import styles from "./Team.module.css";

const founders = [
  {
    name: "Esther Bryce",
    role: "Founder · Interior Designer",
    imgSrc: "/team.avif",
  },
  { name: "Lianne Wilson", role: "Founder · Broker", imgSrc: "/team.avif" },
];

const consultants = [
  { name: "Consultant One", role: "Sales Consultant", imgSrc: "/team.avif" },
  {
    name: "Consultant Two",
    role: "Architect Consultant",
    imgSrc: "/team.avif",
  },
  {
    name: "Consultant Three",
    role: "Interior Consultant",
    imgSrc: "/team.avif",
  },
];

const advisors = [
  { name: "Advisor One", role: "Senior Advisor", imgSrc: "/team.avif" },
  { name: "Advisor Two", role: "Marketing Advisor", imgSrc: "/team.avif" },
  { name: "Advisor Three", role: "Strategic Advisor", imgSrc: "/team.avif" },
  { name: "Advisor Four", role: "Financial Advisor", imgSrc: "/team.avif" },
];

export default function MeetOurTeam() {
  const containerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) observer.observe(containerRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={containerRef}
      className={`${styles.teamSection} ${visible ? styles.visible : ""}`}
    >
      <div className={styles.intro}>
        <h1 className={styles.title}>
          Meet Our Team
          <span className={styles.titleUnderline}></span>
        </h1>
        <p className={styles.description}>
          Our strength lies in our individuality. Set up by Esther Bryce,
          Presson's team strives to bring in the best talent in various fields,
          from architecture to interior design and sales.
        </p>
      </div>

      {/* Founders */}
      <div
        className={`${styles.group} ${styles.founders}`}
        style={{ "--delay": "0s" }}
      >
        <h2 className={styles.groupTitle}>
          Founders <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {founders.map(({ name, role, imgSrc }) => (
            <div key={name} className={styles.member}>
              <img src={imgSrc} alt={name} className={styles.photo} />
              <div className={styles["member-text"]}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Consultants */}
      <div
        className={`${styles.group} ${styles.consultants}`}
        style={{ "--delay": "0.3s" }}
      >
        <h2 className={styles.groupTitle}>
          Consultants <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {consultants.map(({ name, role, imgSrc }) => (
            <div key={name} className={styles.member}>
              <img src={imgSrc} alt={name} className={styles.photo} />
              <div className={styles["member-text"]}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Advisors */}
      <div
        className={`${styles.group} ${styles.advisors}`}
        style={{ "--delay": "0.6s" }}
      >
        <h2 className={styles.groupTitle}>
          Advisors <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {advisors.map(({ name, role, imgSrc }) => (
            <div key={name} className={styles.member}>
              <img src={imgSrc} alt={name} className={styles.photo} />
              <div className={styles["member-text"]}>
                <h3 className={styles.name}>{name}</h3>
                <p className={styles.role}>{role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
