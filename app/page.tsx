"use client"

import { BUILD_MANIFEST } from 'next/dist/shared/lib/constants';
import Styles from './page.module.scss';
import Hero from './home/_components/hero';

export default function Home() {
    return (
        <section className={Styles.sectionHero}>
            <Hero />
        </section>
    );
}