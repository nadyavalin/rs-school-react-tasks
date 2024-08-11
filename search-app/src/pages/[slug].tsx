import { Loader } from "../components/loader/loader";
import { MainContent } from "../components/main/mainContent";
import { SideSection } from "../components/main/sideSection/sideSection";
import { GetServerSideProps } from "next";

interface Props {
  slug: string;
}

export default function Details(props: Props) {
  const { slug } = props;

  if (!slug) {
    return <Loader />;
  }

  return <SideSection slug={slug} />;
}

Details.getLayout = function getLayout(page: React.ReactNode) {
  return <MainContent>{page}</MainContent>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { slug } = context.params ?? {};

  if (!slug || Array.isArray(slug)) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      slug,
    },
  };
};
