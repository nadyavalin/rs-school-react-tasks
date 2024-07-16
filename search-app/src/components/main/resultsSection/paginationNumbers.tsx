// import "./styles.css";
// import { Link } from "react-router-dom";
// import classNames from "classnames";
// import { PeopleResponse } from "../../../types/types";

// interface PaginationNumbersProps {
//   peopleResponse?: PeopleResponse;
//   searchParams: URLSearchParams;
// }

// export const PaginationNumbers = ({ peopleResponse, searchParams }: PaginationNumbersProps) => {
//   const params = Object.fromEntries(searchParams.entries());
//   const pageCount = Math.ceil((peopleResponse?.count ?? 0) / 10 || 1);
//   const pages = Array.from({ length: pageCount }, (_, i) => i + 1);

//   return (
//     <ul className="pagination-numbers">
//       {pages.map((page) => (
//         <li key={page} className="pagination-item">
//           <Link
//             to={`/?${new URLSearchParams({ ...params, page: String(page) })}`}
//             className={classNames("pagination-link", {
//               "pagination-link_active": Number(params.page) === page,
//             })}
//           >
//             {page}
//           </Link>
//         </li>
//       ))}
//     </ul>
//   );
// };
