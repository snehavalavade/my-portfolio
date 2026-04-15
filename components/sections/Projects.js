import { projects } from "@/data/projects";
import styles from "./Projects.module.css";

const GithubIcon = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
    </svg>
);

const LiveIcon = () => (
    <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
        <polyline points="15 3 21 3 21 9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const PLACEHOLDER_COLORS = [
    ["#1a1040", "#6c63ff"],
    ["#0d2137", "#38bdf8"],
    ["#1a2e1a", "#4ade80"],
];

export default function Projects() {
    return (
        <section id="projects" className={styles.section}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>03 / Projects</span>
                <h2 className={styles.title}>Selected Work</h2>
                <p className={styles.subtitle}>
                    A few things I've built — full-stack apps with real
                    performance impact.
                </p>
            </div>

            <div className={styles.grid}>
                {projects.map((project, i) => {
                    const [bgColor, accentColor] =
                        PLACEHOLDER_COLORS[i % PLACEHOLDER_COLORS.length];
                    return (
                        <article key={i} className={styles.card}>
                            <div
                                className={styles.preview}
                                style={{ background: bgColor }}
                                aria-hidden="true"
                            >
                                <span
                                    className={styles.previewLabel}
                                    style={{
                                        color: accentColor,
                                        borderColor: accentColor,
                                    }}
                                >
                                    {project.title}
                                </span>
                                <span
                                    className={styles.dot}
                                    style={{
                                        background: accentColor,
                                        top: "18%",
                                        left: "10%",
                                        width: 6,
                                        height: 6,
                                    }}
                                />
                                <span
                                    className={styles.dot}
                                    style={{
                                        background: accentColor,
                                        top: "60%",
                                        right: "12%",
                                        width: 10,
                                        height: 10,
                                        opacity: 0.4,
                                    }}
                                />
                                <span
                                    className={styles.dot}
                                    style={{
                                        background: accentColor,
                                        bottom: "14%",
                                        left: "40%",
                                        width: 4,
                                        height: 4,
                                        opacity: 0.6,
                                    }}
                                />
                            </div>

                            <div className={styles.body}>
                                <div className={styles.meta}>
                                    <h3 className={styles.cardTitle}>
                                        {project.title}
                                    </h3>
                                    <p className={styles.cardSubtitle}>
                                        {project.subtitle}
                                    </p>
                                </div>

                                <p className={styles.desc}>
                                    {project.description}
                                </p>

                                <ul className={styles.bullets}>
                                    {project.points.slice(0, 2).map((pt, j) => (
                                        <li key={j} className={styles.bullet}>
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

                                <div className={styles.actions}>
                                    {project.github && (
                                        <a
                                            href={project.github}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.btnOutline}
                                        >
                                            <GithubIcon /> GitHub
                                        </a>
                                    )}
                                    {project.live ? (
                                        <a
                                            href={project.live}
                                            target="_blank"
                                            rel="noreferrer"
                                            className={styles.btnFill}
                                        >
                                            <LiveIcon /> Live
                                        </a>
                                    ) : (
                                        <span className={styles.btnDisabled}>
                                            No live demo
                                        </span>
                                    )}
                                </div>
                            </div>
                        </article>
                    );
                })}
            </div>
        </section>
    );
}
