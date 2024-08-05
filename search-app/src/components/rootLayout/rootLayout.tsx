import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { ErrorBoundary } from "../errorBoundary/errorBoundary";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <div id="root">
      <Header />
      <ErrorBoundary>{children}</ErrorBoundary>
      <Footer />
    </div>
  );
}
