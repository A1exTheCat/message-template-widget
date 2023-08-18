import React from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import previewGenerator from '../utils/PreviewGenerator';

interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

interface PreviewTextareaProps {
  tree: TreeNode[];
  varNames: { [key: string]: string };
}

const PreviewTextarea: React.FC<PreviewTextareaProps> = ({ tree, varNames }) => {

  const value = previewGenerator(tree, varNames);

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
