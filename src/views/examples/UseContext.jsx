import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { DataContext } from "../../data/data-context";
import { AppContext } from "../../data/store";

const UseContext = (props) => {
  const context = React.useContext(DataContext);

  const changeNumber = (num) => {
    context.setState({
      ...context.state,
      number: context.state.number + num,
    });
  };

  const { number, text, setText, setNumber } = React.useContext(AppContext);

  React.useEffect(() => {
    if (number > 1250) setText("Eita!!");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [number]);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>
        <div>
          <button className="btn" onClick={() => changeNumber(1)}>
            +1
          </button>
          <button className="btn" onClick={() => changeNumber(-1)}>
            -1
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div className="text">
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
