import { render } from "@testing-library/react";
import { PeopleList } from "./peopleList";
import { IPerson } from "../../../types/types";

vitest.mock("./person", () => ({
  Person: vitest.fn(({ person }: { person: IPerson }) => (
    <p data-testid="person-test-id">{person.name}</p>
  )),
}));

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

    const { getAllByTestId } = render(<PeopleList persons={people} />);

    const renderedNames = getAllByTestId("person-test-id");
    expect(renderedNames).toHaveLength(people.length);
  });

  it("renders 'The list is empty' message if the array is empty", () => {
    const { getByText } = render(<PeopleList persons={[]} />);

    expect(getByText("The list is empty")).toBeInTheDocument();
  });
});
