import "./styles.css";
import "../../../index.css";
import { useState } from "react";
import { PeopleResponse } from "../../../types/types";
// import { PaginationNumbers } from "./paginationNumbers";

interface PaginationProps {
  peopleResponse?: PeopleResponse;
  getPeople: (pageNumber: number) => void;
}

export const Pagination = ({ peopleResponse, getPeople: fetchData }: PaginationProps) => {
  const [currentPage, setCurrentPage] = useState(1);

  const onPrevButtonClick = () => {
    setCurrentPage(currentPage - 1);
    fetchData(currentPage - 1);
  };

  const onNextButtonClick = () => {
    setCurrentPage(currentPage + 1);
    fetchData(currentPage + 1);
  };

  return (
    <>
      <div className="pagination">
        <button onClick={onPrevButtonClick} disabled={!peopleResponse?.previous}>
          Prev
        </button>
        {/* <ul className="pagination-numbers">
          <li className="pagination-item">1</li>
        </ul> */}
        <button onClick={onNextButtonClick} disabled={!peopleResponse?.next}>
          Next
        </button>
      </div>
    </>
  );
};
