import Image from "next/image";
import styles from "./about.module.css";

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2>About Mier</h2>
        <h1>
          I create digital ideas that are bigger, bolder, braver and better
        </h1>
        <p>
          Mier Leandro Gonzales is a skilled Software Engineer specializing in
          frontend technologies, with a strong focus on creating intuitive and
          visually appealing user interfaces. With a deep expertise in React.js
          and Next.js, Mier excels in building dynamic, high-performance web
          applications. Known for translating complex design concepts into
          seamless, responsive user experiences, Mier leverages advanced
          JavaScript techniques and modern frontend practices to deliver
          exceptional results. Combining technical proficiency with creative
          problem-solving, Mier is dedicated to enhancing user satisfaction and
          driving innovation.
        </p>
        <div className={styles.boxes}>
            <div className={styles.box}>
                <h1>10 K+</h1>
                <p>Years of Experience</p>
            </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
        <Image src="/images/about.png" alt="about" fill />
      </div>
    </div>
  );
};

export default AboutPage;
