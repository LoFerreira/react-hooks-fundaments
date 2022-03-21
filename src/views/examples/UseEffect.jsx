import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseEffect = (props) => {
  const [number, setNumber] = React.useState(1);
  const [factorial, setFactorial] = React.useState(1);
  const [status, setStatus] = React.useState("Ímpar");

  React.useEffect(() => {
    setFactorial(calcFactorial(number));
  }, [number]);

  React.useEffect(() => {
    setStatus(number % 2 === 0 ? "Par" : "Ímpar");
  }, [number]);

  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <SectionTitle title="Exercicio #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial:</span>
          <span className="text red">
            {factorial === -1 ? "Não existe." : factorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercicio #02" />
      <div className="center">
        <span className="text">Status:</span>
        <span className="text red">{status}</span>
      </div>
    </div>
  );
};

export default UseEffect;

export const calcFactorial = (num) => {
  if (parseInt(num) < 0) return -1;
  if (parseInt(num) === 0) return 1;
  return calcFactorial(num - 1) * num;
};
