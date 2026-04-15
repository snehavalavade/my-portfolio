import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <h2 className="section-title">Projects</h2>
            <div className={styles.grid}>
                {projects.map((project, i) => (
                    <div key={i} className={styles.card}>
                        <div className={styles.cardTop}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <p className={styles.subtitle}>
                                {project.subtitle}
                            </p>
                            <p className={styles.desc}>{project.description}</p>
                        </div>

                        <ul className={styles.points}>
                            {project.points.map((pt, j) => (
                                <li key={j} className={styles.point}>
                                    {pt}
                                </li>
                            ))}
                        </ul>

                        <div className={styles.tags}>
                            {project.tags.map((tag, j) => (
                                <span key={j} className={styles.tag}>
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className={styles.links}>
                            {project.github && (
                                <a
                                    href={project.github}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={styles.linkBtn}
                                >
                                    GitHub
                                </a>
                            )}
                            {project.live && (
                                <a
                                    href={project.live}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`${styles.linkBtn} ${styles.live}`}
                                >
                                    Live
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
