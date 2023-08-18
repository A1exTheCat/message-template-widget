import React from "react";
import TemplateInput from "./TemplateInput";

interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

interface IfThenElseInputsProps {
  id: number;
  tree: TreeNode[];
  type: string;
  textareas: string[];
  structure: (string | number)[];
  updateTextarea: (id: number, index: number, value: string) => void;
  deleteComponent: (id: number) => void;
}

const IfThenElseInputs: React.FC<IfThenElseInputsProps> = ({ 
  id, 
  tree, 
  type, 
  textareas, 
  structure, 
  updateTextarea, 
  deleteComponent 
}) => {
  if (type === "initial") {
    return <TemplateInput value={textareas[0]} id={id} index={0} onChange={updateTextarea} />;
  }

  const renderContent = (textarea: string, subType: string | number, index: number) => {
    if (subType === 'text') {
      return (
        <TemplateInput value={textarea} id={id} index={index} onChange={updateTextarea} />
      )
    }
    
    const renderingSubComponent = tree.find((node) => node.id === subType);
    if(!renderingSubComponent) return null;

    return (
      <IfThenElseInputs
        id={renderingSubComponent.id}
        key={renderingSubComponent.id}
        tree={tree}
        type={renderingSubComponent.type}
        textareas={renderingSubComponent.textareas}
        structure={renderingSubComponent.structure}
        updateTextarea={updateTextarea}
        deleteComponent={deleteComponent}
      />
    )
  };

  return (
    <div className="if-then-else-block">
      {renderContent(textareas[0], structure[0], 0)}
      <div className="if-then-else-line">
        <div className="if-then-else-line-left">
          <span className="if-button-small">IF</span>
          <button className="delete-btn" onClick={() => deleteComponent(id)}>Delete</button>
        </div>
        <div className="if-then-else-line-right">
        {renderContent(textareas[1], structure[1], 1)}
        </div>
      </div>
      <div className="if-then-else-line">
        <div className="if-then-else-line-left">
          <span className="if-button-small">THEN</span>
        </div>
        <div className="if-then-else-line-right">
        {renderContent(textareas[2], structure[2], 2)}
        </div>
      </div>
      <div className="if-then-else-line">
        <div className="if-then-else-line-left">
          <span className="if-button-small">ELSE</span>
        </div>
        <div className="if-then-else-line-right">
        {renderContent(textareas[3], structure[3], 3)}
        </div>
      </div>
      {renderContent(textareas[4], structure[4], 4)}
    </div>
  );
};

export default IfThenElseInputs;