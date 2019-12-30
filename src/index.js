import React from "react";
import ReactDOM from "react-dom";
import { useState } from "react";

import Button from "./components/Button.js";
import ResetButton from "./components/ResetButton.js";
import ResultList from "./components/ResultList.js";

import "./styles.css";

function App() {
  const [count, setCount] = useState(0);
  const [countList, setCountList] = useState([]);
  const incrementCount = increment => {
    setCount(count + increment);
    setCountList(countList.concat(count));
  };
  const resetCount = () => {
    setCount(0);
    setCountList([]);
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>increment</h2>
      <Button step={1} onClickFunction={incrementCount} />
      <Button step={10} onClickFunction={incrementCount} />
      <Button step={100} onClickFunction={incrementCount} />
      <Button step={1000} onClickFunction={incrementCount} />
      <h2>decrement</h2>
      <Button step={-1} onClickFunction={incrementCount} />
      <Button step={-10} onClickFunction={incrementCount} />
      <Button step={-100} onClickFunction={incrementCount} />
      <Button step={-1000} onClickFunction={incrementCount} />
      <h2>counter</h2>
      <ResetButton onClickFunction={resetCount} /> <span>{count}</span>
      <ResultList countList={countList} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
