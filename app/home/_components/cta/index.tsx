import Styles from "./CtaHome.module.scss";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

interface CtaHomeProps {
    title: string;
    text: string;
    buttonText: string;
    href: string;
}

export default function CtaHome({ title, text, buttonText, href }: CtaHomeProps) {
    return (
        <article className={Styles.ctaHome}>
            <h2 className={Styles.ctaHome__title}>{title}</h2>
            <p className={Styles.ctaHome__text}>{text}</p>
            <Link href={href} className={Styles.ctaHome__button}>
                {buttonText}
                <IoIosArrowRoundForward className={Styles.ctaHome__button__icon} />
            </Link>
        </article>
    );
}
