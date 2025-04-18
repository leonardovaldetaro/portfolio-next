"use client"

import { BUILD_MANIFEST } from 'next/dist/shared/lib/constants';
import Styles from './page.module.scss';
import Hero from '../app/home/hero';
import CardsSection from './home/cardsSection';

export default function Home() {
    return (
        <>
            <section className={Styles.sectionHero}>
                <Hero />
            </section>
            <section className={Styles.sectionCards}>
                <CardsSection />
            </section>
        </>
    );
}