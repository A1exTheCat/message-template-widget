//@ts-nocheck
import React from "react";

const TemplateInput = ({ value, id, index, onChange }) => {
  return (
    <textarea
      placeholder="Textarea"
      className="text-input"
      value={value}
      onChange={(e) => onChange(id, index, e.target.value)}
    />
  );
};

export default TemplateInput;