import { experience } from "@/data/experience";
import { education } from "@/data/education";
import { personal } from "@/data/personal";
import styles from "./Resume.module.css";

export default function Resume() {
    return (
        <section id="resume" className={styles.section}>
            <div className={styles.header}>
                <h2 className="section-title">Resume</h2>
                <a
                    href={personal.resumePdf}
                    download
                    className={styles.downloadBtn}
                >
                    Download CV
                </a>
            </div>

            <div className={styles.group}>
                <h3 className={styles.groupTitle}>Education</h3>
                <div className={styles.timeline}>
                    {education.map((edu, i) => (
                        <div key={i} className={styles.timelineItem}>
                            <div className={styles.timelineDot} />
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineHeader}>
                                    <h4>
                                        {edu.degree} — {edu.field}
                                    </h4>
                                    <span className={styles.duration}>
                                        {edu.duration}
                                    </span>
                                </div>
                                <p className={styles.institution}>
                                    {edu.institution}
                                </p>
                                <span className={styles.grade}>
                                    {edu.grade}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.group}>
                <h3 className={styles.groupTitle}>Experience</h3>
                <div className={styles.timeline}>
                    {experience.map((exp, i) => (
                        <div key={i} className={styles.timelineItem}>
                            <div className={styles.timelineDot} />
                            <div className={styles.timelineContent}>
                                <div className={styles.timelineHeader}>
                                    <h4>{exp.role}</h4>
                                    <span className={styles.duration}>
                                        {exp.duration}
                                    </span>
                                </div>
                                <p className={styles.institution}>
                                    {exp.company}
                                </p>
                                <ul className={styles.points}>
                                    {exp.points.map((pt, j) => (
                                        <li key={j} className={styles.point}>
                                            {pt}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
