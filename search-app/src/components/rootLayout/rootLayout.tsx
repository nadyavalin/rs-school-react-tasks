import { ErrorBoundary } from "@/components/errorBoundary/errorBoundary";
import { Header } from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </div>
  );
}
