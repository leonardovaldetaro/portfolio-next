import Styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles.footer__content}>
                <p className={Styles.footer__text}>© 2025 Leonardo Valdetaro. All rights reserved.</p>
            </div>
        </footer>
    );
}