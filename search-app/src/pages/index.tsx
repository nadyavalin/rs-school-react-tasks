import App from "@/components/App";
import { Provider } from "react-redux";
import { store } from "../store/store";

function Home() {
  return (
    <>
      <Provider store={store}>
        <App />
      </Provider>
    </>
  );
}

export default Home;
