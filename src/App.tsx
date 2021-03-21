import React from "react";
import { useState } from "react";
import "./App.css";
import Hoge from "./components/Hoge";

const App: React.FC = () => {
  const [aaa, setAaa] = useState("aaa");
  return (
    <div className="App">
      {aaa}
      みやだいもうくん
      <header className="App-header">
        <Hoge />
      </header>
    </div>
  );
};

export default App;
