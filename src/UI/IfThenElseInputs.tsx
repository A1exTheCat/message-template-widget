//@ts-nocheck
import React from "react";

const IfThenElseInputs = (props) => {

  return (
    <div className="if-then-else-block">
      <textarea placeholder="Textarea" className="text-intup"></textarea>
      <div className="if-then-else-line">
        <div className="if-then-else-line-left">
          <span className="if-button-small">IF</span>
          <button className="delete-btn">Delete</button>
        </div>
        <div className="if-then-else-line-right">
        <textarea placeholder="Textarea" className="text-intup"></textarea>
        </div>
      </div>
      <div className="if-then-else-line">
        <div className="if-then-else-line-left">
          <span className="if-button-small">THEN</span>
        </div>
        <div className="if-then-else-line-right">
        <textarea placeholder="Textarea" className="text-intup"></textarea>
        </div>
      </div>
      <div className="if-then-else-line">
        <div className="if-then-else-line-left">
          <span className="if-button-small">ELSE</span>
        </div>
        <div className="if-then-else-line-right">
        <textarea placeholder="Textarea" className="text-intup"></textarea>
        </div>
      </div>
      <textarea placeholder="Textarea" className="text-intup"></textarea>
    </div>
  )
}

export default IfThenElseInputs;