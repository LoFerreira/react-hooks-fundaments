import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const UseRef = (props) => {
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const count = React.useRef(0);

  const myInput1 = React.useRef(null);
  const myInput2 = React.useRef(null);

  React.useEffect(() => {
    count.current++;
    myInput2.current.focus();
  }, [value1]);
  React.useEffect(() => {
    count.current++;
    myInput1.current.focus();
  }, [value2]);

  return (
    <div className="UseRef">
      <PageTitle
        title="Hook UseRef"
        subtitle="Retorna um objeto mutável com a propriedade .current!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Valor: </span>
          <span className="text">{merge(value1, value2)} [</span>
          <span className="text red">{count.current}</span>
          <span className="text">]</span>
        </div>
        <input
          ref={myInput1}
          className="input"
          type="text"
          value={value1}
          onChange={(e) => setValue1(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <input
          ref={myInput2}
          type="text"
          className="input"
          value={value2}
          onChange={(e) => setValue2(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseRef;

const merge = (som1, som2) => {
  return [...som1].map((e, i) => `${e}${som2[i] ?? ""}`).join("");
};
