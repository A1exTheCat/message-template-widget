import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import previewGenerator from '../utils/PreviewGenerator';

// Определение типов для структуры дерева.
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

// Свойства компонента PreviewTextarea.
interface PreviewTextareaProps {
  tree: TreeNode[];
  // Объект для хранения пар ключ-значение переменных.
  varNames: { [key: string]: string };
}

// Компонент для предпросмотра содержимого.
const PreviewTextarea: React.FC<PreviewTextareaProps> = ({ tree, varNames }) => {

  // Генерируем значение для предпросмотра с помощью утилиты.
  const value = previewGenerator(tree, varNames);

  // Возвращаем текстовую область для предпросмотра с заданным значением.
  return (
    <TextareaAutosize
      className="preview-textarea"
      minRows={3}
      placeholder="Preview"
      readOnly
      value={value}
    />
  );
}

export default PreviewTextarea;
