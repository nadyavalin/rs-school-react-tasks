import App from "@/components/App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";

describe("App", () => {
  test("renders App component", () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    expect(screen.getByText("Search Star Wars People")).toBeInTheDocument();
  });
});
