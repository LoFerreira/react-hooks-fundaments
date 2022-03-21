import { loginReducer } from "./login-reducer";
import { numberReducer } from "./number-reducer";

export const reducer = (state, action) => {
  const newState = numberReducer(state, action);
  return loginReducer(newState, action);
};
