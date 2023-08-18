//@ts-nocheck

import React from "react";
import TextareaAutosize from 'react-textarea-autosize';
import previewGenerator from "../utils/PreviewGenerator";

const PreviewTextarea = ({ tree, varNames }) => {

  const value = previewGenerator (tree, varNames);

  return (
    <TextareaAutosize
      className="preview-textarea"
      minRows="3"
      placeholder="Preview"
      readOnly
      value={value}
    />
  )
}

export default PreviewTextarea;