//@ts-nocheck
import React, { useEffect, useState } from "react";
import PreviewVars from '../UI/PreviewVars';
import PreviewTextarea from '../UI/PreviewTextarea';

const Preview = ({tree, arrVarNames, setPreview}) => {
  const variableObject = {};
  arrVarNames.forEach(element => {
    variableObject[element] = '';
  });
  
  const [varNames, setVarNames] = useState(variableObject);

  return (
    <div className="preview-modal">
      <div className="preview-block">
        <h2>Message Preview</h2>
        <PreviewTextarea tree={tree} varNames={varNames}/>
        <h3>Variables:</h3>
        <PreviewVars varNames={varNames} setVarNames={setVarNames} />
        <button className="preview-close-button" onClick={() => setPreview(false)}>Close</button>
        <button className="preview-close" onClick={() => setPreview(false)}>&times;</button>
      </div>
    </div>
  )
};

export default Preview;
