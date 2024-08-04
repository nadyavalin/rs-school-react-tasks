import { render } from "@testing-library/react";
import { Header } from "./header";
import { it, describe } from "vitest";

describe("Header component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Header />);

    const headerElement = getByText("Search Star Wars People");

    expect(headerElement).toBeInTheDocument();
    expect(headerElement.tagName).toBe("H1");
    expect(headerElement.closest(".header")).toBeInTheDocument();
  });
});
