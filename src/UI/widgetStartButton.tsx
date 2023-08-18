import React from "react";
// Определение интерфейса для свойств компонента StartButton.
// Здесь у нас есть только одно свойство - функция, которая будет вызываться при нажатии на кнопку.
interface StartButtonProps {
  onClick: () => void;
}

// Компонент StartButton, представляющий кнопку для запуска редактора сообщений.
const StartButton: React.FC<StartButtonProps> = ({ onClick }) => {
  return (
    // Обертка для кнопки.
    <div className="start-page">
      {/* Кнопка, которая при нажатии вызывает переданную функцию из свойств. */}
      <button className="start-button" onClick={onClick}>
        Message Editor
      </button>
    </div>
  );
};

export default StartButton;
