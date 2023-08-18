//@ts-nocheck
import React from "react";

const PreviewVars = ({varNames, setVarNames}) => {
  const keysVarNames = Object.keys(varNames);

  const updateVarValue = (variable, value) => {
    const newValue = { [variable]: value };
    setVarNames(prevVarNames => ({ ...prevVarNames, ...newValue }));
  }
  
  const renderFunc = (variable) => {
    return (
      <div key={variable} className="preview-variable-input">
        <label htmlFor={variable} className="preview-variable-label">{variable}: </label>
        <input type="text" id={variable} className="preview-variable-text" placeholder='' value={varNames.variable} onChange={(e) => updateVarValue(variable, e.target.value)}/>
      </div>
    )
  }

  return (
    <div className="preview-variables">
      {keysVarNames.map((variable) => renderFunc(variable))}
    </div>
)
};

export default PreviewVars;
