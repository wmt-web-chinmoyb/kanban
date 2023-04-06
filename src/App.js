import React from "react";
import "./App.css";
import Board from "./components/Board/Board";
import Editable from "./components/Editable/Editable";

function App() {
  return (
    <div className="App">
      <div className="app_navbar">
        <h1>Kanban</h1>
      </div>
      <div className="app_outer">
        <div className="app_board">
          <Board />

          <Board />
          <Editable title="Add boards" placeholder="Add board title" />
        </div>
      </div>
    </div>
  );
}

export default App;
