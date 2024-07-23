import "./styles.css";
import { useEffect, useState } from "react";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { Pagination } from "./resultsSection/pagination";
import { Outlet, useSearchParams } from "react-router-dom";
import { Loader } from "../loader/loader";
import { useGetPeopleQuery } from "../../api/api";
import { useSearchTermLocalStorage } from "../../hooks/useSearchTermLocalStorage";

export const MainContent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { searchTerm, setSearchTerm } = useSearchTermLocalStorage();
  const [searchParams] = useSearchParams();
  const searchParamsString = searchParams.toString();
  const { data = [], isLoading, error } = useGetPeopleQuery(searchParamsString);

  useEffect(() => {
    const getPeopleData = async (searchTerm: string) => {
      try {
        setErrorMessage("");
        setSearchTerm(searchTerm);
      } catch (error) {
        setErrorMessage((error as Error).message);
      }
    };

    getPeopleData(searchTerm);
  }, [searchTerm, setSearchTerm]);

  return (
    <>
      <section className="search-section">
        <SearchForm />
      </section>
      <div className="result-section-with-detail">
        <section className="results-section">
          {errorMessage ? (
            <p>Error: {error.message}</p>
          ) : isLoading ? (
            <Loader />
          ) : (
            <PeopleList people={data.results} />
          )}
          <Pagination peopleResponse={data} searchParams={searchParams} />
        </section>
        <div id="details" className="details">
          <Outlet />
        </div>
      </div>
    </>
  );
};
