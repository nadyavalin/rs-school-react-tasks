import "./styles.css";
import { useEffect, useState } from "react";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { getItemFromLocalStorage } from "../../utils/utils";
import { IPerson, PeopleResponse } from "../../types/types";
import { fetchAllPeople, fetchSearchPeople } from "../../api/api";
import { Pagination } from "./resultsSection/pagination";

export const MainContent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [person, setPerson] = useState<IPerson[]>([]);
  const [people, setPeople] = useState<PeopleResponse | null>(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetchData(getItemFromLocalStorage<string>("searchTerm") ?? "");
  }, []);

  useEffect(() => {
    const getPeople = async (searchTerm?: string) => {
      setIsLoading(true);
      const data: PeopleResponse = await fetchAllPeople(searchTerm);
      setPeople(data);
      setIsLoading(false);
      console.log(data);
    };
    getPeople();
  }, []);

  const nextPage = async () => {
    if (people && people.next) {
      setIsLoading(true);
      const response = await fetch(people.next);
      const data: PeopleResponse = await response.json();
      setPeople(data);
      setIsLoading(false);
      setCurrentPage(currentPage + 1);
      setPerson(data.results);
    }
  };

  const prevPage = async () => {
    if (people && people.previous) {
      setIsLoading(true);
      const response = await fetch(people.previous);
      const data: PeopleResponse = await response.json();
      setPeople(data);
      setIsLoading(false);
      setCurrentPage(currentPage - 1);
      setPerson(data.results);
    }
  };

  const fetchData = async (searchTerm?: string) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const data: PeopleResponse = await fetchSearchPeople(searchTerm);
      setPerson(data.results);
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
          <>
            <PeopleList people={person} />
            <button onClick={prevPage} disabled={!people?.previous}>
              Prev
            </button>
            <Pagination />
            <button onClick={nextPage} disabled={!people?.next}>
              Next
            </button>
          </>
        )}
      </section>
    </>
  );
};
