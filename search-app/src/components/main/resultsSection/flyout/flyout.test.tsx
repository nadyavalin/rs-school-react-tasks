import { fireEvent, render, screen } from "@testing-library/react";
import { Flyout } from "./flyout";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import { peopleSlice } from "../../../../store/peopleSlice";
import { AppDispatch } from "../../../../store/store";
import { MockInstance } from "vitest";

describe("Flyout Component", () => {
  let store: ReturnType<typeof configureStore>;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        people: peopleSlice.reducer,
      },
    });
  });

  test("renders correctly with selected items", () => {
    const dispatch: AppDispatch = store.dispatch;

    dispatch(peopleSlice.actions.selectItem({ itemId: "1" }));
    dispatch(peopleSlice.actions.selectItem({ itemId: "2" }));

    const peopleData = [
      {
        name: "1",
        birth_year: "19BBY",
        eye_color: "blue",
        gender: "male",
        hair_color: "blond",
        height: "172",
        mass: "77",
        skin_color: "fair",
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:50.313000Z",
      },
      {
        name: "2",
        birth_year: "112BBY",
        eye_color: "blue",
        gender: "male",
        hair_color: "brown",
        height: "170",
        mass: "75",
        skin_color: "fair",
        created: "2014-12-10T15:10:51.357000Z",
        edited: "2014-12-20T21:17:50.315000Z",
      },
    ];

    render(
      <Provider store={store}>
        <Flyout people={peopleData} />
      </Provider>,
    );

    expect(screen.getByText("You have selected 2 items.")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Unselect All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument();
  });

  test("renders null if no items are selected", () => {
    render(
      <Provider store={store}>
        <Flyout people={[]} />
      </Provider>,
    );

    expect(screen.queryByText("You have selected 0 items.")).not.toBeInTheDocument();
    expect(screen.queryByRole("button")).not.toBeInTheDocument();
  });

  test('downloads a CSV file when "Download" button is clicked', async () => {
    const dispatch: AppDispatch = store.dispatch;

    dispatch(peopleSlice.actions.selectItem({ itemId: "1" }));
    dispatch(peopleSlice.actions.selectItem({ itemId: "2" }));

    const peopleData = [
      {
        name: "1",
        birth_year: "19BBY",
        eye_color: "blue",
        gender: "male",
        hair_color: "blond",
        height: "172",
        mass: "77",
        skin_color: "fair",
        created: "2014-12-09T13:50:51.644000Z",
        edited: "2014-12-20T21:17:50.313000Z",
      },
      {
        name: "2",
        birth_year: "112BBY",
        eye_color: "blue",
        gender: "male",
        hair_color: "brown",
        height: "170",
        mass: "75",
        skin_color: "fair",
        created: "2014-12-10T15:10:51.357000Z",
        edited: "2014-12-20T21:17:50.315000Z",
      },
    ];

    render(
      <Provider store={store}>
        <Flyout people={peopleData} />
      </Provider>,
    );

    const downloadButton = screen.getByRole("button", { name: "Download" });
    const mockClick = vi.fn();

    const mockCreateElement: MockInstance<
      (
        this: HTMLElement,
        tagName: string,
        options?: ElementCreationOptions | undefined,
      ) => HTMLElement
    > = vi.spyOn(document, "createElement").mockImplementation(() => {
      const mockElement = {
        click: mockClick,
        href: "",
        download: "",
      };
      return mockElement as unknown as HTMLElement;
    });

    fireEvent.click(downloadButton);
    expect(mockCreateElement).toHaveBeenCalledWith("a");
    expect(mockClick).toHaveBeenCalled();

    expect(mockCreateElement.mock.results[0].value.href).toContain(
      "data:text/csv;charset=utf-8,1%2C19BBY%2Cblue%2Cmale%2Cblond%2C172%2C77%2Cfair%2C2014-12-09T13%3A50%3A51.644000Z%2C2014-12-20T21%3A17%3A50.313000Z",
    );
    expect(mockCreateElement.mock.results[0].value.download).toBe("2_people.csv");
  });
});
