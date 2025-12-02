import Styles from "./CtaHome.module.scss";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";

export default function CtaHome() {
    return (
        <article className={Styles.ctaHome}>
            <h2 className={Styles.ctaHome__title}>Ready to get started?</h2>
            <Link href="/contact" className={Styles.ctaHome__button}>
                Contact me
                <IoIosArrowRoundForward className={Styles.ctaHome__button__icon} />
            </Link>
        </article>
    );
}
