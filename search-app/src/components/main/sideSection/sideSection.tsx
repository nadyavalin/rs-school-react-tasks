import { useSearchParams } from "next/navigation";
import { useGetPeopleQuery } from "../../../api/api";
import { IPerson } from "../../../types/types";
import { SideSectionItem } from "./sideSectionItem";
import { Loader } from "../../loader/loader";

export const SideSection = ({ slug }: { slug: string }) => {
  const searchParams = useSearchParams();

  const { data, isLoading } = useGetPeopleQuery({
    searchTerm: searchParams.get("search") || "",
    page: Number(searchParams.get("page")) || 1,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <SideSectionItem
      personDetails={data?.results.find((result: IPerson) => result.name === slug)}
    />
  );
};
