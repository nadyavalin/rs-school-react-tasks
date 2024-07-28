import { render, screen } from "@testing-library/react";
import { Main } from "./main";

vi.mock("./mainContent");

describe("Main Component", () => {
  it("renders the main element with correct attributes", () => {
    render(<Main />);

    const mainElement = screen.getByTestId("main");
    expect(mainElement).toBeInTheDocument();
    expect(mainElement).toHaveClass("main");
  });
});
