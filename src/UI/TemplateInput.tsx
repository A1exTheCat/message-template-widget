import React, { useContext } from "react";

// Импорт контекста CursorContext из модуля widgetMessageEditor.
import { CursorContext } from "../modules/widgetMessageEditor";
import TextareaAutosize from 'react-textarea-autosize';

// Определение интерфейса для свойств компонента TemplateInput.
interface TemplateInputProps {
  value: string;  // Значение текстовой области.
  id: number;     // ID узла.
  index: number;  // Индекс текстовой области.
  onChange: (id: number, index: number, value: string) => void;  // Функция обратного вызова для обработки изменения значения.
}

const TemplateInput: React.FC<TemplateInputProps> = ({ value, id, index, onChange }) => {

  // Получение данных из контекста CursorContext.
  const cursorContext = useContext(CursorContext);
  const setCursor = cursorContext?.setCursor;

  // Функция для обновления положения курсора.
  const updateCursor = (id: number, index: number, position: number | null): void => {
    if (position === null) return; // Обработка случая, когда положение курсора равно null.
    const newCursor = { id, index, position };
    setCursor && setCursor(newCursor);  // Если функция setCursor существует, обновите положение курсора.
  };

  return (
    <TextareaAutosize
      minRows={2}
      placeholder="Enter text"
      className="text-input"
      id={String(id)}
      data-index={String(index)}
      value={value}
      onChange={(e) => onChange(id, index, e.target.value)}  // Обработчик изменения значения текстовой области.
      onSelect={(e: React.FormEvent<HTMLTextAreaElement>) => {  // Обработчик выбора текста в текстовой области.
        const target = e.target as HTMLTextAreaElement;
        const position = target.selectionStart;  // Получение начальной позиции выделения.
        const idx = target.dataset.index;  // Получение индекса из дата-атрибута элемента.
        
        if (idx) {
            updateCursor(Number(target.id), Number(idx), position);  // Обновление положения курсора.
        }
      }}
    />
  );
};

export default TemplateInput;
