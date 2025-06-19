function extract(content) {
    const paragraphElement = document.getElementById(content);

    const text = paragraphElement.textContent;

    const extractedWords = text.match(/\([A-Za-z\s]+\)/gm);
    
    const result = extractedWords.map(word => {
        const textOfWord = word.replace('(', '').replace(')', '');
        return textOfWord;
    });
    
    return result.join('; ');
}
