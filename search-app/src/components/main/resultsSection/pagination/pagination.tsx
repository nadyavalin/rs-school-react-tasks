import "./styles.css";
import { PeopleResponse } from "../../../../types/types";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface PaginationProps {
  peopleResponse?: PeopleResponse;
  searchParams: URLSearchParams;
}

export const Pagination = ({ peopleResponse, searchParams }: PaginationProps) => {
  const params = Object.fromEntries(searchParams.entries());
  const pageCount = Math.ceil((peopleResponse?.count ?? 0) / 10) || 1;
  const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <Link
        to={`/?${new URLSearchParams({ ...params, page: String(Number(params.page ?? 1) - 1) })}`}
        className={classNames("pagination-link", {
          "pagination-link_disabled": !peopleResponse?.previous,
        })}
      >
        Prev
      </Link>
      <ul className="pagination-numbers">
        {pages.map((page) => (
          <li key={page} className="pagination-number">
            <Link
              to={`/?${new URLSearchParams({ ...params, page: String(page) })}`}
              className={classNames("pagination-link", {
                "pagination-link_active": Number(params.page) === page,
              })}
            >
              {page}
            </Link>
          </li>
        ))}
      </ul>
      <Link
        to={`/?${new URLSearchParams({ ...params, page: String(Number(params.page ?? 1) + 1) })}`}
        className={classNames("pagination-link", {
          "pagination-link_disabled": !peopleResponse?.next,
        })}
      >
        Next
      </Link>
    </div>
  );
};
