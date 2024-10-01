function solve(words, text) {
    const wordsArray = words.split(', ');
    const textArray = text.split(' ');
    let result = text;

    for (let word of wordsArray) {
        for (let textWord of textArray) {
            if (textWord.includes('*') && word.length == textWord.length) {
                result = result.replace(textWord, word)
            }
        }
    }

    console.log(result);
}

solve('great',
'softuni is ***** place for learning new programming languages');

solve('great, learning',
'softuni is ***** place for ******** new programming languages');
