import HeroTop from "./_components/heroTop";
import Styles from "./Projects.module.scss";

export default function Projects() {
    return (
        <main className={Styles.projects}>
            <section className={Styles.projects__hero}>
                <HeroTop />
            </section>
            <section className={Styles.projects__projects}>
                <h2 className={Styles.projects__projects__title}>Recent Projects</h2>
            </section>
        </main>
    );
}