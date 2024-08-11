import { render, screen } from "@testing-library/react";
import { PeopleList } from "./peopleList";

describe("PeopleList component", () => {
  it("renders a list of people cards", () => {
    const people = [
      {
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
      },
    ];

    render(<PeopleList people={people} />);

    expect(screen.getByText(/luke skywalker/i)).toBeInTheDocument();
  });

  it("renders 'The list is empty' message if the array is empty", () => {
    render(<PeopleList people={[]} />);

    expect(screen.getByText("The list is empty")).toBeInTheDocument();
  });
});
