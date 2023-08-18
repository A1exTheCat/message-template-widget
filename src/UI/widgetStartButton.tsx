import React from "react";

// Define the props type
interface StartButtonProps {
  onClick: () => void;  // Assuming that the onClick prop is a function that takes no arguments and returns void.
}

const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
    <div className="start-page">
      <button className="start-button" onClick={onClick}>
        Message Editor
      </button>
    </div>
  );
};

export default StartButton;
