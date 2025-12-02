import Card from '../_components/card';
import CardsInfo from '../_components/card/data/card.json';
import Styles from './cardsSection.module.scss';

export default function CardsSection() {
    return (
        <>
            <div className={Styles.cardsSection__content}>
                <h2 className={Styles.cardsSection__content__title}>Recent Projects</h2>
                <p className={Styles.cardsSection__content__description}>A selection of the work I have developed.</p>
            </div>
            <article className={Styles.cardsSection}>
                {CardsInfo.map(item => (
                    <Card
                        key={item.id}
                        {...item}
                    />
                ))}
            </article>
        </>
    );
}