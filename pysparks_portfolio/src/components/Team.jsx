import { useEffect, useRef, useState } from "react";
import styles from "./Team.module.css";
import teamData from "../data/team.json";

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
          Our strength lies in our diversity and expertise. Established with a
          vision to deliver cutting-edge solutions, our team brings together
          specialists from business consulting, technology, digital marketing,
          finance, and cybersecurity — all working together to provide
          innovative and reliable services for our clients.
        </p>
      </div>

      {/* Founders */}
      <div
        className={`${styles.group} ${styles.founders}`}
        style={{ "--delay": "0s" }}
      >
        <h2 className={styles.groupTitle}>
          Founding Members <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {teamData.founders.map(({ name, role, imgSrc }) => (
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
          {teamData.consultants.map(({ name, role, imgSrc }) => (
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

      {/* Expert Advisors */}
      <div
        className={`${styles.group} ${styles.advisors}`}
        style={{ "--delay": "0.6s" }}
      >
        <h2 className={styles.groupTitle}>
          Expert Advisor Committee
          <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {teamData.expertAdvisors.map(({ name, role, imgSrc }) => (
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

      {/* Extended Team Members */}
      <div
        className={`${styles.group} ${styles.advisors}`}
        style={{ "--delay": "0.6s" }}
      >
        <h2 className={styles.groupTitle}>
          Extended Team Members <span className={styles.groupUnderline}></span>
        </h2>
        <div className={styles.members}>
          {teamData.extendedTeamMembers.map(({ name, role, imgSrc }) => (
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
