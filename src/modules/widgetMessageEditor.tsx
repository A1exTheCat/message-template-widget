import React, { useState, FC, SetStateAction, Dispatch } from "react";
import IfButton from "../UI/IfButton";
import VariableButton from "../UI/variableButton";
import Template from "../components/Template";
import FooterButtons from "../UI/FooterButtons";
import Preview from "../components/Preview";

// Определение интерфейса для объекта Cursor
interface Cursor {
  id: number;
  index: number;
  position: number;
}

// Определение интерфейса для объекта TreeNode, представляющего узел дерева
interface TreeNode {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
}

// Определение интерфейса для свойств компонента MessageEditor
interface MessageEditorProps {
  arrVarNames: string[];
  template: TreeNode[] | null;
  callbackSave: (template: TreeNode[]) => Promise<void>;
  setEditorStatus: (status: boolean) => void;
}

// Определение интерфейса для контекста CursorContextType
interface CursorContextType {
  cursor: Cursor;
  setCursor: Dispatch<SetStateAction<Cursor>>;
}

// Создание контекста CursorContext
export const CursorContext = React.createContext<CursorContextType>({} as CursorContextType);

// Главный компонент - MessageEditor
const MessageEditor: FC<MessageEditorProps> = ({ arrVarNames, template, callbackSave, setEditorStatus }) => {
  // Состояние дерева шаблона
  const [tree, setTree] = useState<TreeNode[]>(template || [
    {
      id: 1,
      type: 'initial',
      textareas: ['', '', '', '', ''],
      structure: ['text', 'text', 'text', 'text', 'text'],
    },
  ]);

  // Состояние курсора
  const [cursor, setCursor] = useState<Cursor>({
    id: 1,
    index: 0,
    position: 0,
  });

  // Состояние предварительного просмотра
  const [preview, setPreview] = useState<boolean>(false);
  
  return (
    // Оборачиваем компонент в CursorContext.Provider для доступа к состоянию курсора
    <CursorContext.Provider value={{ cursor, setCursor }}>
      <div className="editor-page-container">
        <h1 className="header">Message Template Editor</h1>
        <div className="var-buttons-block">
          {arrVarNames.map((name, index) => (
            <VariableButton btnName={name} tree={tree} setTree={setTree} key={index} />
          ))}
        </div>
        <IfButton tree={tree} setTree={setTree} />
        <Template tree={tree} setTree={setTree} />
        <FooterButtons tree={tree} setPreview={setPreview} callbackSave={callbackSave} setEditorStatus={setEditorStatus} />
        {preview && <Preview tree={tree} arrVarNames={arrVarNames} setPreview={setPreview} />}
      </div>
    </CursorContext.Provider>
  );
};

export default MessageEditor;
