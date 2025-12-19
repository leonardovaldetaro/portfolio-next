"use client";

import { useState, useEffect } from "react";
import LogoHeader from "next/image";
import Styles from "./header.module.scss";
import Link from "next/link";
import Nav from "./_nav";

export default function Header() {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollY = window.scrollY;

            if (currentScrollY > lastScrollY && currentScrollY > 50) {
                // Rolagem para baixo e passou 100px
                setIsVisible(false);
            } else {
                // Rolagem para cima
                setIsVisible(true);
            }

            setLastScrollY(currentScrollY);
        };

        window.addEventListener("scroll", handleScroll); // Corrigido para "scroll"

        return () => {
            window.removeEventListener("scroll", handleScroll); // Corrigido para "scroll"
        };
    }, [lastScrollY]); // Mantém a dependência para atualizar corretamente

    return (
        <header
            className={`${Styles.header} ${isVisible ? Styles.headerVisible : Styles.headerHidden
                }`}
        >
            <div className={Styles.container}>
                <div className={Styles.logoContainer}>
                    <Link href="/" className={Styles.logoContainer__link}>
                        <LogoHeader
                            src="/assets/simbol.svg"
                            alt="Logotype Symbol Leonardo Valdetaro Web Developer"
                            width={50}
                            height={50}
                            className={Styles.logoContainer__img}
                        />
                    </Link>
                    <span className={Styles.logoContainer__name}>Leonardo<br />Valdetaro</span>
                </div>
                <Nav />
            </div>
        </header>
    );
}
