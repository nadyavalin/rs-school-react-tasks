import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Person } from "./person";
import { IPerson } from "../../../types/types";

test("Person component renders person data correctly", () => {
  const personData: IPerson = {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    birth_year: "19BBY",
  };

  const { getByText } = render(
    <Router>
      <Person person={personData} />
    </Router>,
  );

  expect(getByText("Luke Skywalker")).toBeInTheDocument();
  expect(getByText("Height: 172")).toBeInTheDocument();
  expect(getByText("Mass: 77")).toBeInTheDocument();
  expect(getByText("Birth Year: 19BBY")).toBeInTheDocument();
});
