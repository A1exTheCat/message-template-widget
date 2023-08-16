//@ts-nocheck
import React, { useState } from 'react';

import StartButton from './UI/widgetStartButton';
import MessageEditor from './modules/widgetMessageEditor';
import './App.css';

function App() {
  const [editorStatus, setEditorStatus] = useState(false);
  const arrVarNames = localStorage.arrVarNames ? JSON.parse(localStorage.arrVarNames) : ['firstname', 'lastname', 'company', 'position'];
  const template = localStorage.template ? JSON.parse(localStorage.template) : null;
  const callbackSave = async (template) => {
    await localStorage.setItem('template', JSON.stringify(template));
  }
  return (
    <div className="App">
      {editorStatus ? <MessageEditor
        arrVarNames={arrVarNames}
        template={template}
        callbackSave={callbackSave}
        setEditorStatus={setEditorStatus}
      /> : <StartButton onClick={() => setEditorStatus(true)}/>}
    </div>
  );
}

export default App;
