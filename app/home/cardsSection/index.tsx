import Card from '../_components/card';
import CardsInfo from '../_components/card/data/card.json';
import Styles from './cardsSection.module.scss';

export default function CardsSection() {
    return (
        <article className={Styles.cardsSection}>
            {CardsInfo.map(item => (
                <Card
                    key={item.id}
                    {...item}
                />
            ))}
        </article>
    );
}