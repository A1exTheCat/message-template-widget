import React, { useContext, FC } from "react";
import IfThenElseInputs from "../UI/IfThenElseInputs";
import { CursorContext } from "../modules/widgetMessageEditor";

interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

interface TemplateProps {
  tree: TreeNode[];
  setTree: React.Dispatch<React.SetStateAction<TreeNode[]>>;
}

const Template: FC<TemplateProps> = ({ tree, setTree }) => {
  const context = useContext(CursorContext);

  if (!context) {
    throw new Error("CursorContext value is undefined!");
  }

  const { setCursor } = context;

  const updateTextarea = (nodeId: number, index: number, newValue: string): void => {
    setTree((prevTree: TreeNode[]) => {
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

  const deleteComponent = (nodeId: number): void => {
    const deletedComponent = tree.find((node) => node.id === nodeId);

    if (!deletedComponent) {
      return; // Optionally handle the error case if needed.
    }

    if (nodeId === 1) {
      const newText = `${deletedComponent.textareas[0]}${deletedComponent.textareas[4]}`;
      const newNode: TreeNode = {
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
      if (typeof id !== "string") {
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

    setTree((prevTree: TreeNode[]) => prevTree.filter(node => node.id !== nodeId));

    setCursor({
      id: 1,
      index: 0,
      position: 0,
    });
  };

  const renderTree = (tree: TreeNode[], inicialTree: TreeNode[]): JSX.Element[] => {
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

  const inicialTree = tree.filter((node) => node.type !== 'subcomponent');

  return (
    <div className="template-container">
      {renderTree(tree, inicialTree)}
    </div>
  );
};

export default Template;
