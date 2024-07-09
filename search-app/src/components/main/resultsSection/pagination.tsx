import "../../../index.css";
import "./styles.css";
import { PaginationNumberItem } from "./paginationNumberItem";

export const Pagination = () => {
  return (
    <>
      <div className="pagination">
        <ul className="pagination-numbers">
          <PaginationNumberItem />
        </ul>
      </div>
    </>
  );
};
