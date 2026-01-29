import Styles from './page.module.scss';
import Hero from '../app/home/hero';
import CardsSection from './home/cardsSection';
import CtaHome from './home/_components/cta';
import AboutSection from './home/aboutSection';
import RecentsSection from './home/recentsSection';

export default function Home() {
    return (
        <>
            <section className={Styles.sectionHero}>
                <Hero />
            </section>
            <section className={Styles.sectionCta}>
                <CtaHome
                    title="Explore my latest work"
                    text="Ideas that came off the page and came to life digitally."
                    buttonText="See all projects"
                    href="/projects"
                />
            </section>
            <section className={Styles.sectionCards}>
                <CardsSection />
            </section>
            <section className={Styles.sectionCta}>
                <CtaHome
                    title="Ready to get started?"
                    text="I work closely with you to turn your vision into a solid digital presence."
                    buttonText="Contact me"
                    href="/contact"
                />
            </section>
            <section className={Styles.sectionAbout}>
                <AboutSection />
            </section>
            <section className={Styles.sectionRecents}>
                <RecentsSection />
            </section>
        </>
    );
}