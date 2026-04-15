import { experience } from "@/data/experience";
import { education, certificates } from "@/data/education";
import { personal } from "@/data/personal";
import styles from "./Resume.module.css";

const DownloadIcon = () => (
    <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7 10 12 15 17 10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const BriefcaseIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
        <line x1="12" y1="12" x2="12" y2="12" />
    </svg>
);

const GraduationIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c3 3 9 3 12 0v-5" />
    </svg>
);

const CertIcon = () => (
    <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <circle cx="12" cy="8" r="6" />
        <path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11" />
    </svg>
);

export default function Resume() {
    return (
        <section id="resume" className={styles.section}>
            <div className={styles.topBar}>
                <div>
                    <span className={styles.eyebrow}>02 / Resume</span>
                    <h2 className={styles.title}>Experience & Education</h2>
                </div>
                <a
                    href={personal.resumePdf}
                    download
                    className={styles.downloadBtn}
                >
                    <DownloadIcon />
                    Download CV
                </a>
            </div>

            <div className={styles.columns}>
                <div className={styles.col}>
                    <div className={styles.colHeader}>
                        <span className={styles.colIcon}>
                            <BriefcaseIcon />
                        </span>
                        <h3 className={styles.colTitle}>Experience</h3>
                    </div>

                    <div className={styles.timeline}>
                        {experience.map((exp, i) => (
                            <div key={i} className={styles.item}>
                                <div className={styles.itemDot} />
                                <div className={styles.itemCard}>
                                    <div className={styles.itemTop}>
                                        <div>
                                            <h4 className={styles.itemRole}>
                                                {exp.role}
                                            </h4>
                                            <p className={styles.itemCompany}>
                                                {exp.company}
                                            </p>
                                        </div>
                                        <span className={styles.duration}>
                                            {exp.duration}
                                        </span>
                                    </div>
                                    <ul className={styles.points}>
                                        {exp.points.map((pt, j) => (
                                            <li
                                                key={j}
                                                className={styles.point}
                                            >
                                                {pt}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className={styles.col}>
                    <div className={styles.colHeader}>
                        <span className={styles.colIcon}>
                            <GraduationIcon />
                        </span>
                        <h3 className={styles.colTitle}>Education</h3>
                    </div>

                    <div className={styles.timeline}>
                        {education.map((edu, i) => (
                            <div key={i} className={styles.item}>
                                <div className={styles.itemDot} />
                                <div className={styles.itemCard}>
                                    <div className={styles.itemTop}>
                                        <div>
                                            <h4 className={styles.itemRole}>
                                                {edu.degree}
                                                {edu.degree && " —"} {edu.field}
                                            </h4>
                                            <p className={styles.itemCompany}>
                                                {edu.institution}
                                            </p>
                                        </div>
                                        <span className={styles.duration}>
                                            {edu.duration}
                                        </span>
                                    </div>
                                    <span className={styles.grade}>
                                        {edu.grade}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
