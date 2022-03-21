export const numberAdd2 = (dispatch) => dispatch({ type: "add2ToNumber" });
export const numberMulti7 = (dispatch) => dispatch({ type: "numberMulti7" });
export const numberDiv25 = (dispatch) => dispatch({ type: "numberDiv25" });
export const numberInt = (dispatch) => dispatch({ type: "numberInt" });
export const numberAdd = (dispatch, number) =>
  dispatch({ type: "numberAdd", payload: number });
