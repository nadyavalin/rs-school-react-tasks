import "./styles.css";
import React, { useState } from "react";
import { getItemFromLocalStorage } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";

export const SearchForm = () => {
  const [searchTerm, setSearchTerm] = useState<string>(
    getItemFromLocalStorage<string>("searchTerm") ?? "",
  );

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(event.target.value.trim());
  };

  const handleSubmit = (
    event: React.FormEvent<HTMLFormElement> | React.KeyboardEvent<HTMLInputElement>,
  ): void => {
    event.preventDefault();
    if (searchTerm === "") {
      navigate("/");
    } else {
      navigate(`/?${new URLSearchParams({ search: searchTerm })}`);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        className="search-input"
        type="text"
        placeholder=""
        value={searchTerm}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      <button type="submit" className="search-button">
        Search
      </button>
    </form>
  );
};
