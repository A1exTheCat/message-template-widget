//@ts-nocheck
import IfButton from "../UI/IfButton";
import VariableButton from "../UI/variableButton";
import Template from "../components/Template";

const MessageEditor = (props) => {
  const { arrVarNames, template, callbackSave } = props;

  return (
    <div className="editor-page-container">
      <h1 className="header">Message Template Editor</h1>
      <div className="var-buttons-block">
        {arrVarNames.map((name) => <VariableButton btnName={name} key={arrVarNames.indexOf(name)} />)}
      </div>
      <IfButton />
      <Template />
    </div>
  );
};

export default MessageEditor;