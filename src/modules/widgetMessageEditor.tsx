//@ts-nocheck
import IfButton from "../UI/IfButton";
import VariableButton from "../UI/variableButton";
import Template from "../components/Template";
import React, { useState } from "react";
import FooterButtons from "../UI/FooterButtons";
import Preview from "../components/Preview";

export const CursorContext = React.createContext({});

const MessageEditor = (props) => {
  const { arrVarNames, template, callbackSave, setEditorStatus } = props;

  const [tree, setTree] = useState(template ? template : [
    {
      id: 1,
      type: 'initial',
      textareas: [ '', '', '', '', '' ],
      structure: [ 'text', 'text', 'text', 'text', 'text' ]
    },
  ]);

  const [cursor, setCursor] = useState(
    {
      id: 1,
      index: 0,
      position: 0,
    }
  );

  const [preview, setPreview] = useState(false);
  
  return (
    <CursorContext.Provider value={{cursor, setCursor}}>
      <div className="editor-page-container">
        <h1 className="header">Message Template Editor</h1>
        <div className="var-buttons-block">
          {arrVarNames.map((name) => <VariableButton btnName={name} tree={tree} setTree={setTree} key={arrVarNames.indexOf(name)} />)}
        </div>
        <IfButton tree={tree} setTree={setTree}/>
        <Template arrVarNames={arrVarNames} tree={tree} setTree={setTree} />
        <FooterButtons tree={tree} setPreview={setPreview} callbackSave={callbackSave} setEditorStatus={setEditorStatus}/>
        {preview && <Preview tree={tree} arrVarNames={arrVarNames} setPreview={setPreview}/>}
      </div>
    </CursorContext.Provider>
  );
};

export default MessageEditor;