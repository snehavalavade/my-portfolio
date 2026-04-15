import { personal } from "@/data/personal";
import styles from "./Contact.module.css";

export default function Contact() {
    return (
        <section id="contact" className={styles.section}>
            <h2 className="section-title">Contact</h2>
            <p className={styles.intro}>
                I'm currently open to frontend opportunities. Feel free to reach
                out!
            </p>
            <div className={styles.cards}>
                <a href={`mailto:${personal.email}`} className={styles.card}>
                    <span className={styles.cardLabel}>Email</span>
                    <span className={styles.cardValue}>{personal.email}</span>
                </a>
                <a
                    href={personal.socials.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.card}
                >
                    <span className={styles.cardLabel}>LinkedIn</span>
                    <span className={styles.cardValue}>Connect with me</span>
                </a>
                <a
                    href={personal.socials.github}
                    target="_blank"
                    rel="noreferrer"
                    className={styles.card}
                >
                    <span className={styles.cardLabel}>GitHub</span>
                    <span className={styles.cardValue}>See my work</span>
                </a>
            </div>
        </section>
    );
}
