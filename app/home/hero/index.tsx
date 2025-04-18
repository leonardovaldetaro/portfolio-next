import Link from 'next/link';
import Styles from './hero.module.scss';
import { FaSquareInstagram, FaLinkedin, FaSquareBehance, FaSquareYoutube, FaSquareGithub } from "react-icons/fa6";

export default function Hero() {
    return (
        <article className={Styles.hero}>
            <div className={Styles.hero__content}>
                <h1 className={Styles.hero__title}>
                    Leonardo Valdetaro<br />
                    Front-End Developer,<br />
                    Designer and Content Creator.
                </h1>
                <p className={Styles.hero__description}>I’m a web developer with a passion for creating beautiful and functional websites. I love to learn new technologies and improve my skills.</p>
            </div>
            <div className={Styles.socialmediaContainer}>
                <Link href={"https://www.instagram.com/leovaldetaro/"} target="_new" rel="noopener noreferrer" className={Styles.socialmediaContainer__link}>
                    <FaSquareInstagram />
                </Link> 
                
                <Link href={"https://www.linkedin.com/in/leonardovaldetaro/"} target="_new" rel="noopener noreferrer" className={Styles.socialmediaContainer__link}>
                    <FaLinkedin />
                </Link> 
                
                <Link href={"https://www.behance.net/leonardovaldetaro"} target="_new" rel="noopener noreferrer" className={Styles.socialmediaContainer__link}>
                    <FaSquareBehance />
                </Link> 
                
                <Link href={"https://www.youtube.com/@leonardovaldetaro"} target="_new" rel="noopener noreferrer" className={Styles.socialmediaContainer__link}>
                    <FaSquareYoutube />
                </Link> 
                
                <Link href={"https://www.youtube.com/@leonardovaldetaro"} target="_new" rel="noopener noreferrer" className={Styles.socialmediaContainer__link}>
                    <FaSquareGithub />
                </Link>
            </div>
        </article>
    );
}