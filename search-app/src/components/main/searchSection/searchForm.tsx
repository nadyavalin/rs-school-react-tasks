import styles from "./styles.module.css";
import React, { useState } from "react";
import { getItemFromLocalStorage } from "../../../utils/utils";
import { useRouter } from "next/router";

export const SearchForm = () => {
  const router = useRouter();

  const [searchTerm, setSearchTerm] = useState<string>(
    getItemFromLocalStorage<string>("searchTerm") ?? "",
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    if (searchTerm === "") {
      router.push("/");
    } else {
      router.push(`/?search=${searchTerm}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.searchForm} data-testid="search-form">
      <input
        className={styles.searchInput}
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </form>
  );
};
