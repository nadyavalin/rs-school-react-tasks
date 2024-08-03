import styles from "./styles.module.css";
import { MainContent } from "./mainContent";
import { SideSection } from "@/components/main/sideSection/sideSection";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

export const Main = () => {
  const router = useRouter();
  const slug = router.query.slug as string;
  const [showSideSection, setShowSideSection] = useState(false);

  useEffect(() => {
    if (slug) {
      setShowSideSection(true);
    } else {
      setShowSideSection(false);
    }
  }, [slug]);

  return (
    <main className={styles.main} data-testid="main">
      <MainContent />
      {showSideSection && (
        <aside>
          <SideSection slug={slug} />
        </aside>
      )}
    </main>
  );
};
