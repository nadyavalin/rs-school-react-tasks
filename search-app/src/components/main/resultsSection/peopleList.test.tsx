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
      { name: "Luke Skywalker", height: "172", mass: "77", birth_year: "19BBY" },
      { name: "C-3PO", height: "167", mass: "75", birth_year: "112BBY" },
      { name: "R2-D2", height: "96", mass: "32", birth_year: "33BBY" },
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
