import { render, screen } from "@testing-library/react";
import ErrorPage from "../pages/404";

describe("ErrorPage", () => {
  test("renders 404 message", () => {
    render(<ErrorPage />);
    const errorMessage = screen.getByText(/404/i);
    expect(errorMessage).toBeInTheDocument();
  });

  test("renders sorry message", () => {
    render(<ErrorPage />);
    const sorryMessage = screen.getByText(/Sorry, an unexpected error has occurred./i);
    expect(sorryMessage).toBeInTheDocument();
  });

  test("renders link back to main page", () => {
    render(<ErrorPage />);
    const linkElement = screen.getByText(/Turn to main page!/i);
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute("href", "/");
  });

  test("renders the 404 image", () => {
    render(<ErrorPage />);
    const imageElement = screen.getByAltText(/404/i);
    expect(imageElement).toBeInTheDocument();
    expect(imageElement).toHaveAttribute("src", expect.stringContaining("404.jpg"));
  });

  test("image container has the correct data-testid", () => {
    render(<ErrorPage />);
    const imageContainer = screen.getByTestId("404");
    expect(imageContainer).toBeInTheDocument();
  });
});
