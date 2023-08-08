//@ts-nocheck
import React from "react";

const VariableButton = (props) => {
  const { btnName } = props;

  return (
    <button className="var-button" onClick={() => console.log(`{${btnName}}`)}>{btnName}</button>
  )
}

export default VariableButton;