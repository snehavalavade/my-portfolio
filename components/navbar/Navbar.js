"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./Navbar.module.css";

const navLinks = ["about", "resume", "projects", "skills", "contact"];

export default function Navbar() {
    const [active, setActive] = useState("about");

    useEffect(() => {
        const handleScroll = () => {
            for (const id of navLinks) {
                const el = document.getElementById(id);
                if (!el) continue;
                const { top } = el.getBoundingClientRect();
                if (top <= 120) setActive(id);
            }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={styles.navbar}>
            <ul className={styles.links}>
                {navLinks.map((link) => (
                    <li key={link}>
                        <Link
                            href={`#${link}`}
                            className={`${styles.link} ${active === link ? styles.active : ""}`}
                        >
                            {link.charAt(0).toUpperCase() + link.slice(1)}
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
