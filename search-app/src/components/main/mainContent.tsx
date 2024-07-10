import "./styles.css";
import { useEffect, useState } from "react";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { PeopleResponse } from "../../types/types";
import { fetchPeople } from "../../api/api";
import { Pagination } from "./resultsSection/pagination";
import { Outlet } from "react-router-dom";
import { useSearchTermLocalStorage } from "./useSearchTermLocalStorage";

export const MainContent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [peopleResponse, setPeopleResponse] = useState<PeopleResponse | undefined>();
  const { searchTerm, setSearchTerm } = useSearchTermLocalStorage();

  useEffect(() => {
    getPeople(searchTerm);
  }, []);

  const getPeople = async (searchTerm = "", pageNumber = 1) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const data = await fetchPeople(searchTerm, pageNumber);
      setPeopleResponse(data);
      setSearchTerm(searchTerm);
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="search-section">
        <SearchForm onSearch={getPeople} />
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
          <Pagination
            peopleResponse={peopleResponse}
            getPeople={(pageNumber) => getPeople(searchTerm, pageNumber)}
          />
        </section>
        <div id="detail">
          <Outlet />
        </div>
      </div>
    </>
  );
};
