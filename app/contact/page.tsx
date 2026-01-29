import ContactForm from '../_components/form';
import Styles from './Contacts.module.scss';

export default function Contact() {
    return (
        <main className={Styles.contact}>
            <section className={Styles.contact__header}>
                <h1 className={Styles.contact__header__title}>Have a project in mind?</h1>
                <p className={Styles.contact__header__description}>Tell me what you're building and what you need. I'll get back to you with clarity, direction and the next steps to move forward.</p>
            </section>
            <section className={Styles.contact__form}>
                <ContactForm />
            </section>
        </main>
    );
}