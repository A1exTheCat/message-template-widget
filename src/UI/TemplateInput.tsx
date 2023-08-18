import React, { useContext } from "react";

import { CursorContext } from "../modules/widgetMessageEditor";
import TextareaAutosize from 'react-textarea-autosize';

interface TemplateInputProps {
  value: string;
  id: number;
  index: number;
  onChange: (id: number, index: number, value: string) => void;
}

const TemplateInput: React.FC<TemplateInputProps> = ({ value, id, index, onChange }) => {

  const cursorContext = useContext(CursorContext);
  const setCursor = cursorContext?.setCursor;

  const updateCursor = (id: number, index: number, position: number | null): void => {
    if (position === null) return; // handle null case for position
    const newCursor = { id, index, position };
    setCursor && setCursor(newCursor);
};

  return (
    <TextareaAutosize
      minRows={2}
      placeholder="Enter text"
      className="text-input"
      id={String(id)}
      data-index={String(index)}
      value={value}
      onChange={(e) => onChange(id, index, e.target.value)}
      onSelect={(e: React.FormEvent<HTMLTextAreaElement>) => {
        const target = e.target as HTMLTextAreaElement;
        const position = target.selectionStart;
        const idx = target.dataset.index;
        
        if (idx) {
            updateCursor(Number(target.id), Number(idx), position);
        }
    }}
    />
  );
};

export default TemplateInput;
