import "./styles.css";
import { useEffect, useState } from "react";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { PeopleResponse } from "../../types/types";
import { fetchPeople } from "../../api/api";
import { Pagination } from "./resultsSection/pagination";
import { Outlet, useSearchParams } from "react-router-dom";
import { useSearchTermLocalStorage } from "./useSearchTermLocalStorage";

export const MainContent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [peopleResponse, setPeopleResponse] = useState<PeopleResponse | undefined>();
  const { searchTerm, setSearchTerm } = useSearchTermLocalStorage();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const getPeople = async (searchParams: URLSearchParams, searchTerm: string) => {
      try {
        setIsLoading(true);
        setErrorMessage("");
        const data = await fetchPeople(searchParams);
        setPeopleResponse(data);
        setSearchTerm(searchTerm);
      } catch (error) {
        setErrorMessage((error as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    getPeople(searchParams, searchTerm);
  }, [searchParams, searchTerm, setSearchTerm]);

  return (
    <>
      <section className="search-section">
        <SearchForm />
      </section>
      <div className="result-section-with-detail">
        <section className="results-section">
          {errorMessage ? (
            <p>Error: {errorMessage}</p>
          ) : isLoading ? (
            <div className="loader-container">
              <div className="loader" />
            </div>
          ) : (
            <PeopleList persons={peopleResponse?.results} />
          )}
          <Pagination peopleResponse={peopleResponse} searchParams={searchParams} />
        </section>
        <div id="details" className="details">
          <Outlet />
        </div>
      </div>
    </>
  );
};
