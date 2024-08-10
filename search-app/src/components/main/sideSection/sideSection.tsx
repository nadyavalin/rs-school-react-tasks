"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import { fetchPeople } from "../../../api/api";
import { IPerson, PeopleResponse } from "../../../types/types";
import { Loader } from "../../loader/loader";
import { SideSectionItem } from "./sideSectionItem";

export const SideSection = ({ slug }: { slug: string }) => {
  const searchParams = useSearchParams();
  const [data, setData] = useState<PeopleResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const searchTerm = searchParams.get("search") || "";
  const page = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    const fetchAndSetData = async () => {
      setIsLoading(true);
      try {
        const params = new URLSearchParams();
        if (searchTerm) {
          params.set("search", searchTerm);
        }

        const response = await fetchPeople(params, page);
        setData(response);
      } catch (error) {
        console.error("Error while retrieving data:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndSetData();
  }, [searchTerm, page]);

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SideSectionItem
      personDetails={data?.results.find((result: IPerson) => result.name === slug)}
    />
  );
};
