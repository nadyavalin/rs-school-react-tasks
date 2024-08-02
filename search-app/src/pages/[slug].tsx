import { SideSection } from "@/components/main/sideSection/sideSection";
import { useRouter } from "next/router";

export default function PersonPage() {
  const router = useRouter();
  const slug = router.query.slug as string;

  return <SideSection slug={slug} />;
}
