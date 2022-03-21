import "./App.css";
import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Menu from "../components/layout/Menu";
import Content from "../components/layout/Content";
import { data, DataContext } from "../data/data-context";
import Store from "../data/store";

const App = (props) => {
  const [state, setState] = React.useState(data);

  return (
    <Store>
      <DataContext.Provider value={{ state, setState }}>
        <div className="App">
          <Router>
            <Menu />
            <Content />
          </Router>
        </div>
      </DataContext.Provider>
    </Store>
  );
};

export default App;
