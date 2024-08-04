import React from "react";
import { render, screen } from "@testing-library/react";
import RootLayout from "./rootLayout";

vi.mock("../header/header", () => ({
  Header: () => <div>Header</div>,
}));

vi.mock("../footer/footer", () => ({
  Footer: () => <div>Footer</div>,
}));

vi.mock("../errorBoundary/errorBoundary", () => ({
  ErrorBoundary: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}));

describe("RootLayout", () => {
  it("renders Header, Footer and children correctly", () => {
    const testChild = <div>Test Child</div>;

    render(<RootLayout>{testChild}</RootLayout>);

    expect(screen.getByText("Header")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
    expect(screen.getByText("Test Child")).toBeInTheDocument();
  });
});
