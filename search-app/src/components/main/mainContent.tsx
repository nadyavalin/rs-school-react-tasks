import { useSearchParams } from "next/navigation";
import styles from "./styles.module.css";
import { useGetPeopleQuery } from "../../api/api";
import { TriggerButton } from "../errorBoundary/triggerButton";
import { useSearchTermLocalStorage } from "../../hooks/useSearchTermLocalStorage";
import { SearchForm } from "./searchSection/searchForm";
import { PeopleList } from "./resultsSection/peopleList/peopleList";
import { Pagination } from "./resultsSection/pagination/pagination";
import { Loader } from "../loader/loader";
import { ThemeToggle } from "./toggleTheme/themeToggle";

export const MainContent = ({ children }: { children: React.ReactNode }) => {
  const { searchTerm, setSearchTerm } = useSearchTermLocalStorage();
  const searchParams = useSearchParams();

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
      <main className={styles.main}>
        <section className={styles.searchSection}>
          <SearchForm searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        </section>
        <div className={styles.resultSectionWithDetails}>
          <section className={styles.resultsSection}>
            <PeopleList people={data?.results || []} />
            <Pagination peopleResponse={data} searchParams={searchParams} />
          </section>
          {children}
        </div>
        <TriggerButton />
        <ThemeToggle />
      </main>
    </>
  );
};
