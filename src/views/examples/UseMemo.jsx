import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseMemo = (props) => {
  const [n1, setN1] = React.useState();
  const [n2, setN2] = React.useState();
  const [n3, setN3] = React.useState();

  const result = React.useMemo(() => sum(n1, n2), [n1, n2]);

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memorizado!" />
      <SectionTitle title="Exercício #1" />
      <div className="center">
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(e) => setN1(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={(e) => setN2(parseInt(e.target.value))}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={(e) => setN3(parseInt(e.target.value))}
        />
        <span className="text">{result}</span>
      </div>
    </div>
  );
};

export default UseMemo;

const sum = (num1, num2) => {
  const future = Date.now() + 1000;
  while (Date.now() < future) {}
  return num1 + num2;
};
