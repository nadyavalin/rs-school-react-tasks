import { useState, useEffect } from "react";
import { getItemFromLocalStorage, setItemToLocalStorage } from "../../utils/utils";

export const useSearchTermLocalStorage = () => {
  const [searchTerm, setSearchTerm] = useState(getItemFromLocalStorage("searchTerm") ?? "");

  useEffect(() => {
    return () => {
      setItemToLocalStorage("searchTerm", searchTerm);
    };
  }, [searchTerm]);

  return { searchTerm, setSearchTerm };
};
