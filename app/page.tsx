"use client"

import Styles from './page.module.scss';
import Hero from '../app/home/hero';
import CardsSection from './home/cardsSection';
import ContactForm from './_components/form';
import CtaHome from './home/_components/cta';
import AboutSection from './home/aboutSection';
import RecentsSection from './home/recentsSection';

export default function Home() {
    return (
        <>
            <section className={Styles.sectionHero}>
                <Hero />
            </section>
            <section className={Styles.sectionCards}>
                <CardsSection />
            </section>
            <section className={Styles.sectionCta}>
                <CtaHome />
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