import { render } from "@testing-library/react";
import { App } from "./App";

describe("App Component", () => {
  it("renders Header, Main, and Footer components", () => {
    const { getByTestId } = render(<App />);

    const headerElement = getByTestId("header");
    expect(headerElement).toBeInTheDocument();

    const mainElement = getByTestId("main");
    expect(mainElement).toBeInTheDocument();

    const footerElement = getByTestId("footer");
    expect(footerElement).toBeInTheDocument();
  });
});
