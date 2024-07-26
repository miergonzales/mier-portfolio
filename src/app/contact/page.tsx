import Image from "next/image";
import styles from "./contact.module.css";

const ContactPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/images/contact.png" alt="contact" fill className={styles.img}/>
      </div>
      <div className={styles.formContainer}>
        <form action="" className={styles.form}>
          <input type="text" placeholder="Full Name" required />
          <input
            type="email"
            name="email"
            id="email"
            placeholder="youremail@email.com"
            required
          />
          <input
            type="tel"
            name="mobile number"
            id="mobile number"
            placeholder="Phone Number (Optional)"
          />
          <textarea
            name="emailContent"
            id="emailContent"
            placeholder="Message"
            rows={10}
            cols={30}
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
