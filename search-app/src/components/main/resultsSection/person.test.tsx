import { render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { Person } from "./person";
import { IPerson } from "../../../types/types";

test("Person component renders person data correctly", () => {
  const personData: IPerson = {
    name: "Luke Skywalker",
    birth_year: "19BBY",
    eye_color: "blue",
    gender: "male",
    hair_color: "blond",
    height: "172",
    mass: "77",
    skin_color: "fair",
    created: "2014-12-09T13:50:51.644000Z",
    edited: "2014-12-20T21:17:56.891000Z",
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
