import { render, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { SideSection } from "./sideSection";

test("Clicking close button hides the SideSection component", () => {
  const { getByText } = render(
    <Router>
      <SideSection />
    </Router>,
  );

  const closeButton = getByText("Close");
  fireEvent.click(closeButton);
});
