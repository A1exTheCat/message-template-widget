import React from "react";

// Define types for the TreeNode and the props of the FooterButtons component.
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

interface FooterButtonsProps {
  setPreview: (state: boolean) => void;
  callbackSave: (tree: TreeNode[]) => Promise<void>;
  setEditorStatus: (status: boolean) => void;
  tree: TreeNode[];
}

const FooterButtons: React.FC<FooterButtonsProps> = ({ setPreview, callbackSave, setEditorStatus, tree }) => {
  
  return (
    <div className="footer-buttons">
      <button className="footer-button" onClick={() => setPreview(true)}>Preview</button>
      <button className="footer-button" onClick={async () => await callbackSave(tree)}>Save</button>
      <button className="footer-button" onClick={() => setEditorStatus(false)}>Close</button>
    </div>
  );
}

export default FooterButtons;
