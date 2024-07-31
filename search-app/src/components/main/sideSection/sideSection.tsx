import { SideSectionItem } from "./sideSectionItem";
import { IPerson } from "../../../types/types";
import { Loader } from "../../loader/loader";
import { useGetPeopleQuery } from "../../../api/api";
import { useSearchParams } from "next/navigation";

export const SideSection = ({ params }: { params: { slug: string } }) => {
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
      personDetails={
        params
          ? data?.results.find((result: IPerson) => result.name === params.slug)
          : data?.results[0]
      }
    />
  );
};
