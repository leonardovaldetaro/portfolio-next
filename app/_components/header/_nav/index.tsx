"use client";

import { useState } from "react";
import Styles from "./nav.module.scss";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import LogoHeader from "next/image";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";

export default function Nav() {
    const pathname = usePathname();

    const [hoveredItem, setHoveredItem] = useState<string | null>(null);

    const [isActive, setActive] = useState(false);
    const [isOpen, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!isOpen);
    };

    const closeMenu = () => {
        setOpen(false);
        setActive(false);
    };

    const menuItems = [
        { label: "Home", to: "/" },
        { label: "About", to: "/about" },
        { label: "Projects", to: "/projects" },
        { label: "Posts", to: "/blog" },
        { label: "Contact", to: "/contact" },
    ];
    return (
        <>
            <nav className={Styles.navbar}>
                <ul className={Styles.menu}>
                    {menuItems.map((rota, index) => (
                        <li className={Styles.menu__item} key={index}>
                            <Link
                                href={rota.to}
                                className={`${Styles.link} ${pathname === rota.to || hoveredItem === rota.label
                                    ? Styles.active
                                    : ""
                                    }`}
                                onMouseEnter={() =>
                                    setHoveredItem(rota.label)
                                }
                                onMouseLeave={() => setHoveredItem(null)}
                            >
                                {rota.label}
                            </Link>
                        </li>
                    ))}
                    <div className={Styles.mobileMenuToggle}>
                        <button
                            className={Styles.mobileMenuToggle__button}
                            onClick={toggleMenu} // Alterna o estado do menu ao clicar no botão
                        >
                            <span className={Styles.menuOpenArrow}>
                                Menu
                                <MdKeyboardArrowDown
                                    className={Styles.menuOpenArrow__icon}
                                />
                            </span>
                        </button>
                    </div>
                </ul>
            </nav>

            <div className={classNames({
                [Styles.overlay]: true,
                [Styles.overlayActive]: isOpen
            })}
                onClick={closeMenu} // Fecha o menu ao clicar no overlay
            ></div>

            {/* Mobile Nav Menu */}
            <nav
                className={classNames({
                    [Styles.mobileNavMenu]: true,
                    [Styles.visible]: isOpen, // Exibe o menu quando isOpen é true
                })}
            >
                <div className={Styles.mobileNavMenu__header}>
                    <div className={Styles.logoContainer}>
                        <Link href="/" className={Styles.logoContainer__link} onClick={closeMenu}>
                            <LogoHeader
                                src="/assets/simbol.svg"
                                alt="Logotype Symbol Leonardo Valdetaro Web Developer"
                                width={50}
                                height={50}
                                className={Styles.logoContainer__img}
                            />
                        </Link>
                    </div>
                    <div className={Styles.mobileNavMenu__close}>
                        <button
                            className={Styles.mobileNavMenu__close__button}
                            onClick={closeMenu} // Fecha o menu ao clicar no botão de fechar
                        >
                            <MdClose className={Styles.mobileNavMenu__close__icon} />
                        </button>
                    </div>
                </div>
                <ul className={Styles.mobileNavMenu__list}>
                    {menuItems.map((rota, index) => (
                        <li className={Styles.mobileNavMenu__list__item} key={index}>
                            <Link href={rota.to} className={Styles.link} onClick={closeMenu}>
                                {rota.label}
                            </Link>
                        </li>
                    ))}
                </ul>
                <footer className={Styles.mobileNavMenu__footer}>
                    <p>© {new Date().getFullYear()} Leonardo Valdetaro. All rights reserved.</p>
                </footer>
            </nav>
        </>
    );
}