import Link from 'next/link';
import Image from 'next/image';
import Styles from './card.module.scss';
import CardsInfo from './data/card.json';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

type Props = typeof CardsInfo[0];

export default function Card(props: Props) {
  const { thumbnail, title, shortDescription, technologies, repoUrl, demoUrl } = props;

  return (
    <article className={Styles.card}>
      <div className={Styles.imageContainer}>
        <Image
          src={thumbnail}
          alt={title}
          width={1000}
          height={1000}
          sizes="(max-width: 768px) 100vw, 25vw"
        />
      </div>

      <div className={Styles.content}>
        <h2 className={Styles.title}>{title}</h2>
        <p className={Styles.description}>{shortDescription}</p>

        <div className={Styles.techStack}>
          {technologies?.map((tech, index) => (
            <span key={index} className={Styles.badge}>
              {tech}
            </span>
          ))}
        </div>

        <div className={Styles.links}>
          {repoUrl && (
            <Link href={repoUrl} target="_blank" rel="noopener noreferrer" className={Styles.link}>
              <FaGithub /> Code
            </Link>
          )}
          {demoUrl && (
            <Link href={demoUrl} target="_blank" rel="noopener noreferrer" className={Styles.link}>
              <FaExternalLinkAlt /> Live Demo
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}