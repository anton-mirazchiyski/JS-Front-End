function solve() {
  const textAreaElement = document.getElementById('input');
  const outputElement = document.getElementById('output');

  const sentences = textAreaElement.value.split('.')
                                        .map(sentence => sentence.trim() + '.')
                                        .filter(sentence => sentence.length > 1);

  const paragraphSentences = [];
  let paragraphElement = '';

  while (sentences.length > 0) {
    const currentSentence = sentences.shift();
    paragraphSentences.push(currentSentence);

    if (paragraphSentences.length == 3) {
      paragraphElement = `<p>${paragraphSentences.join(' ')}</p>`;
      outputElement.innerHTML += paragraphElement;
      paragraphSentences.length = 0;
      paragraphElement = '';
    }
  }

  if (paragraphSentences.length > 0) {
      paragraphElement = `<p>${paragraphSentences.join(' ')}</p>`;
      outputElement.innerHTML += paragraphElement;
  }
}
