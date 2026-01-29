"use client";

import { useState } from 'react';
import Styles from './Recents.module.scss';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../../../_components/button';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { LuDot } from "react-icons/lu";

//Function to limit excerpt length 100 characters
function truncateExcerpt(excerpt: string, maxLength: 100): string {
    if (!excerpt) return '';
    return excerpt.length > maxLength
        ? excerpt.slice(0, maxLength).trim() + '...'
        : excerpt;
};

export default function RecentsPosts({ posts }) {
    //show only 6 posts when start
    const [visiblePosts, setVisiblePosts] = useState(6);

    //function to load more posts
    const loadMorePosts = () => {
        setVisiblePosts(prev => prev + 6);
    };

    //Organize posts by date (newest first)
    const sortedPosts = [...posts].sort((a, b) => {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
    });

    return (
        <section className={Styles.recentsPosts}>
            <ul className={Styles.recentsPosts__list}>
                {sortedPosts.slice(0, visiblePosts).map((post) => (
                    <Link href={`/blog/${post.slug}`} key={post.slug} className={Styles.recentsPosts__list__link}>
                        <li className={Styles.recentsPosts__list__link__item}>
                            <figure className={Styles.recentsPosts__list__link__item__imageContainer}>
                                <Image
                                    src={post.thumbImage}
                                    alt={post.title}
                                    width={362}
                                    height={177}
                                    className={Styles.recentsPosts__list__link__item__imageContainer__image}
                                />
                            </figure>

                            <div className={Styles.recentsPosts__list__link__item__contentContainer}>
                                <h2 className={Styles.recentsPosts__list__link__item__contentContainer__title}>
                                    {post.title}
                                </h2>

                                <div className={Styles.recentsPosts__list__link__item__contentContainer__authorDate}>
                                    <small className={Styles.recentsPosts__list__link__item__contentContainer__authorDate__author}>
                                        Author: {post.author.name}
                                    </small>
                                    <span> <LuDot /> </span>
                                    <small className={Styles.recentsPosts__list__link__item__contentContainer__authorDate__date}>
                                        {post.date}
                                    </small>
                                </div>

                                <p className={Styles.recentsPosts__list__link__item__contentContainer__text}>
                                    {truncateExcerpt(post.excerpt, 100)}
                                </p>

                                <div className={Styles.recentsPosts__list__link__item__contentContainer__tags}>
                                    {post.tags.map((tag, index) => (
                                        <span key={index} className={Styles.recentsPosts__list__link__item__contentContainer__tags__tag}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    </Link>
                ))}
            </ul>
            {visiblePosts < posts.length && (
                <Button onClick={loadMorePosts} variant="primary">
                    Carregar mais posts
                    <IoIosArrowRoundForward className={Styles.ctaHome__button__icon} />
                </Button>
            )}
        </section>
    );
}