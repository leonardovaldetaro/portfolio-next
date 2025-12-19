import Style from "./recents.module.scss";

export default function RecentsSection() {
    return (
        <article className={Style.recentsSection}>
            <h2 className={Style.recentsSection__title}>Recents Posts</h2>
            <p className={Style.recentsSection__description}>Here are some of my recent posts</p>
        </article>
    );
}