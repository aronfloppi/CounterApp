import React from "react";

const ResultList = ({ countList }) => {
  let list = countList.map(count => {
    return <li> {count} </li>;
  });

  return <ul>{list}</ul>;
};

export default ResultList;
