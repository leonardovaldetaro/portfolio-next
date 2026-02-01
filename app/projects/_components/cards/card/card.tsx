import Link from 'next/link';
import Image from 'next/image';
import Styles from './Card.module.scss';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface Props {
    title: string;
    description: string;
    image: string;
    link: string;
}

export default function Card({ title, description, image, link }: Props) {
    return (
        <article className={Styles.card}>
            <figure className={Styles.imageContainer}>
                <Image
                    src={image}
                    alt={title}
                    width={500}
                    height={300}
                    sizes="(max-width: 768px) 100vw, 33vw"
                />
            </figure>

            <div className={Styles.content}>
                <h2 className={Styles.title}>{title}</h2>
                <p className={Styles.description}>{description}</p>

                <div className={Styles.links}>
                    <Link href={link} className={Styles.link}>
                        Acessar Detalhes <FaExternalLinkAlt size={12} />
                    </Link>
                </div>
            </div>
        </article>
    );
}
