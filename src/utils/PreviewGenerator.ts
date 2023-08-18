type TreeNode = {
  id: number;
  type: string;
  textareas: string[];
  structure: (string | number)[];
};

type VariableObject = { [key: string]: string };

const previewGenerator = (template: TreeNode[], varNames: VariableObject): string => {
  
  const replaceValues = (text: string): string => {
    const regex = /\{([^}]+)\}/g;
    return text.replace(regex, (match, key) => {
      return varNames[key] ?? match;
    });
  };

  const checkValues = (text: string): boolean => {
    const regex = /^\{([^\s}]+)\}$/;
    const match = text.match(regex);
    return Boolean(match && varNames[match[1]]);
  };

  const inicialTree = template.find((node) => node.type === 'component' || node.type ==='initial');
  if (!inicialTree) {
    throw new Error("Initial tree not found");
  }

  const fromNodeToText = (node: TreeNode): string => {
    const nodeResult: string[] = [];
    const { textareas, structure } = node;

    nodeResult.push(replaceValues(textareas[0]));
    if (checkValues(textareas[1])) {
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

  return fromNodeToText(inicialTree);
}

export default previewGenerator;
