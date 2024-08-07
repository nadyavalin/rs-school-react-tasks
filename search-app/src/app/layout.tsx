import { Metadata } from "next";
import "./styles.css";
import { Header } from "../components/header/header";
import { Footer } from "../components/footer/footer";
import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
import { store } from "../store/store";

export const metadata: Metadata = {
  title: "Star Wars Search App",
  description: "Star Wars Search App",
};

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <html lang="en">
      <Provider store={store}>
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </Provider>
    </html>
  );
}
