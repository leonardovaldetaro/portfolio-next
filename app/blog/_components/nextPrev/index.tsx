import styles from "./NextPrev.module.scss";
import Link from "next/link";
import { FaLongArrowAltLeft, FaLongArrowAltRight } from "react-icons/fa";

type PostsLink = {
    title: string;
    slug: string;
};

type NextPrevProps = {
    nextPost: PostsLink;
    prevPost: PostsLink;
};

export default function NextPrev({ nextPost, prevPost }: NextPrevProps) {
    if (!nextPost && !prevPost) return null;

    return (
        <nav className={styles.nextPrev}>
            {prevPost && (
                <Link href={`/blog/${prevPost.slug}`} className={styles.prev}>
                    <span className={styles.prev__label}><FaLongArrowAltLeft className={styles.prev__label__arrow} />Post anterior</span>
                    <strong className={styles.title}>{prevPost.title}</strong>
                </Link>
            )}

            {nextPost && (
                <Link href={`/blog/${nextPost.slug}`} className={styles.next}>
                    <span className={styles.next__label}>Próximo post<FaLongArrowAltRight className={styles.next__label__arrow} /></span>
                    <strong className={styles.title}>{nextPost.title}</strong>
                </Link>
            )}
        </nav>
    )
}

