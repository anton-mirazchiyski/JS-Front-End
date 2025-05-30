function solve(input) {
    const searchedWords = input.shift().split(' ');
    const sentence = input.join(' ');

    const wordsOccurrences = {};
    
    for (const word of searchedWords) {
        const pattern = new RegExp(`\\b${word}\\b`, 'g');
        const occurrences = Array.from(sentence.matchAll(pattern)).length;
        
        wordsOccurrences[word] = occurrences;
    }

    const sortedWordsOccurrences = Object.entries(wordsOccurrences)
                                        .sort((a, b) => b[1] - a[1]);
    
    for (const [word, occurrence] of sortedWordsOccurrences) {
        console.log(`${word} - ${occurrence}`);
    }  
}

solve([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]);
console.log('');

solve([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence'
]);
