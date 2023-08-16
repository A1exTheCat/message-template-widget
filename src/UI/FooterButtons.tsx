//@ts-nocheck
import React from "react";

const FooterButtons = ({ setPreview, callbackSave, setEditorStatus, tree }) => {
  
  return (
    <div className="footer-buttons">
      <button className="footer-button" onClick={() => setPreview(true)}>Preview</button>
      <button className="footer-button" onClick={async () => await callbackSave(tree)}>Save</button>
      <button className="footer-button" onClick={() => setEditorStatus(false)}>Close</button>
    </div>
  )
}

export default FooterButtons;