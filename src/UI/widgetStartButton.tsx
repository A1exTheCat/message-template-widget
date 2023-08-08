//@ts-nocheck
import React from "react";

const StartButton = (props) => {
  return (
    <div className="start-page">
      <button className="start-button" onClick={props.onClick}>
        Message Editor
      </button>
    </div>
  );
};

export default StartButton;
