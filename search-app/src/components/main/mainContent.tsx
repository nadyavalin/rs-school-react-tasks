import "./styles.css";
import { useEffect, useState } from "react";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { getItemFromLocalStorage } from "../../utils/utils";
import { IPerson, PeopleResponse } from "../../types/types";
import { fetchPeople } from "../../api/api";

export const MainContent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [people, setPeople] = useState<IPerson[]>([]);

  useEffect(() => {
    fetchData(getItemFromLocalStorage<string>("searchTerm") ?? "");
  }, []);

  const fetchData = async (searchTerm?: string) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const data: PeopleResponse = await fetchPeople(searchTerm);
      setPeople(data.results);
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <section className="search-section">
        <SearchForm onSearch={fetchData} />
      </section>
      <section className="results-section">
        {errorMessage ? (
          <p>Error: {errorMessage}</p>
        ) : isLoading ? (
          <div className="loader-container">
            <div className="loader" />
          </div>
        ) : (
          <PeopleList people={people} />
        )}
      </section>
    </>
  );
};
