//@ts-nocheck
import IfButton from "../UI/IfButton";
import VariableButton from "../UI/variableButton";
import Template from "../components/Template";
import React, { useState } from "react";

export const CursorContext = React.createContext({});

const MessageEditor = (props) => {
  const { arrVarNames, template, callbackSave } = props;

  const [tree, setTree] = useState([
    {
      id: 1,
      type: 'component',
      textareas: [ '', '', '', '', '' ],
      structure: [ 'text', 'text', 'text', 'text', 'text' ]
    },
    {
      id: 2,
      type: 'subcomponent',
      textareas: ['2323', '2', '2', '2', '55555'],
      structure: ['text', 'text', 'text', 3, 'text']
    },
    {
      id: 3,
      type: 'subcomponent',
      textareas: ['2323', '2', '2', '2', '55555'],
      structure: ['text', 'text', 'text', 'text', 'text']
    }
  ]);

  const [cursor, setCursor] = useState(
    {
      id: 1,
      index: 0,
      position: 0,
    }
  );
  
  return (
    <CursorContext.Provider value={{cursor, setCursor}}>
      <div className="editor-page-container">
        <h1 className="header">Message Template Editor</h1>
        <div className="var-buttons-block">
          {arrVarNames.map((name) => <VariableButton btnName={name} key={arrVarNames.indexOf(name)} />)}
        </div>
        <IfButton tree={tree} setTree={setTree}/>
        <Template arrVarNames={arrVarNames} tree={tree} callbackSave={callbackSave} setTree={setTree} />
      </div>
    </CursorContext.Provider>
  );
};

export default MessageEditor;