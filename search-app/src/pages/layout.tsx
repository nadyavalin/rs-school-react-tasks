import "./index.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Search Star Wars People",
  description: "Web site created with Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div id="root" className={inter.className}>
          {children}
        </div>
      </body>
    </html>
  );
}
