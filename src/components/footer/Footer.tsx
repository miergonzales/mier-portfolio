import styles from "./footer.module.css"

export default function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.logo}>Mier</div>
            <div className={styles.text}>desc</div>
        </div>
    );
}