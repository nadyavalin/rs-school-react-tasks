import { useEffect, useState } from "react";
import { SideSectionItem } from "./sideSectionItem";
import { useParams, useSearchParams } from "react-router-dom";
import { IPerson } from "../../../types/types";
import { Loader } from "../../loader/loader";
import { useGetPeopleQuery } from "../../../api/api";

export const SideSection = () => {
  const [personDetails, setPersonDetails] = useState<IPerson>({
    name: "",
    birth_year: "",
    eye_color: "",
    gender: "",
    hair_color: "",
    height: "",
    mass: "",
    skin_color: "",
    created: "",
    edited: "",
  });

  const { key } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetPeopleQuery({
    searchTerm: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
  });

  useEffect(() => {
    if (data && data.results) {
      if (key) {
        const selectedPerson = data.results.find((result: IPerson) => result.name === key);
        if (selectedPerson) {
          setPersonDetails(selectedPerson);
        }
      } else {
        if (data.results.length > 0) {
          setPersonDetails(data.results[0]);
        }
      }
    }
  }, [data, key]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <SideSectionItem personDetails={personDetails} data-testid="side-section" />
      )}
    </>
  );
};
