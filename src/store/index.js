import { reducer } from "./reducers";

const initialState = {
  cart: [],
  products: [],
  user: null,
  other: "...",
  number: 0,
};

export { initialState, reducer };
