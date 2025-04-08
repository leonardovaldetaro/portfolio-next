import Styles from './hero.module.scss';

export default function Hero() {
    return (
        <div className={Styles.hero}>
            <div className={Styles.hero__content}>
                <h1 className={Styles.hero__title}>
                    Leonardo Valdetaro<br />
                    Front-End Developer,<br />
                    Designer and Content Creator.
                </h1>
                <p className={Styles.hero__description}>I’m a web developer with a passion for creating beautiful and functional websites. I love to learn new technologies and improve my skills.</p>
            </div>
        </div>
    );
}