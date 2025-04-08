"use client";

import { useState } from "react";
import Styles from "./nav.module.scss";
import Link from "next/link";
import classNames from "classnames";
import { MdKeyboardArrowDown, MdClose } from "react-icons/md";

export default function Nav() {
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
        { label: "About", to: "/about" },
        { label: "Projects", to: "/projects" },
        { label: "Posts", to: "/posts" },
        { label: "Contact", to: "/contact" },
        { label: "Resume", to: "/resume" },
    ];
    return (
        <>
            <nav className={Styles.navbar}>
                <ul className={Styles.menu}>
                    {menuItems.map((rota, index) => (
                        <li className={Styles.menu__item} key={index}>
                            <Link
                                href={rota.to}
                                className={`${Styles.link} ${hoveredItem === rota.label
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
                <div className={Styles.mobileNavMenu__close}>
                    <button
                        className={Styles.mobileNavMenu__close__button}
                        onClick={closeMenu} // Fecha o menu ao clicar no botão de fechar
                    >
                        <MdClose className={Styles.mobileNavMenu__close__icon} />
                    </button>
                </div>
                <ul className={Styles.mobileNavMenu__list}>
                    {menuItems.map((rota, index) => (
                    <li className={Styles.mobileNavMenu__list__item} key={index}>
                        <Link href={rota.to} className={Styles.link}>
                            {rota.label}
                        </Link>
                    </li>
                    ))}
                </ul>
            </nav>
        </>
    );
}