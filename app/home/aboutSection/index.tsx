import Styles from "./aboutSection.module.scss";
import Image from "next/image";

export default function AboutSection() {
    return (
        <article className={Styles.aboutSection}>
            <figure className={Styles.aboutSection__figure}>
                <Image
                    src="/assets/imageAbout.webp"
                    alt="Leonardo Valdetaro"
                    width={300}
                    height={300}
                    sizes="(max-width: 768px) 300px, 25vw"
                />
            </figure>
            <div className={Styles.aboutSection__content}>
                <h2 className={Styles.aboutSection__content__title}>About Me</h2>
                <p className={Styles.aboutSection__content__description}>I’m a skilled front-end web developer and experienced digital designer. I specialize in creating responsive websites and functional user interfaces that meet the needs of my clients and their target audience.</p>
                <p className={Styles.aboutSection__content__description}>My main experience is in front-end development but I also have a passion for design. Given that producing a modern website requires the combination of design, server technology, and the layer that users interacts with, I believe having experience in both design and development allows for making the most optimal user experiences.</p>
            </div>
        </article>
    );
}