"use client"

import LogoHeader from 'next/image';

import Styles from './header.module.scss';
import Link from 'next/link';
import Nav from './_nav';

export default function Header() {
    return (
        <header className={Styles.header}>

            <div className={Styles.logoContainer}>
                <Link href="/" className={Styles.logoContainer__link}>
                    <LogoHeader src="/assets/simbol.svg" alt="Logotype Symbol Leonardo Valdetaro Web Developer" width={50} height={50} className={Styles.logoContainer__img} />
                </Link>
            </div>
            <Nav />
        </header>
    );
}
