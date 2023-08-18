import { useState } from 'react';
import StartButton from './UI/widgetStartButton';
import MessageEditor from './modules/widgetMessageEditor';
import './App.css';

// Определение типа для элемента шаблона
interface TemplateItem {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

function App() {
  // Состояние для отслеживания активности редактора сообщений
  const [editorStatus, setEditorStatus] = useState<boolean>(false);
  
  // Загрузка имен переменных из localStorage или установка значений по умолчанию
  const arrVarNames: string[] = localStorage.arrVarNames ? JSON.parse(localStorage.arrVarNames) : ['firstname', 'lastname', 'company', 'position'];
  
  // Загрузка шаблона из localStorage
  const storedTemplate: string | null = localStorage.template;
  const template: TemplateItem[] = storedTemplate ? JSON.parse(storedTemplate) : null;

  // Функция сохранения обновленного шаблона в localStorage
  const callbackSave = async (updatedTemplate: TemplateItem[]) => {
    await localStorage.setItem('template', JSON.stringify(updatedTemplate));
  }

  // Отображение редактора сообщений или стартовой кнопки в зависимости от состояния editorStatus
  return (
    <div className="App">
      {editorStatus ? 
        <MessageEditor
          arrVarNames={arrVarNames}
          template={template}
          callbackSave={callbackSave}
          setEditorStatus={setEditorStatus}
        />
        : 
        <StartButton onClick={() => setEditorStatus(true)}/>
      }
    </div>
  );
}

export default App;
