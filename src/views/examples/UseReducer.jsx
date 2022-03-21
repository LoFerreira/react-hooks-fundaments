import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { reducer, initialState } from "../../store";
import {
  numberAdd2,
  numberMulti7,
  numberDiv25,
  numberInt,
  numberAdd,
  login,
} from "../../store/actions/index.js";

const UseReducer = (props) => {
  const [state, dispatch] = React.useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <div className="center">
        {state.user ? (
          <span className="text">{state.user.name}</span>
        ) : (
          <span className="text">Sem usuário</span>
        )}

        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => login(dispatch, "João")}>
            Login
          </button>
          <button className="btn" onClick={() => numberAdd2(dispatch)}>
            +2
          </button>
          <button className="btn" onClick={() => numberMulti7(dispatch)}>
            *7
          </button>
          <button className="btn" onClick={() => numberDiv25(dispatch)}>
            /25
          </button>
          <button className="btn" onClick={() => numberInt(dispatch)}>
            Int
          </button>
          <button className="btn" onClick={() => numberAdd(dispatch, -9)}>
            -9
          </button>
          <button className="btn" onClick={() => numberAdd(dispatch, 11)}>
            +11
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
