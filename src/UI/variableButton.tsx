//@ts-nocheck
import React, { useContext } from "react";
import { CursorContext } from "../modules/widgetMessageEditor";


const VariableButton = ({ btnName, tree, setTree }) => {
  const { cursor } = useContext(CursorContext);

  const addVariableFunction = () => {
    const { id, index, position } = cursor;
    const updatingNode = tree.find((node) => node.id === id);
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