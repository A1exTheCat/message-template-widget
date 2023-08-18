import React from 'react';

// Определение интерфейса для свойств компонента.
interface PreviewVarsProps {
  varNames: { [key: string]: string };  // Объект с переменными для предпросмотра.
  setVarNames: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;  // Функция для обновления переменных предпросмотра.
}

const PreviewVars: React.FC<PreviewVarsProps> = ({ varNames, setVarNames }) => {
  // Получение ключей объекта varNames.
  const keysVarNames = Object.keys(varNames);

  // Функция для обновления значения переменной.
  const updateVarValue = (variable: string, value: string) => {
    const newValue = { [variable]: value };
    setVarNames(prevVarNames => ({ ...prevVarNames, ...newValue }));
  }

  // Функция для рендера инпута с меткой для каждой переменной.
  const renderFunc = (variable: string) => {
    return (
      <div key={variable} className="preview-variable-input">
        <label htmlFor={variable} className="preview-variable-label">{variable}: </label>
        <input
          type="text"
          id={variable}
          className="preview-variable-text"
          placeholder=""
          value={varNames[variable]}  // Значение переменной.
          onChange={(e) => updateVarValue(variable, e.target.value)}  // Обработчик изменения значения инпута.
        />
      </div>
    )
  }

  // Рендер блока с переменными для предпросмотра.
  return (
    <div className="preview-variables">
      {keysVarNames.map((variable) => renderFunc(variable))}
    </div>
  );
};

export default PreviewVars;
