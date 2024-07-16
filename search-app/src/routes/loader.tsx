import { SideSection } from "./sideSection";

export async function loader() {
  const sideSection = await SideSection();
  return { sideSection };
}
