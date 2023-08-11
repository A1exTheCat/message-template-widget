//@ts-nocheck
import React, { useState } from "react";
import IfThenElseInputs from "../UI/IfThenElseInputs";

const Template = ( { arrVarNames, template, callbackSave } ) => {
  const [tree, setTree] = useState([
    {
      id: 1,
      type: 'component',
      textareas: [ '1', '1', '1', '1', '1' ],
      structure: [ 'text', 2, 'text', 'text', 'text' ]
    },
    {
      id: 2,
      type: 'subcomponent',
      textareas: ['2323', '2', '2', '2', '55555'],
      structure: ['text', 'text', 'text', 3, 'text']
    }, 
    {
      id: 3,
      type: 'subcomponent',
      textareas: ['2323', '2', '2', '2', '55555'],
      structure: ['text', 'text', 'text', 'text', 'text']
    }
  ]);
  
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
