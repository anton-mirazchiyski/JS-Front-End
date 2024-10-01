function solve(text, startIndex, count) {
    const result = text.substring(startIndex, count + startIndex);
    console.log(result);
}

solve('ASentence', 1, 8);
solve('SkipWord', 4, 7);
