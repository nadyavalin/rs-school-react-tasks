import Link from "next/link";
import styles from "./styles.module.css";

interface Error {
  statusText: string;
  message: string;
}

function useRouteError(): Error {
  throw new Error("Function not implemented.");
}

function ErrorPage() {
  const error: Error = useRouteError() as Error;
  console.error(error);

  return (
    <div className={styles.errorPage}>
      <div className={styles.imageContainer} data-testid="404">
        <img src="../404.jpg" alt="404" className={styles.img404} />
      </div>
      <p className={styles.textOverContent}>404</p>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <Link href={`/`}>Turn to main page! ======&gt;&gt;&gt;</Link>
    </div>
  );
}

export default ErrorPage;
