import React from "react";

const ResetButton = ({ onClickFunction }) => {
  const handleClick = () => {
    onClickFunction();
  };
  return <button onClick={handleClick}>Reset</button>;
};

export default ResetButton;
