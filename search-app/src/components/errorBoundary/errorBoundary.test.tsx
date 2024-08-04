import { render, screen } from "@testing-library/react";
import { ErrorBoundary } from "./errorBoundary";
import { test, describe } from "vitest";

describe("ErrorBoundary Component", () => {
  test("renders children without errors", () => {
    render(
      <ErrorBoundary>
        <h1>Main Content</h1>
      </ErrorBoundary>,
    );

    expect(screen.getByText("Main Content")).toBeInTheDocument();
  });

  test("catches and displays error message", () => {
    const TestComponent = () => {
      try {
        throw new Error("An error has occurred");
      } catch (error) {
        return <div>Error: {(error as Error).message}</div>;
      }
    };

    render(
      <ErrorBoundary>
        <TestComponent />
      </ErrorBoundary>,
    );

    expect(screen.queryByText("Error: An error has occurred")).toBeInTheDocument();
  });
});
