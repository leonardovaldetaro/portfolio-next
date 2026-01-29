import fs from 'fs';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'app', 'blog', 'posts');

export function getAllPosts() {
    const filenames = fs.readdirSync(postsDirectory);

    const posts = filenames.map((filename) => {
        const filePath = path.join(postsDirectory, filename);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const postData = JSON.parse(fileContents);
        const slug = filename.replace(/\.json$/, '');

        return {
            slug,
            ...postData
        };
    });

    return posts.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getPostBySlug(slug: string): Promise<any | null> {
    const allPosts = getAllPosts();
    const postIndex = allPosts.findIndex(post => post.slug === slug);

    if (postIndex === -1) return null;

    const post = allPosts[postIndex];
    // Next post is index - 1 (newer), Prev post is index + 1 (older)
    const nextPost = allPosts[postIndex - 1] || null;
    const prevPost = allPosts[postIndex + 1] || null;

    return {
        ...post,
        nextPost,
        prevPost,
    };
}