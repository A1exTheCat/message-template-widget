import React, { useContext } from "react";
import { CursorContext } from "../modules/widgetMessageEditor";

// Определение типов для структуры дерева и курсора.
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

interface Cursor {
  id: number;
  index: number;
  position: number;
}

interface CursorContextType {
  cursor: Cursor;
  setCursor: React.Dispatch<React.SetStateAction<Cursor>>;
}

// Свойства компонента IfButton.
interface IfButtonProps {
  tree: TreeNode[];
  setTree: React.Dispatch<React.SetStateAction<TreeNode[]>>;
}

const IfButton: React.FC<IfButtonProps> = ({ tree, setTree }) => {
  const someVariable = '{some_variable}';

  // Получаем текущее состояние курсора из контекста.
  const { cursor, setCursor } = useContext<CursorContextType>(CursorContext);

  const addIfThenElseFunc = () => {
    // Ищем узел дерева по ID из текущего состояния курсора.
    const updatedNode: TreeNode | undefined = tree.find((node) => node.id === cursor.id);
    if (!updatedNode) return;  // Если узел не найден, выходим из функции.

    // Разделяем текущий текст узла на две части по позиции курсора.
    const newTextareaOne: string = updatedNode.textareas[cursor.index].slice(0, cursor.position);
    const newTextareaTwo: string = updatedNode.textareas[cursor.index].slice(cursor.position);

    // Проверяем тип текущего узла.
    if (updatedNode.type === 'initial') {
      const newNode = {
        id: 1,
        type: 'component',
        textareas: [newTextareaOne, '', '', '', newTextareaTwo],
        structure: ['text', 'text', 'text', 'text', 'text']
      };

      // Устанавливаем новый узел в состояние дерева и обновляем курсор.
      setTree([newNode]);

      setCursor({
        id: 1,
        index: 0,
        position: 0,
      });

    } else {
      // Для не-инициальных узлов обновляем структуру и добавляем новый узел.
      updatedNode.structure[cursor.index] = tree.length + 1;

      const newNode = {
        id: tree.length + 1,
        type: 'subcomponent',
        textareas: [newTextareaOne, '', '', '', newTextareaTwo],
        structure: ['text', 'text', 'text', 'text', 'text']
      };

      setTree((prevTree: TreeNode[]) => {
        const updatedTree: TreeNode[] = prevTree.map(node => {
          if (node.id === cursor.id) {
            return newNode; // newNode также должен быть типа TreeNode.
          }
          return node;
        });

        // Обновляем курсор.
        setCursor({
          id: tree.length + 1,
          index: 0,
          position: 0,
        });
  
        return [...updatedTree, updatedNode];
      });
    }
  }

  // Возвращаем кнопку с текстом для вставки условного блока.
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
