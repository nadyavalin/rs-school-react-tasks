import "./index.css";
import { useRouteError } from "react-router-dom";

interface Error {
  statusText: string;
  message: string;
}

export function ErrorPage() {
  const error: Error = useRouteError() as Error;
  console.error(error);

  return (
    <div className="error-page">
      <div className="image-container" data-testid="404">
        <img src="../404.jpg" alt="404" className="img-404" />
      </div>
      <p className="text-over-content">404</p>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <a href="/" className="turn-to-main-page-link">
        Turn to main page! ======&gt;&gt;&gt;
      </a>
    </div>
  );
}
