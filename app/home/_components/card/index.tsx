import Link from 'next/link';
import Styles from './card.module.scss';
import CardsInfo from './data/card.json';

type Props = typeof CardsInfo[0];

export default function Card(props: Props) {
  const { thumbnail, title, description, shortDescription } = props;
  return (
    <article className={Styles.cards}>
      <Link href={props.id} className={Styles.cards__link}>
        <div className={Styles.cardsContainer}>

          <div className={Styles.cards__imgContainer}>
            <img src={thumbnail} alt={title} className={Styles.cards__imgContainer__img} />
          </div>

          <div className={Styles.cardsContainer__infoContainer}>
            <h2 className={Styles.cardsContainer__infoContainer__title}>{title}</h2>
            <p className={Styles.cardsContainer__infoContainer__shortDescription}>{shortDescription}</p>
          </div>
          
        </div>
      </Link>
    </article>
  );
}