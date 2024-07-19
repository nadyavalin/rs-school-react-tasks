import { useEffect, useState } from "react";
import { SideSectionItem } from "./sideSectionItem";
import { useParams } from "react-router-dom";
import { IPerson, PeopleResponse } from "../../../types/types";
import { fetchPeople } from "../../../api/api";
import { Loader } from "../../loader/loader";

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
  const [loading, setLoading] = useState(false);

  const { key } = useParams();

  const getPeople = async (searchParams: URLSearchParams) => {
    try {
      setLoading(true);
      const data: PeopleResponse = await fetchPeople(searchParams);
      if (data && key) {
        const name = searchParams.get("name");
        const selectedPerson = data.results.find((result) => result.name === name);
        if (selectedPerson) {
          setPersonDetails(selectedPerson);
        }
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
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
    if (key) {
      const searchParams = new URLSearchParams({
        name: key,
      });
      getPeople(searchParams);
    }
  }, [key]);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <SideSectionItem personDetails={personDetails} handleClickCard={handleClickCard} />
      )}
    </>
  );
};
