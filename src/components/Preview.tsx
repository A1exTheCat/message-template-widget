import React, { useState } from "react";
import PreviewVars from '../UI/PreviewVars';
import PreviewTextarea from '../UI/PreviewTextarea';

// Define types for the TreeNode and the props of the Preview component.
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

interface PreviewProps {
  tree: TreeNode[];
  arrVarNames: string[];
  setPreview: (state: boolean) => void;
}

const Preview: React.FC<PreviewProps> = ({tree, arrVarNames, setPreview}) => {
  // Type for the variableObject.
  type VariableObject = { [key: string]: string };

  const variableObject: VariableObject = {};
  arrVarNames.forEach(element => {
    variableObject[element] = '';
  });

  const [varNames, setVarNames] = useState<VariableObject>(variableObject);

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
  );
};

export default Preview;
