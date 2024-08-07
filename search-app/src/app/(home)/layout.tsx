import { PropsWithChildren } from "react";
import { MainContent } from "../../components/main/mainContent";

export default function HomeLayout({ children }: PropsWithChildren) {
  return <MainContent>{children}</MainContent>;
}
