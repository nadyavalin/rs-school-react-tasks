import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { IPerson } from "../../../../types/types";
import { Person } from "./person";

const person: IPerson = {
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

const mockSetSelectedItems = vi.fn();

describe("Person Component", () => {
  it("renders correctly with the given person data", () => {
    render(<Person person={person} selectedItems={[]} setSelectedItems={mockSetSelectedItems} />);
    expect(screen.getByText(/Name: Luke Skywalker/i)).toBeInTheDocument();
    expect(screen.getByText(/Height: 172/i)).toBeInTheDocument();
    expect(screen.getByText(/Mass: 77/i)).toBeInTheDocument();
    expect(screen.getByText(/Birth/i)).toBeInTheDocument();
  });

  it("checkbox interaction works correctly", () => {
    render(
      <Person person={person} selectedItems={[person]} setSelectedItems={mockSetSelectedItems} />,
    );

    const checkbox = screen.getByRole("checkbox");
    expect(checkbox).toBeChecked();

    fireEvent.click(checkbox);

    expect(mockSetSelectedItems).toHaveBeenCalled();
  });
});
