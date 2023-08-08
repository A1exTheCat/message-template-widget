//@ts-nocheck
import React from "react";
import VariableButton from "../UI/variableButton";
import IfButton from "../UI/IfButton";

const MessageEditor = (props) => {
  const { arrVarNames, template, callbackSave } = props;

  return (
    <div className="editor-page-container">
      <h1 className="header">Message Template Editor</h1>
      <div className="var-buttons-block">
        {arrVarNames.map((name) => <VariableButton btnName={name} key={arrVarNames.indexOf(name)} />)}
      </div>
      <IfButton />
    </div>
  );
};

export default MessageEditor;