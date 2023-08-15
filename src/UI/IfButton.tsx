//@ts-nocheck
import React, { useContext } from "react";
import { CursorContext } from "../modules/widgetMessageEditor"

const IfButton = ({tree, setTree}) => {
  const someVariable = '{some_variable}';

  const { cursor, setCursor } = useContext(CursorContext);

  const addIfThenElseFunc = () => {
    const updatedNode = tree.find((node) => node.id === cursor.id);

    const newTextareaOne = updatedNode.textareas[cursor.index].slice(0, cursor.position);
    const newTextareaTwo = updatedNode.textareas[cursor.index].slice(cursor.position);

    if (updatedNode.type === 'initial') {
      const newNode = {
        id: 1,
        type: 'component',
        textareas: [newTextareaOne, '', '', '', newTextareaTwo],
        structure: ['text', 'text', 'text', 'text', 'text']
      };

      setTree([newNode]);
      
      setCursor({
        id: 1,
        index: 0,
        position: 0,
      });

    } else {
      updatedNode.structure[cursor.index] = tree.length + 1;

      const newNode = {
        id: tree.length + 1,
        type: 'subcomponent',
        textareas: [newTextareaOne, '', '', '', newTextareaTwo],
        structure: ['text', 'text', 'text', 'text', 'text']
      };

      setTree(prevTree => {
        const updatedTree = prevTree.map(node => {
          if (node.id === cursor.id) {
            return newNode;
          }
          return node;
        });

        setCursor({
          id: tree.length + 1,
          index: 0,
          position: 0,
        });

        return [...updatedTree, updatedNode];
      });
    }
  }

  return (
    <button className="if-button" onClick={() => addIfThenElseFunc()}>
      <p className="if-button-header">Click to add:</p>
      <span className="if-button-small">IF</span>
      <p className="if-button-text">[{someVariable} or expression ]</p>
      <span className="if-button-small">THEN</span>
      <p className="if-button-text">[ then_value ]</p>
      <span className="if-button-small">ELSE</span>
      <p className="if-button-text">[ else_value ]</p>
    </button>
  )
}

export default IfButton;