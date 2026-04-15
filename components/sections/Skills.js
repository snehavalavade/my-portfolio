"use client";

import styles from "./Skills.module.css";

const skillGroups = [
    {
        label: "Frontend",
        items: [
            {
                name: "JavaScript",
                color: "#F7DF1E",
                svg: (
                    <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                        <rect width="32" height="32" rx="3" fill="#F7DF1E" />
                        <path
                            d="M9.5 24.5l2.1-1.27c.4.72.77 1.32 1.65 1.32.84 0 1.37-.33 1.37-1.6V15h2.6v8c0 2.64-1.55 3.84-3.8 3.84-2.04 0-3.22-1.05-3.82-2.34zM18.5 24.2l2.1-1.22c.55.9 1.27 1.56 2.54 1.56 1.07 0 1.75-.53 1.75-1.27 0-.88-.7-1.2-1.88-1.7l-.65-.28c-1.86-.79-3.1-1.78-3.1-3.88 0-1.93 1.47-3.4 3.77-3.4 1.64 0 2.82.57 3.66 2.05l-2 1.28c-.44-.79-.92-1.1-1.66-1.1-.75 0-1.23.48-1.23 1.1 0 .77.48 1.08 1.58 1.55l.65.28c2.19.94 3.44 1.9 3.44 4.05 0 2.32-1.82 3.59-4.27 3.59-2.39 0-3.94-1.14-4.7-2.61z"
                            fill="#000"
                        />
                    </svg>
                ),
            },
            {
                name: "React",
                color: "#61DAFB",
                svg: (
                    <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle cx="16" cy="16" r="2.6" fill="#61DAFB" />
                        <ellipse
                            cx="16"
                            cy="16"
                            rx="12.5"
                            ry="4.8"
                            stroke="#61DAFB"
                            strokeWidth="1.4"
                            fill="none"
                        />
                        <ellipse
                            cx="16"
                            cy="16"
                            rx="12.5"
                            ry="4.8"
                            stroke="#61DAFB"
                            strokeWidth="1.4"
                            fill="none"
                            transform="rotate(60 16 16)"
                        />
                        <ellipse
                            cx="16"
                            cy="16"
                            rx="12.5"
                            ry="4.8"
                            stroke="#61DAFB"
                            strokeWidth="1.4"
                            fill="none"
                            transform="rotate(120 16 16)"
                        />
                    </svg>
                ),
            },
            {
                name: "Next.js",
                color: "#ffffff",
                svg: (
                    <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <circle
                            cx="16"
                            cy="16"
                            r="13.5"
                            fill="#0a0a0a"
                            stroke="#444"
                            strokeWidth="1"
                        />
                        <path
                            d="M9.5 22V10l14.5 16.5h-3.5L9.5 14v8z"
                            fill="white"
                        />
                        <path d="M20.5 10h2.5v9L20.5 16V10z" fill="white" />
                    </svg>
                ),
            },
            {
                name: "HTML5",
                color: "#E34F26",
                svg: (
                    <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.5 2l2.2 24.6L16 29l9.3-2.4L27.5 2H4.5z"
                            fill="#E34F26"
                        />
                        <path
                            d="M16 27.2l7.5-2.1 1.9-20.7H16v22.8z"
                            fill="#EF652A"
                        />
                        <path
                            d="M16 13.5h-4.4l-.32-3.2H16V7.2H7.8l.85 9.5H16v-3.2zM16 16.7h4.1l-.38 4.6-3.72.95V25.2l6.74-1.87.94-10.63H16v3.0z"
                            fill="white"
                        />
                        <path
                            d="M16 22l-.06.02-3.65-.99-.23-2.7H8.8l.46 5.2 6.74 1.87V22z"
                            fill="#EBEBEB"
                        />
                    </svg>
                ),
            },
            {
                name: "CSS3",
                color: "#1572B6",
                svg: (
                    <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M4.5 2l2.2 24.6L16 29l9.3-2.4L27.5 2H4.5z"
                            fill="#1572B6"
                        />
                        <path
                            d="M16 27.2l7.5-2.1 1.9-20.7H16v22.8z"
                            fill="#33A9DC"
                        />
                        <path
                            d="M16 13.5h-4.8l.3 3.2H16v-3.2zm0-6.3H7.5l.3 3.2H16V7.2zM16 16.7v3.2h3.75l-.35 4.6-3.4.92V28.1l6.7-1.87.1-.7 1.3-14.83H16z"
                            fill="white"
                        />
                        <path
                            d="M16 22l-.06.02-3.65-.99-.23-2.7H8.8l.46 5.2 6.74 1.87V22z"
                            fill="#EBEBEB"
                        />
                    </svg>
                ),
            },
        ],
    },
    {
        label: "Backend & APIs",
        items: [
            {
                name: "Node.js",
                color: "#68A063",
                svg: (
                    <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M16 3L3.5 10.25v14.5L16 32l12.5-7.25V10.25L16 3z"
                            fill="#539E43"
                        />
                        <text
                            x="16"
                            y="19.5"
                            textAnchor="middle"
                            fill="white"
                            fontSize="6"
                            fontWeight="bold"
                            fontFamily="monospace"
                        >
                            Node
                        </text>
                    </svg>
                ),
            },
            { name: "Express.js", color: "#c6c6c6", svg: null },
            { name: "SQLite", color: "#5b9bd5", svg: null },
            { name: "REST APIs", color: "#ff8a65", svg: null },
            { name: "JDBC", color: "#b0bec5", svg: null },
        ],
    },
    {
        label: "Tools & Workflow",
        items: [
            {
                name: "Git",
                color: "#F05032",
                svg: (
                    <svg
                        viewBox="0 0 32 32"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M29.47 14.53l-12-12a2 2 0 00-2.83 0l-2.82 2.83 3.58 3.58a2.37 2.37 0 013 3.01l3.45 3.45a2.37 2.37 0 11-1.41 1.41l-3.22-3.22v8.47a2.37 2.37 0 11-2 0v-8.55a2.37 2.37 0 01-1.26-3.12l-3.52-3.52-9.31 9.31a2 2 0 000 2.83l12 12a2 2 0 002.83 0l12-12a2 2 0 000-2.83z"
                            fill="#F05032"
                        />
                    </svg>
                ),
            },
            {
                name: "GitHub",
                color: "#e6e6e6",
                svg: (
                    <svg
                        viewBox="0 0 32 32"
                        fill="#e6e6e6"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M16 2C8.27 2 2 8.27 2 16c0 6.19 4.01 11.43 9.57 13.29.7.13.96-.3.96-.67v-2.35c-3.89.85-4.71-1.87-4.71-1.87-.63-1.62-1.55-2.05-1.55-2.05-1.27-.87.1-.85.1-.85 1.4.1 2.14 1.44 2.14 1.44 1.25 2.14 3.27 1.52 4.07 1.16.13-.9.49-1.52.89-1.87-3.1-.35-6.36-1.55-6.36-6.9 0-1.52.54-2.77 1.44-3.74-.14-.35-.62-1.77.14-3.69 0 0 1.17-.37 3.84 1.43a13.38 13.38 0 017 0c2.67-1.8 3.84-1.43 3.84-1.43.76 1.92.28 3.34.14 3.69.9.97 1.44 2.22 1.44 3.74 0 5.36-3.27 6.54-6.38 6.88.5.44.95 1.3.95 2.62v3.88c0 .38.25.81.96.67C25.99 27.43 30 22.19 30 16c0-7.73-6.27-14-14-14z" />
                    </svg>
                ),
            },
            { name: "VS Code", color: "#007ACC", svg: null },
        ],
    },
    {
        label: "Languages",
        items: [
            { name: "Java", color: "#ED8B00", svg: null },
            { name: "Python", color: "#3776AB", svg: null },
            { name: "C", color: "#A8B9CC", svg: null },
            { name: "C++", color: "#00599C", svg: null },
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className={styles.section}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>04 / Skills</span>
                <h2 className={styles.title}>Tech Stack</h2>
                <p className={styles.subtitle}>
                    Technologies I work with daily to ship fast, scalable web
                    applications.
                </p>
            </div>

            <div className={styles.groups}>
                {skillGroups.map((group) => (
                    <div key={group.label} className={styles.group}>
                        <span className={styles.groupLabel}>{group.label}</span>
                        <div className={styles.trackOuter}>
                            <div className={styles.track}>
                                {group.items.map((skill) => (
                                    <div
                                        key={skill.name}
                                        className={styles.card}
                                        style={{ "--brand": skill.color }}
                                    >
                                        <div className={styles.iconBox}>
                                            {skill.svg ? (
                                                <span
                                                    className={styles.svgWrap}
                                                >
                                                    {skill.svg}
                                                </span>
                                            ) : (
                                                <span className={styles.abbr}>
                                                    {skill.name
                                                        .slice(0, 2)
                                                        .toUpperCase()}
                                                </span>
                                            )}
                                        </div>
                                        <span className={styles.name}>
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
