import "./styles.css";
import { useEffect, useState } from "react";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { getItemFromLocalStorage } from "../../utils/utils";
import { IPerson, PeopleResponse } from "../../types/types";
import { fetchPeople } from "../../api/api";
import { Pagination } from "./resultsSection/pagination";

export const MainContent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [person, setPerson] = useState<IPerson[]>([]);
  const [people, setPeople] = useState<PeopleResponse | null>(null);

  useEffect(() => {
    fetchData(getItemFromLocalStorage<string>("searchTerm") ?? "");
    const getPeople = async (searchTerm?: string) => {
      setIsLoading(true);
      const data: PeopleResponse = await fetchPeople(searchTerm);
      setPeople(data);
      setIsLoading(false);
    };
    getPeople();
  }, []);

  const fetchData = async (searchTerm?: string) => {
    try {
      setIsLoading(true);
      setErrorMessage("");
      const data: PeopleResponse = await fetchPeople(searchTerm);
      setPerson(data.results);
    } catch (error) {
      setErrorMessage((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  };

  const fetchDataByPage = async (pageUrl: string, pageNumberChange: number) => {
    setIsLoading(true);
    const response = await fetch(pageUrl);
    const data: PeopleResponse = await response.json();
    setPeople(data);
    setIsLoading(false);
    setCurrentPage(currentPage + pageNumberChange);
    setPerson(data.results);
  };

  const nextPage = async () => {
    fetchDataByPage(people?.next || "", 1);
  };

  const prevPage = async () => {
    fetchDataByPage(people?.previous || "", -1);
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
