import "./styles.css";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { Pagination } from "./resultsSection/pagination/pagination";
import { Outlet, useSearchParams } from "react-router-dom";
import { Loader } from "../loader/loader";
import { useGetPeopleQuery } from "../../api/api";
import { ThemeToggle } from "./toggleTheme/themeToggle";

export const MainContent = () => {
  const [searchParams] = useSearchParams();

  const { data, isLoading, error } = useGetPeopleQuery({
    searchTerm: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
  });

  if (error) {
    if ("status" in error) {
      return (
        <p>
          Error: {error.status} - {JSON.stringify(error.data)}
        </p>
      );
    } else {
      return <p>Error: {error.message}</p>;
    }
  }

  if (isLoading) {
    return <Loader />;
  }

  return (
    <>
      <section className="search-section">
        <SearchForm />
      </section>
      <div className="result-section-with-detail">
        <section className="results-section">
          <PeopleList people={data?.results || []} />
          <Pagination peopleResponse={data} searchParams={searchParams} />
        </section>
        <div id="details" className="details">
          <Outlet />
        </div>
      </div>
      <ThemeToggle />
    </>
  );
};
