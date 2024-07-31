import styles from "./postCard.module.css";
import Image from "next/image";
import Link from "next/link";
import ad from "../../../public/images/noavatar.png";

export default function postCard() {
  return (
    <div className={styles.container}>
      <div className={styles.thumbnail}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/22027141/pexels-photo-22027141/free-photo-of-farmer-in-hat-sitting-on-field.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.desc}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi,
          blanditiis! Ratione hic eveniet ea. Facilis illo necessitatibus
          aperiam minima at illum tempora facere, maiores asperiores odit
          voluptatem ad ab quisquam?
        </p>
        <Link className={styles.link} href="/blog/post">Read More</Link>
      </div>
    </div>
  );
}
