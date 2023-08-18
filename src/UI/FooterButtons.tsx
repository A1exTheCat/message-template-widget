import React from "react";

// Определение типа для узла дерева (TreeNode) и свойств компонента FooterButtons.
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

interface FooterButtonsProps {
  setPreview: (state: boolean) => void;                  // Функция для установки состояния предпросмотра
  callbackSave: (tree: TreeNode[]) => Promise<void>;     // Функция сохранения данных (асинхронная)
  setEditorStatus: (status: boolean) => void;            // Функция для установки состояния редактора
  tree: TreeNode[];                                     // Данные дерева, передаваемые для сохранения
}

// Компонент для отображения кнопок внизу редактора.
const FooterButtons: React.FC<FooterButtonsProps> = ({ setPreview, callbackSave, setEditorStatus, tree }) => {
  
  return (
    <div className="footer-buttons">
      {/* Кнопка для активации режима предпросмотра */}
      <button className="footer-button" onClick={() => setPreview(true)}>Preview</button>

      {/* Кнопка для сохранения данных. Обратите внимание на использование асинхронной обработки событий. */}
      <button className="footer-button" onClick={async () => await callbackSave(tree)}>Save</button>

      {/* Кнопка для закрытия редактора */}
      <button className="footer-button" onClick={() => setEditorStatus(false)}>Close</button>
    </div>
  );
}

export default FooterButtons;
