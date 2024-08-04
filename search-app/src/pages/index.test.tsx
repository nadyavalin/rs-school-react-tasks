import { render } from "@testing-library/react";
import { MainContent } from "../components/main/mainContent";
import Home from ".";

vi.mock("../components/main/mainContent", () => {
  return {
    MainContent: vi.fn(({ children }) => <div>{children}</div>),
  };
});

describe("Home Component", () => {
  test("renders Home component correctly", () => {
    const { container } = render(<Home />);
    expect(container).toBeEmptyDOMElement();
  });

  test("getLayout returns MainContent with page content", () => {
    const pageContent = <div>Test Page</div>;
    const layout = Home.getLayout(pageContent);

    expect(layout.type).toBe(MainContent);
    expect(layout.props.children).toBe(pageContent);
  });
});
