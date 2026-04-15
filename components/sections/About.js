"use client";

import { aboutData, whatIDo } from "@/data/about";
import styles from "./About.module.css";

const highlights = [
    {
        label: "React & Next.js",
        sub: "App Router · RSC · Server Actions",
        icon: "⚛",
    },
    {
        label: "Performance",
        sub: "40% faster FCP · Image opt · Lazy loading",
        icon: "⚡",
    },
    {
        label: "Full-Stack",
        sub: "Node · Express · REST APIs · SQLite",
        icon: "🗄",
    },
    {
        label: "Clean Code",
        sub: "Maintainable · Modular · Scalable",
        icon: "✦",
    },
];

const whatIDoIcons = ["◈", "◉", "◎", "◆"];

export default function About() {
    return (
        <section id="about" className={styles.section}>
            <div className={styles.header}>
                <span className={styles.eyebrow}>01 / About</span>
                <h2 className={styles.title}>
                    Building interfaces that{" "}
                    <em className={styles.em}>perform</em> as well as they look.
                </h2>
            </div>

            <div className={styles.split}>
                <div className={styles.bio}>
                    <p className={styles.lead}>
                        I'm <strong>Sneha Valavade</strong> — a frontend
                        engineer focused on React and Next.js, with a bias
                        toward <mark className={styles.mark}>performance</mark>{" "}
                        and{" "}
                        <mark className={styles.mark}>clean architecture</mark>.
                    </p>
                    <p className={styles.body}>
                        I've built full-stack apps using the Next.js App Router,
                        React Server Components, and Server Actions — shipping
                        real reductions in Time to First Contentful Paint and
                        measurable drops in runtime errors. I care about the
                        code behind the interface as much as the interface
                        itself.
                    </p>
                    <p className={styles.body}>
                        Currently seeking frontend roles where I can build
                        impactful products and push both design and engineering
                        quality.
                    </p>
                </div>

                <div className={styles.statStrip}>
                    {highlights.map((h, i) => (
                        <div key={i} className={styles.statCard}>
                            <span className={styles.statIcon}>{h.icon}</span>
                            <span className={styles.statLabel}>{h.label}</span>
                            <span className={styles.statSub}>{h.sub}</span>
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.whatBlock}>
                <span className={styles.blockEyebrow}>What I Do</span>
                <div className={styles.whatGrid}>
                    {whatIDo.map((item, i) => (
                        <div key={i} className={styles.whatCard}>
                            <span className={styles.whatIcon}>
                                {whatIDoIcons[i]}
                            </span>
                            <h3 className={styles.whatTitle}>{item.title}</h3>
                            <p className={styles.whatDesc}>{item.desc}</p>
                            <div className={styles.whatLine} />
                        </div>
                    ))}
                </div>
            </div>

            <div className={styles.strengthBlock}>
                <span className={styles.blockEyebrow}>Key Strengths</span>
                <ul className={styles.badges}>
                    {aboutData.highlights.map((h, i) => (
                        <li key={i} className={styles.badge}>
                            {h}
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}
