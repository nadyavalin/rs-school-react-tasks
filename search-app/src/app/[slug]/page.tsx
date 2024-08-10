import { MainContent } from "../../components/main/mainContent";
import { SideSection } from "../../components/main/sideSection/sideSection";

function Details({ slug }: { slug: string }) {
  return (
    <>
      <MainContent>
        <SideSection slug={slug} />
      </MainContent>
    </>
  );
}

export default Details;
