//@ts-nocheck
import React, { useContext } from "react";
import { CursorContext } from "../modules/widgetMessageEditor";
import TextareaAutosize from 'react-textarea-autosize';

const TemplateInput = ({ value, id, index, onChange }) => {

  const { setCursor } = useContext(CursorContext);

  const updateCursor = (id, index, position) => {
    const newCursor = { id, index, position };
    setCursor(newCursor);
    console.log(newCursor);
  };

  return (
    <TextareaAutosize
      minRows="2"
      placeholder="Enter text"
      className="text-input"
      id={id}
      data-index={index}
      value={value}
      onChange={(e) => onChange(id, index, e.target.value)}
      onSelect={(e) => updateCursor(Number(e.target.id), Number(e.target.dataset.index), e.target.selectionStart)}
    />
  );
};

export default TemplateInput;