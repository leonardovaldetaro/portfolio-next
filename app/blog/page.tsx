import RecentsPosts from './_components/recents';
import Styles from './BlogPage.module.scss';
import { getAllPosts } from "./lib/postLib";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Blog de Leonardo Valdetaro',
    description: 'Artigos sobre ...',
}

export default function BlogPage() {
    return (
        <main className={Styles.mainBlogPage}>
            <h1 className={Styles.mainBlogPage__title}>Building interfaces, solving problems and learning along the way.</h1>
            <p className={Styles.mainBlogPage__description}>Articles about front-end development, technology and real-world decisions from someone who lives off code.</p>
            <RecentsPosts posts={getAllPosts()} />
        </main>
    );
}