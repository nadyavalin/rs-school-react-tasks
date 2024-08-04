import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../store/store";
import App from "./_app";

vi.mock("../components/rootLayout/rootLayout", () => {
  const MockRootLayout = ({ children }: { children: React.ReactNode }) => (
    <div data-testid="mock-root-layout">{children}</div>
  );

  return {
    __esModule: true,
    default: MockRootLayout,
  };
});

describe("App Component", () => {
  it("renders correctly with a component that has a layout", () => {
    const TestComponent = () => <div data-testid="test-component">Hello, World!</div>;
    TestComponent.getLayout = (page: React.ReactNode) => (
      <div data-testid="layout-wrapper">{page}</div>
    );

    const { getByTestId } = render(
      <Provider store={store}>
        <App Component={TestComponent} pageProps={{}} />
      </Provider>,
    );

    expect(getByTestId("mock-root-layout")).toBeInTheDocument();
    expect(getByTestId("layout-wrapper")).toBeInTheDocument();
    expect(getByTestId("test-component")).toBeInTheDocument();
  });

  it("renders correctly without a layout", () => {
    const TestComponent = () => <div data-testid="test-component">Hello, World!</div>;

    const { getByTestId } = render(
      <Provider store={store}>
        <App Component={TestComponent} pageProps={{}} />
      </Provider>,
    );

    expect(getByTestId("mock-root-layout")).toBeInTheDocument();
    expect(getByTestId("test-component")).toBeInTheDocument();
    expect(() => getByTestId("layout-wrapper")).toThrow();
  });
});
