import { GetServerSideProps } from "next";
import { MainContent } from "../components/main/mainContent";
import { PeopleResponse } from "../types/types";

export default function Home() {
  return null;
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainContent>{page}</MainContent>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const searchTerm = "";
  const page = 1;

  try {
    const response = await fetch(`https://swapi.dev/api/people/?search=${searchTerm}&page=${page}`);
    const data: PeopleResponse = await response.json();

    return {
      props: {
        peopleData: data,
      },
    };
  } catch (error) {
    console.error("Error while retrieving data:", error);

    return {
      props: {
        peopleData: { results: [] },
      },
    };
  }
};
