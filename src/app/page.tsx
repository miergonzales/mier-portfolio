import styles from "./home.module.css";
import Image from "next/image";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Software Engineer</h1>
        <p className={styles.desc}>
          Mier Leandro Gonzales is a frontend-focused Software Engineer with
          expertise in React.js and Next.js. Specializing in creating dynamic,
          responsive user interfaces, Mier excels at turning complex designs
          into seamless web applications, combining technical skill with
          creative problem-solving.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/images/brands.png"
            alt="brands"
            fill
            className={styles.brandImage}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/images/hero.gif"
          alt="hero"
          fill
          className={styles.heroImage}
        />
      </div>
    </div>
  );
};

export default Home;
