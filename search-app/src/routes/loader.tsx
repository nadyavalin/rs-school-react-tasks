import { SideSection } from "../components/sideSection/sideSection";

export async function loader() {
  const sideSection = await SideSection();
  return { sideSection };
}
