import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButtons from "../../components/use-callback-buttons";

const UseCallback = (props) => {
  const [count, setCount] = React.useState(0);

  const inc = React.useCallback(
    (delta) => setCount((curr) => curr + delta),
    [setCount]
  );

  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memorizada!"
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
      </div>
      <UseCallbackButtons inc={inc} />
    </div>
  );
};

export default UseCallback;
