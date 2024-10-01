function solve(text, searchedWord) {
    let occurrences = 0;
    const words = text.split(' ');

    for (let word of words) {
        if (word === searchedWord) {
            occurrences += 1
        }
    }

    console.log(occurrences);
}

solve('This is a word and it also is a sentence',
'is');
solve('softuni is great place for learning new programming languages',
'softuni');


function solve2(text, searchedWord) {
    const result = text
    .split(' ')
    .filter(word => word === searchedWord)
    .length;

    console.log(result);
}

solve2('This is a word and it also is a sentence',
    'is');
