import { useEffect, useState } from "react";
import { SideSectionItem } from "./sideSectionItem";
import { useParams } from "react-router-dom";
import { IPerson } from "../../../types/types";
import { Loader } from "../../loader/loader";
import { useGetPeopleQuery } from "../../../api/api";

export const SideSection = ({ searchTerm }: { searchTerm: string }) => {
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
  const { data, isLoading, error } = useGetPeopleQuery(
    searchTerm ? `?search=${searchTerm}` : undefined,
  );

  const getPeople = async (searchParams: URLSearchParams) => {
    try {
      if (data) {
        const name = searchParams.get("name");
        const selectedPerson = data.results.find((result: IPerson) => result.name === name);
        if (selectedPerson) {
          setPersonDetails(selectedPerson);
        }
      }
    } catch (error) {
      throw new Error("Failed to load data");
    }
  };

  const handleClickCard = (name: string) => {
    const searchParams = new URLSearchParams({
      name: name,
    });
    getPeople(searchParams);
  };

  useEffect(() => {
    if (data && data.results) {
      const selectedPerson = data.results.find((result: IPerson) => result.name === key);
      if (selectedPerson) {
        setPersonDetails(selectedPerson);
      }
    }
  }, [data, key]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>Error: {error.message}</p>
      ) : (
        <SideSectionItem personDetails={personDetails} handleClickCard={handleClickCard} />
      )}
    </>
  );
};
