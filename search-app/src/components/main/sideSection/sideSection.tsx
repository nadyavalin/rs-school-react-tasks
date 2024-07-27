import { SideSectionItem } from "./sideSectionItem";
import { useParams, useSearchParams } from "react-router-dom";
import { IPerson } from "../../../types/types";
import { Loader } from "../../loader/loader";
import { useGetPeopleQuery } from "../../../api/api";

export const SideSection = () => {
  const { key } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetPeopleQuery({
    searchTerm: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SideSectionItem
      personDetails={
        key ? data?.results.find((result: IPerson) => result.name === key) : data?.results[0]
      }
      data-testid="side-section"
    />
  );
};
