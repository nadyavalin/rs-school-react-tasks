import type { Metadata } from "next";
import { Header } from "../header/header";
import { Footer } from "../footer/footer";
import { Provider } from "react-redux";
import { ErrorBoundary } from "../errorBoundary/errorBoundary";
import { store } from "@/store/store";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search Star Wars People",
  description: "Web site created with Next.js.",
};

export default function LayoutComponent({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root" className={inter.className}>
          <Provider store={store}>
            <Header />
            <ErrorBoundary>{children}</ErrorBoundary>
            <Footer />
          </Provider>
        </div>
      </body>
    </html>
  );
}
