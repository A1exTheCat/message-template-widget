//@ts-nocheck
import React from "react";

const IfButton = (props) => {
  const someVariable = '{some_variable}';
  return (
    <button className="if-button" onClick={() => console.log('d')}>
      <p className="if-button-header">Click to add:</p>
      <span className="if-button-small">IF</span>
      <p className="if-button-text">[{someVariable} or expression ]</p>
      <span className="if-button-small">THEN</span>
      <p className="if-button-text">[ then_value ]</p>
      <span className="if-button-small">ELSE</span>
      <p className="if-button-text">[ else_value ]</p>
    </button>
  )
}

export default IfButton;