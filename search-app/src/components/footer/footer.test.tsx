import { render } from "@testing-library/react";
import { Footer } from "./footer";
import { it, describe } from "vitest";

describe("Footer component", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Footer />);

    const githubLink = getByText("nadyavalin GitHub");

    expect(githubLink).toBeInTheDocument();
    expect(githubLink).toHaveAttribute("href", "https://github.com/nadyavalin");
    expect(githubLink).toHaveAttribute("target", "_blank");
    expect(githubLink).toHaveAttribute("rel", "noreferrer");
  });
});
