function solve(word, text) {
    const pattern = new RegExp(`\\b${word}\\b`, 'mi')

    if (pattern.test(text)) {
        return console.log(word);
    }

    console.log(`${word} not found!`);
}

solve('javascript',
'JavaScript is the best programming language. I like Javascript');

solve('python',
'JavaScript is the best programming language');


function solve2(word, text) {
    const words = text.toLowerCase().split(' ');
    const isIncluded = words.includes(word.toLowerCase())

    return isIncluded ? console.log(word) : console.log(`${word} not found!`);
}

solve2('javascript',
    'JavaScript is the best programming language. I like Javascript');
