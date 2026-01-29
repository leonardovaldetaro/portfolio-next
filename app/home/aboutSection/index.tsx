import Styles from "./aboutSection.module.scss";
import Image from "next/image";
import aboutImage from '../../../public/assets/leonardoValdetaro.webp';
import aboutImageMobile from '../../../public/assets/aboutLeoVertical.webp';

export default function AboutSection() {
    return (
        <article className={Styles.aboutSection}>
            <figure className={Styles.aboutSection__figure}>
                <Image
                    src={aboutImage}
                    alt="Leonardo Valdetaro"
                    width={600}
                    height={373}
                />
            </figure>
            <figure className={Styles.aboutSection__figureMobile}>
                <Image
                    src={aboutImageMobile}
                    alt="Leonardo Valdetaro"
                    width={430}
                />
            </figure>
            <div className={Styles.aboutSection__content}>
                <h2 className={Styles.aboutSection__content__title}>About Me</h2>
                <p className={Styles.aboutSection__content__description}>I&rsquo;m a front-end web developer and digital designer with proven experience in creating responsive, user-focused websites that combine design and functionality. My specialty is turning ideas into attractive interfaces that engage users and drive results.</p>
                <p className={Styles.aboutSection__content__description}>With a foundation in front-end technologies and a keen eye for design, I bridge the gap between aesthetics and performance, ensuring that every project is visually appealing and highly functional.</p>
            </div>
        </article>
    );
}