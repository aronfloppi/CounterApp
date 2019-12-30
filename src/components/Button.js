import React from "react";

const Button = ({ step, onClickFunction }) => {
  const handleClick = () => {
    onClickFunction(step);
  };
  return (
    <button onClick={handleClick}>
      {step > 0 ? "+ " : "- "}
      {Math.abs(step)}
    </button>
  );
};

export default Button;
