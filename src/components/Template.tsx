//@ts-nocheck
import React, { useState } from "react";
import IfThenElseInputs from "../UI/IfThenElseInputs";

const Template = ( { arrVarNames, tree, callbackSave, setTree } ) => {
  
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
    deletedComponent.structure.forEach((id) => {
      if (id !== 'text') {
        deleteComponent(id);
      }
    })

    tree.forEach((node) => {
      if (node.structure.indexOf(nodeId) !== -1) {
        const index = node.structure.indexOf(nodeId);
        node.structure[index] = 'text';
      }
    });

    setTree(prevTree => prevTree.filter(node => node.id !== nodeId));
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
