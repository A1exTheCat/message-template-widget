import React, { useState } from "react";
import PreviewVars from '../UI/PreviewVars';
import PreviewTextarea from '../UI/PreviewTextarea';

// Определение интерфейса для объекта TreeNode, представляющего узел дерева
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

// Определение интерфейса для свойств компонента Preview
interface PreviewProps {
  tree: TreeNode[];
  arrVarNames: string[];
  setPreview: (state: boolean) => void;
}

// Главный компонент - Preview
const Preview: React.FC<PreviewProps> = ({tree, arrVarNames, setPreview}) => {
  // Определение типа для объекта, хранящего переменные и их значения
  type VariableObject = { [key: string]: string };

  // Инициализация начального объекта переменных с пустыми значениями
  const variableObject: VariableObject = {};
  arrVarNames.forEach(element => {
    variableObject[element] = '';
  });

  // Состояние для хранения имен переменных и их значений
  const [varNames, setVarNames] = useState<VariableObject>(variableObject);

  return (
    <div className="preview-modal">
      <div className="preview-block">
        <h2>Message Preview</h2>
        {/* Отображение текстовой области с предварительным просмотром сообщения */}
        <PreviewTextarea tree={tree} varNames={varNames}/>
        <h3>Variables:</h3>
        {/* Отображение переменных и их значений */}
        <PreviewVars varNames={varNames} setVarNames={setVarNames} />
        {/* Кнопка для закрытия модального окна предварительного просмотра */}
        <button className="preview-close-button" onClick={() => setPreview(false)}>Close</button>
        {/* Кнопка "крестик" для закрытия модального окна */}
        <button className="preview-close" onClick={() => setPreview(false)}>&times;</button>
      </div>
    </div>
  );
};

export default Preview;
