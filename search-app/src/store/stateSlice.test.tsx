import { configureStore } from "@reduxjs/toolkit";
import reducer, { getPeople, setIsLoading, ResponseState } from "./stateSlice";
import { PeopleResponse } from "../types/types";

describe("Redux Slice Tests", () => {
  let store: ReturnType<typeof configureStore<ResponseState>>;

  beforeEach(() => {
    store = configureStore({ reducer });
  });

  it("should return the initial state", () => {
    const initialState: ResponseState = {
      peopleResponse: {
        count: 0,
        next: null,
        previous: null,
        results: [],
      },
      isLoading: false,
    };
    expect(store.getState()).toEqual(initialState);
  });

  it("should handle getPeople", () => {
    const newPeopleResponse: PeopleResponse = {
      count: 3,
      next: null,
      previous: null,
      results: [
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
        {
          name: "Darth Vader",
          birth_year: "41.9BBY",
          eye_color: "yellow",
          gender: "male",
          hair_color: "none",
          height: "202",
          mass: "136",
          skin_color: "white",
          created: "2014-12-10T15:18:20.704000Z",
          edited: "2014-12-20T21:17:50.313000Z",
        },
        {
          name: "Leia Organa",
          birth_year: "19BBY",
          eye_color: "brown",
          gender: "female",
          hair_color: "brown",
          height: "150",
          mass: "49",
          skin_color: "light",
          created: "2014-12-10T15:20:09.791000Z",
          edited: "2014-12-20T21:17:50.315000Z",
        },
      ],
    };

    store.dispatch(getPeople(newPeopleResponse));

    expect(store.getState().peopleResponse).toEqual(newPeopleResponse);
    expect(store.getState().isLoading).toBe(false);
  });

  it("should handle setIsLoading", () => {
    store.dispatch(setIsLoading(true));
    expect(store.getState().isLoading).toBe(true);

    store.dispatch(setIsLoading(false));
    expect(store.getState().isLoading).toBe(false);
  });
});
