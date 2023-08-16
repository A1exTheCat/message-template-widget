//@ts-nocheck
import React, { useContext } from "react";
import IfThenElseInputs from "../UI/IfThenElseInputs";
import { CursorContext } from "../modules/widgetMessageEditor";

const Template = ( { tree, setTree } ) => {
  const { setCursor } = useContext(CursorContext);

  const updateTextarea = (nodeId, index, newValue) => {
    setTree(prevTree => {
      const updatedTree = prevTree.map(node => {
        if (node.id === nodeId) {
          const updatedTextareas = [...node.textareas];
          updatedTextareas[index] = newValue;
          return { ...node, textareas: updatedTextareas };
        }
        return node;
      });
      return updatedTree;
    });
  };

  const deleteComponent = (nodeId) => {
    const deletedComponent = tree.find((node) => node.id === nodeId);

    if (nodeId === 1) {
      const newText = `${deletedComponent.textareas[0]}${deletedComponent.textareas[4]}`;
      const newNode = {
        id: 1,
        type: 'initial',
        textareas: [ newText, '', '', '', '' ],
        structure: [ 'text', 'text', 'text', 'text', 'text' ]
      };

      setTree([newNode]);
      
      return setCursor({
        id: 1,
        index: 0,
        position: 0,
      });
    }

    deletedComponent.structure.forEach((id) => {
      if (id !== 'text') {
        deleteComponent(id);
      }
    })

    tree.forEach((node) => {
      if (node.structure.indexOf(nodeId) !== -1) {
        const newText = `${deletedComponent.textareas[0]}${deletedComponent.textareas[4]}`;
        const index = node.structure.indexOf(nodeId);
        node.structure[index] = 'text';
        node.textareas[index] = newText;
      }
    });

    setTree(prevTree => prevTree.filter(node => node.id !== nodeId));

    setCursor({
      id: 1,
      index: 0,
      position: 0,
    });
  };

  const renderTree = (tree, inicialTree) => {
    return inicialTree.map((node) => (
      <IfThenElseInputs
        key={node.id}
        id={node.id}
        tree={tree}
        type={node.type}
        textareas={node.textareas}
        structure={node.structure}
        updateTextarea={updateTextarea}
        deleteComponent={deleteComponent}
      />
    ));
  };
  // фильтруем от subcomponents
  const inicialTree = tree.filter((node) => node.type !== 'subcomponent');

  return (
    <div className="template-container">
      {renderTree(tree, inicialTree)}
    </div>
  );
};

export default Template;
