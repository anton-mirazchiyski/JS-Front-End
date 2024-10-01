function solve(text, word) {
    let result = text;
    const replacement = '*'.repeat(word.length);

    while (result.includes(word)) {
        result = result.replace(word, replacement);
    }

    console.log(result);
}

solve('A small sentence with some words', 'small');
solve('Find the hidden word', 'hidden');
solve('hidden-word-hidden', 'hidden');


function solve2(text, word) {
    let censored = text.replace(word, repeat(word))

    while (censored.includes(word)) {
        censored = censored.replace(word, repeat(word))
    }

    console.log(censored);

    function repeat(word) {
        return '*'.repeat(word.length)
    }
}

solve2('Find the hidden word', 'hidden');
