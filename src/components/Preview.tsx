//@ts-nocheck
import React from "react";
import TextareaAutosize from 'react-textarea-autosize';

const Preview = () => {
  return (<div className="preview-modal">
    <div className="preview-block">
      <h2>Message Preview</h2>
      <TextareaAutosize
        className="preview-textarea"
        minRows="3"
        placeholder="Preview"
        value={''}
      />
      <h3>Variables:</h3>
      <div className="preview-variables">
        <input type="text" className="preview-variable-input" />
        <input type="text" className="preview-variable-input" />
        <input type="text" className="preview-variable-input" />
        <input type="text" className="preview-variable-input" />
        <input type="text" className="preview-variable-input" />
        <input type="text" className="preview-variable-input" />
        <input type="text" className="preview-variable-input" />
      </div>
      <button className="preview-close-button" onClick={() => console.log('s')}>Close</button>
      <button className="preview-close" onClick={() => console.log('s')}>&times;</button>
    </div>
  </div>)
};

export default Preview;
