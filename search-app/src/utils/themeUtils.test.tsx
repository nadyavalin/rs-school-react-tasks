import {
  configureStore,
  EnhancedStore,
  StoreEnhancer,
  ThunkDispatch,
  Tuple,
  UnknownAction,
} from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query/react";
import { toggleTheme } from "./themeUtils";
import { themeSlice, ThemeState } from "../store/themeSlice";

describe("themeUtils", () => {
  let store: EnhancedStore<
    { theme: ThemeState },
    UnknownAction,
    Tuple<
      [
        StoreEnhancer<{ dispatch: ThunkDispatch<{ theme: ThemeState }, undefined, UnknownAction> }>,
        StoreEnhancer,
      ]
    >
  >;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        theme: themeSlice.reducer,
      },
    });
    setupListeners(store.dispatch);
  });

  it("should dispatch toggleTheme action", () => {
    const initialState = store.getState().theme;
    const expectedState = { isLightMode: !initialState.isLightMode };

    store.dispatch(toggleTheme());
    expect(store.getState().theme).toEqual(expectedState);
  });
});
