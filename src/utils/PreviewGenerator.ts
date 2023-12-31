// Определение типов данных для узла дерева и объекта с переменными.
type TreeNode = {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
};

type VariableObject = { [key: string]: string };

// Функция для генерации предварительного просмотра текстового сообщения.
const previewGenerator = (template: TreeNode[], varNames: VariableObject): string => {
  
  // Замена переменных в тексте на их реальные значения из varNames.
  const replaceValues = (text: string): string => {
    const regex = /\{([^}]+)\}/g;
    return text.replace(regex, (match, key) => {
      return varNames[key] ?? match;
    });
  };

  // Поиск начального узла в дереве.
  const inicialTree = template.find((node) => node.type === 'component' || node.type ==='initial');
  if (!inicialTree) {
    throw new Error("Initial tree not found");
  }

  // Рекурсивная функция, преобразующая узел дерева в строку текста.
  const fromNodeToText = (node: TreeNode): string => {
    const nodeResult: string[] = [];
    const { textareas, structure } = node;

    nodeResult.push(replaceValues(textareas[0]));

    if (replaceValues(textareas[1]) !== '') {
      if (structure[2] === 'text') {
        nodeResult.push(replaceValues(textareas[2]));
      } else {
        const childNode = template.find((innerNode) => innerNode.id === structure[2]);
        if (childNode) {
          nodeResult.push(fromNodeToText(childNode));
        }
      }
    } else {
      if (structure[3] === 'text') {
        nodeResult.push(replaceValues(textareas[3]));
      } else {
        const childNode = template.find((innerNode) => innerNode.id === structure[3]);
        if (childNode) {
          nodeResult.push(fromNodeToText(childNode));
        }
      }
    }

    nodeResult.push(replaceValues(textareas[4]));

    return nodeResult.join(' ');
  }

  // Возвращаем сгенерированный текст на основе начального узла.
  return fromNodeToText(inicialTree);
}

export default previewGenerator;
