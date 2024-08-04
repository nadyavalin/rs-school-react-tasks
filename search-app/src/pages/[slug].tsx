import { Loader } from "../components/loader/loader";
import { MainContent } from "../components/main/mainContent";
import { SideSection } from "../components/main/sideSection/sideSection";
import { useRouter } from "next/router";

export default function Details() {
  const router = useRouter();
  const slug = router.query.slug as string;

  if (!slug) {
    return <Loader />;
  }

  return <SideSection slug={slug} />;
}

Details.getLayout = function getLayout(page: React.ReactNode) {
  return <MainContent>{page}</MainContent>;
};
