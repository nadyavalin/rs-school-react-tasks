import "./styles.css";
import { useEffect, useState } from "react";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList";
import { fetchPeople } from "../../api/api";
import { Pagination } from "./resultsSection/pagination";
import { Outlet, useSearchParams } from "react-router-dom";
import { useSearchTermLocalStorage } from "../../hooks/useSearchTermLocalStorage";
import { Loader } from "../loader/loader";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { setIsLoading } from "../../store/stateSlice";
import { getPeople } from "../../store/stateSlice";

export const MainContent = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const { searchTerm, setSearchTerm } = useSearchTermLocalStorage();
  const [searchParams] = useSearchParams();

  const peopleResponse = useSelector((state: RootState) => state.state.peopleResponse);
  const isLoading = useSelector((state: RootState) => state.state.isLoading);
  const dispatch = useDispatch();

  useEffect(() => {
    const getPeopleData = async (searchParams: URLSearchParams, searchTerm: string) => {
      try {
        dispatch(setIsLoading(true));
        setErrorMessage("");
        const data = await fetchPeople(searchParams);
        dispatch(getPeople(data));
        setSearchTerm(searchTerm);
      } catch (error) {
        setErrorMessage((error as Error).message);
      } finally {
        dispatch(setIsLoading(false));
      }
    };

    getPeopleData(searchParams, searchTerm);
  }, [searchParams, searchTerm, setSearchTerm, dispatch]);

  return (
    <>
      <section className="search-section">
        <SearchForm />
      </section>
      <div className="result-section-with-detail">
        <section className="results-section">
          {errorMessage ? <p>Error: {errorMessage}</p> : isLoading ? <Loader /> : <PeopleList />}
          <Pagination peopleResponse={peopleResponse} searchParams={searchParams} />
        </section>
        <div id="details" className="details">
          <Outlet />
        </div>
      </div>
    </>
  );
};
