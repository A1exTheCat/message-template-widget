//@ts-nocheck
import React from "react";

const TemplateInput = (props) => {
  return (
    <textarea
      placeholder="Textarea"
      className="text-input"
      value={props.value}
      onChange={(e) => props.onChange(e.target.value)}
    />
  );
};

export default TemplateInput;