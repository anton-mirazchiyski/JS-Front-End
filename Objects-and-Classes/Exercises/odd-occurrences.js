function solve(input) {
    const lowercaseWords = input.toLowerCase().split(' ');

    const wordsOccurrences = {};

    for (const word of lowercaseWords) {
        if (wordsOccurrences.hasOwnProperty(word)) {
            wordsOccurrences[word] += 1;
        } else {
            wordsOccurrences[word] = 1;
        }
    }

    const oddOccurrences = Object.keys(wordsOccurrences)
                            .filter(word => wordsOccurrences[word] % 2 != 0)
                            .join(' ');

    console.log(oddOccurrences);
}


solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
console.log('');
solve('Cake IS SWEET is Soft CAKE sweet Food');
