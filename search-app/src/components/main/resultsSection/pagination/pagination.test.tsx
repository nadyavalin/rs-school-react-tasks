import { render, screen } from "@testing-library/react";
import { Pagination } from "./pagination";
import { BrowserRouter as Router } from "react-router-dom";
import { PeopleResponse } from "../../../../types/types";

describe("Pagination Component", () => {
  const mockPeopleResponse: PeopleResponse = {
    count: 25,
    next: "https://swapi.dev/api/people/?page=2",
    previous: "https://swapi.dev/api/people/?page=1",
    results: [],
  };

  const mockSearchParams = new URLSearchParams("page=1");

  test("renders pagination links correctly with data", () => {
    render(
      <Router>
        <Pagination peopleResponse={mockPeopleResponse} searchParams={mockSearchParams} />
      </Router>,
    );

    expect(screen.getByText("Prev")).toBeInTheDocument();
    expect(screen.getByText("Next")).toBeInTheDocument();
    expect(screen.getByText("1")).toBeInTheDocument();
    expect(screen.getByText("2")).toBeInTheDocument();
    expect(screen.getByText("3")).toBeInTheDocument();
  });

  test("renders previous link as disabled if no previous page", () => {
    const mockPeopleResponseNoPrevious: PeopleResponse = {
      count: 10,
      next: "https://swapi.dev/api/people/?page=2",
      previous: null,
      results: [],
    };

    render(
      <Router>
        <Pagination peopleResponse={mockPeopleResponseNoPrevious} searchParams={mockSearchParams} />
      </Router>,
    );

    expect(screen.getByRole("link", { name: "Prev" })).toHaveClass("pagination-link_disabled");
  });

  test("renders next link as disabled if no next page", () => {
    const mockPeopleResponseNoNext: PeopleResponse = {
      count: 10,
      next: null,
      previous: "https://swapi.dev/api/people/?page=1",
      results: [],
    };

    render(
      <Router>
        <Pagination peopleResponse={mockPeopleResponseNoNext} searchParams={mockSearchParams} />
      </Router>,
    );

    expect(screen.getByRole("link", { name: "Next" })).toHaveClass("pagination-link_disabled");
  });

  test("highlights the active page number", () => {
    const mockSearchParamsActivePage2 = new URLSearchParams("page=2");

    render(
      <Router>
        <Pagination
          peopleResponse={mockPeopleResponse}
          searchParams={mockSearchParamsActivePage2}
        />
      </Router>,
    );

    expect(screen.getByRole("link", { name: "2" })).toHaveClass("pagination-link_active");
  });

  test("renders pagination correctly with no data", () => {
    render(
      <Router>
        <Pagination peopleResponse={undefined} searchParams={mockSearchParams} />
      </Router>,
    );

    expect(screen.getByRole("link", { name: "Prev" })).toHaveClass("pagination-link_disabled");
    expect(screen.getByRole("link", { name: "Next" })).toHaveClass("pagination-link_disabled");
    expect(screen.getByText("1")).toBeInTheDocument();
  });
});
