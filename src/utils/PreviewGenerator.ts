//@ts-nocheck

const previewGenerator = (template, varNames) => {
  const replaceValues = (text) => {
    // Регулярное выражение для поиска подстрок вида {ключ}
    const regex = /\{([^}]+)\}/g;
    // Заменяем все подстроки в тексте
    const replacedText = text.replace(regex, (match, key) => {
        if (varNames.hasOwnProperty(key)) {
            return varNames[key];
        }
        // Если ключ отсутствует, возвращаем исходное совпадение
        return match;
    });
    return replacedText;
  };

  const checkValues = (text) => {
    // Регулярное выражение для поиска подстрок вида {ключ}
    const regex = /^\{([^\s}]+)\}$/;
    const match = text.match(regex);
    return match && varNames.hasOwnProperty(match[1]) && varNames[match[1]] !== '';
  };

  const inicialTree = template.find((node) => node.type === 'component' || node.type ==='initial');

  const fromNodeToText = (node) => {
    const nodeResult = [];
    const { textareas, structure } = node;

      nodeResult.push(replaceValues(textareas[0]));
    if (checkValues(textareas[1])) {
      if (structure[2] === 'text') {
        nodeResult.push(replaceValues(textareas[2]));
      } else {
        nodeResult.push(fromNodeToText(template.find((node) => node.id === structure[2])));
      }
    } else {
      if (structure[3] === 'text') {
        nodeResult.push(replaceValues(textareas[3]));
      } else {
        nodeResult.push(fromNodeToText(template.find((node) => node.id === structure[3])));
      }
    }
    nodeResult.push(replaceValues(textareas[4]));

    return nodeResult.join(' ');
  }

  const result = fromNodeToText(inicialTree);

  return result;
}

export default previewGenerator;