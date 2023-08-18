import React, { useContext } from "react";
import { CursorContext } from "../modules/widgetMessageEditor";

// Определение интерфейса для дерева узлов.
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

// Определение интерфейса для позиции курсора.
interface Cursor {
  id: number;
  index: number;
  position: number;
}

// Определение интерфейса для свойств компонента VariableButton.
interface VariableButtonProps {
  btnName: string;  // Название кнопки.
  tree: TreeNode[];  // Текущее состояние дерева узлов.
  setTree: React.Dispatch<React.SetStateAction<TreeNode[]>>;  // Функция для обновления состояния дерева узлов.
}

const VariableButton: React.FC<VariableButtonProps> = ({ btnName, tree, setTree }) => {
  // Используем контекст для получения информации о позиции курсора.
  const { cursor } = useContext(CursorContext) as { cursor: Cursor }; // Приведение типа может потребоваться, если TypeScript не знает точный тип из CursorContext.

  // Функция, которая добавляет переменную в текст на текущей позиции курсора.
  const addVariableFunction = () => {
    const { id, index, position } = cursor;
    const updatingNode = tree.find((node) => node.id === id);
    
    // Если не находим нужный узел для обновления, просто возвращаемся.
    if (!updatingNode) return;

    // Разбиваем текст на две части: до и после текущей позиции курсора.
    const updatingText = updatingNode.textareas[index];
    const leftPart = updatingText.slice(0, position);
    const rightPart = updatingText.slice(position);
    
    // Вставляем переменную между этими двумя частями.
    const newText = updatingText === '' ? `{${btnName}}` : `${leftPart}{${btnName}}${rightPart}`;
    updatingNode.textareas[index] = newText;

    // Обновляем состояние дерева узлов.
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

  // Возвращаем кнопку, при нажатии на которую будет добавляться переменная.
  return (
    <button className="var-button" onClick={addVariableFunction}>{btnName}</button>
  )
}

export default VariableButton;
