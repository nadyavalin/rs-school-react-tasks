import { useEffect, useState } from "react";
import { SideSectionItem } from "./sideSectionItem";
import { useLocation } from "react-router-dom";
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

  const location = useLocation();
  const getPeople = async (searchParams: URLSearchParams) => {
    try {
      setLoading(true);
      const data: PeopleResponse = await fetchPeople(searchParams);
      if (data) {
        setPersonDetails(data.results[0]);
      }
      setLoading(false);
    } catch (error) {
      setLoading(false);
      throw new Error("Failed to load data");
    }
  };

  const handleClickCard = (name: string) => {
    const searchParams = new URLSearchParams();
    searchParams.append("name", name);
    getPeople(searchParams);
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    getPeople(searchParams);
  }, [location]);

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
