//@ts-nocheck
import React, { useState } from 'react';

import StartButton from './UI/widgetStartButton';
import MessageEditor from './modules/widgetMessageEditor';
import './App.css';

//const arrVarNames = localStorage.arrVarNames ? JSON.parse(localStorage.arrVarNames) : ['firstname', 'lastname', 'company', 'position'];
//const template = localStorage.template ? JSON.parse(localStorage.template) : null;
const callbackSave = (template) => {
  localStorage.template = template;
}

const arrVarNames = ['firstname', 'lastname', 'company', 'position'];
const template = [];


function App() {
  const [editorStatus, setEditorStatus] = useState(false);

  return (
    <div className="App">
      {editorStatus ? <MessageEditor arrVarNames={arrVarNames} template={template} callbackSave={callbackSave} /> : <StartButton onClick={() => setEditorStatus(true)}/>}
    </div>
  );
}

export default App;
