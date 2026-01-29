import Style from "./recents.module.scss";
import { getAllPosts } from "../../blog/lib/postLib";
import Link from 'next/link';
import Image from 'next/image';
import { LuDot } from "react-icons/lu";

function truncateExcerpt(excerpt: string, maxLength: number = 100): string {
    if (!excerpt) return '';
    return excerpt.length > maxLength
        ? excerpt.slice(0, maxLength).trim() + '...'
        : excerpt;
};

export default function RecentsSection() {
    const posts = getAllPosts().slice(0, 3);

    return (
        <article className={Style.recentsSection}>
            <h2 className={Style.recentsSection__title}>Recents Posts</h2>
            <p className={Style.recentsSection__description}>Here are some of my recent posts</p>

            <div className={Style.recentsSection__content}>
                {posts.map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className={Style.recentsSection__link}>
                        <div className={Style.recentsSection__link__item}>
                            <figure className={Style.recentsSection__link__item__imageContainer}>
                                <Image
                                    src={post.thumbImage}
                                    alt={post.title}
                                    width={362}
                                    height={177}
                                    className={Style.recentsSection__link__item__imageContainer__image}
                                />
                            </figure>

                            <div className={Style.recentsSection__link__item__contentContainer}>
                                <h3 className={Style.recentsSection__link__item__contentContainer__title}>
                                    {post.title}
                                </h3>

                                <div className={Style.recentsSection__link__item__contentContainer__authorDate}>
                                    <small className={Style.recentsSection__link__item__contentContainer__authorDate__author}>
                                        Author: {post.author.name}
                                    </small>
                                    <span> <LuDot /> </span>
                                    <small className={Style.recentsSection__link__item__contentContainer__authorDate__date}>
                                        {post.date}
                                    </small>
                                </div>

                                <p className={Style.recentsSection__link__item__contentContainer__text}>
                                    {truncateExcerpt(post.excerpt, 100)}
                                </p>

                                <div className={Style.recentsSection__link__item__contentContainer__tags}>
                                    {post.tags.map((tag: string, index: number) => (
                                        <span key={index} className={Style.recentsSection__link__item__contentContainer__tags__tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </Link>
                ))}
            </div>
        </article>
    );
}