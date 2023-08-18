import React, { useContext } from "react";
import { CursorContext } from "../modules/widgetMessageEditor";

// 1. Define the types for the component's props and other related types.
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

interface VariableButtonProps {
  btnName: string;
  tree: TreeNode[];
  setTree: React.Dispatch<React.SetStateAction<TreeNode[]>>;
}

interface Cursor {
  id: number;
  index: number;
  position: number;
}

interface VariableButtonProps {
  btnName: string;
  tree: TreeNode[];
  setTree: React.Dispatch<React.SetStateAction<TreeNode[]>>;
}

const VariableButton: React.FC<VariableButtonProps> = ({ btnName, tree, setTree }) => {
  const { cursor } = useContext(CursorContext) as { cursor: Cursor }; // casting might be needed if TypeScript does not know the exact type from CursorContext

  const addVariableFunction = () => {
    const { id, index, position } = cursor;
    const updatingNode = tree.find((node) => node.id === id);
    if (!updatingNode) return; // Guard clause in case updatingNode is undefined.
    
    const updatingText = updatingNode.textareas[index];
    const leftPart = updatingText.slice(0, position);
    const rightPart = updatingText.slice(position);
    const newText = updatingText === '' ? `{${btnName}}` : `${leftPart}{${btnName}}${rightPart}`;
    updatingNode.textareas[index] = newText;
    
    setTree(prevTree => {
      const filteredTree = prevTree.map((node) => {
        if (node.id !== id) {
          return node;
        }
        return updatingNode;
      })
      return filteredTree;
    })
  }

  return (
    <button className="var-button" onClick={addVariableFunction}>{btnName}</button>
  )
}

export default VariableButton;
