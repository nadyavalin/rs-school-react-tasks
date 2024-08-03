import styles from "./styles.module.css";
import Link from "next/link";
import Image from "next/image";
import image404 from "../../public/404.jpg";

export default function ErrorPage() {
  return (
    <>
      <p className={styles.text404}>404</p>
      <p>Sorry, an unexpected error has occurred.</p>
      <Link href="/" className={styles.turnMainPageLink}>
        Turn to main page! ======&gt;&gt;&gt;
      </Link>
      <div className={styles.imageContainer} data-testid="404">
        <Image src={image404} alt="404" className={styles.img404} />
      </div>
    </>
  );
}
