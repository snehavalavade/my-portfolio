import Sidebar from "@/components/sidebar/Sidebar";
import Navbar from "@/components/navbar/Navbar";
import About from "@/components/sections/About";
import Resume from "@/components/sections/Resume";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Contact from "@/components/sections/Contact";
import styles from "./page.module.css";

export default function Page() {
    return (
        <div className={styles.layout}>
            <Sidebar />
            <div className={styles.main}>
                <Navbar />
                <main className={styles.content}>
                    <About />
                    <Resume />
                    <Projects />
                    <Skills />
                    <Contact />
                </main>
            </div>
        </div>
    );
}
