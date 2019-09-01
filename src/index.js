import React from "react";
import ReactDOM from "react-dom";
import Hooks from "./components/Hooks";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Hooks compute="10" />
      </header>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
