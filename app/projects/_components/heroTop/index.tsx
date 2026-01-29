import Link from 'next/link';
import Styles from './HeroTop.module.scss';
import { FaSquareInstagram, FaLinkedin, FaSquareBehance, FaSquareYoutube, FaSquareGithub } from "react-icons/fa6";

export default function HeroTop() {
    return (
        <article className={Styles.heroContainer}>
            <h1 className={Styles.heroContainer__title}>Check out my projects</h1>
            <p className={Styles.heroContainer__description}>A selection of projects where I combine design and frontend development to create functional, fast, and user focused digital experiences.</p>
        </article>
    )
};