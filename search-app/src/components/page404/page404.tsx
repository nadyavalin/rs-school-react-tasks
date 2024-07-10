import "./styles.css";
import { ReactElement } from "react";

export const Page404 = (): ReactElement => {
  return (
    <>
      <div className="image-container" data-testid="404">
        <img src="./404.jpg" alt="404" className="img-404" />
      </div>
      <p className="text-over-content">404</p>
    </>
  );
};
