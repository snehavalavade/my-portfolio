import { skills } from "@/data/skills";
import styles from "./Skills.module.css";

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <h2 className="section-title">Skills</h2>
            <div className={styles.grid}>
                {skills.map((skill, i) => (
                    <span key={i} className={styles.badge}>
                        {skill}
                    </span>
                ))}
            </div>
        </section>
    );
}
