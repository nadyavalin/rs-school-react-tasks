import "./styles.css";
import "../../../index.css";
import { PeopleResponse } from "../../../types/types";
import { Link } from "react-router-dom";
import classNames from "classnames";

interface PaginationProps {
  peopleResponse?: PeopleResponse;
  searchParams: URLSearchParams;
}

export const Pagination = ({ peopleResponse, searchParams }: PaginationProps) => {
  const params = Object.fromEntries(searchParams.entries());

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
