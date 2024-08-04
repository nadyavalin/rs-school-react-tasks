import { MainContent } from "../components/main/mainContent";

export default function Home() {
  return null;
}

Home.getLayout = function getLayout(page: React.ReactNode) {
  return <MainContent>{page}</MainContent>;
};
