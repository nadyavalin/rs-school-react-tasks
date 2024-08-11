import type { AppProps } from "next/app";
import { Provider } from "react-redux";
import { NextPage } from "next";
import "./styles.css";
import { store } from "../store/store";
import RootLayout from "../components/rootLayout/rootLayout";

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
};

export default function App({ Component, pageProps }: AppProps) {
  const ComponentWithLayout = Component as NextPageWithLayout;
  const getLayout = ComponentWithLayout.getLayout ?? ((page) => page);

  return (
    <Provider store={store}>
      <RootLayout>{getLayout(<ComponentWithLayout {...pageProps} />)}</RootLayout>
    </Provider>
  );
}
