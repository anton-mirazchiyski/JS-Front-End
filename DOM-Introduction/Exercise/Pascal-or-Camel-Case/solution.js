function solve() {
  const inputTextElement = document.getElementById('text');
  const namingConventionElement = document.getElementById('naming-convention');
  const resultElement = document.getElementById('result');

  const words = inputTextElement.value.split(' ').map(word => word.toLowerCase());

  let result;
  
  switch (namingConventionElement.value) {
    case 'Camel Case':
      result = convertToCamelCase(words);
      break;
    case 'Pascal Case':
      result = convertToPascalCase(words);
      break;
    default:
      result = 'Error!';
  }

  resultElement.textContent = result;


  function convertToCamelCase(words) {
    let result = '';

    const firstWord = words.shift();
    result += firstWord;

    for (let i = 0; i < words.length; i++) {
      const currentWord = words[i];
      const capitalizedWord = currentWord.charAt(0).toUpperCase() + currentWord.slice(1);

      result += capitalizedWord;
    }

    return result;
  }

  function convertToPascalCase(words) {
    let result = '';

    for (const word of words) {
      const capitalizedWord = word.charAt(0).toUpperCase() + word.slice(1);
      result += capitalizedWord;
    }

    return result;
  }
}
