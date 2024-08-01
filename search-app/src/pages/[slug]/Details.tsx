import { SideSection } from "@/components/main/sideSection/sideSection";
import { IPerson } from "@/types/types";

export default function Details({ person }: { person: IPerson }) {
  const slug = person.name;

  return <SideSection params={{ slug }} />;
}
