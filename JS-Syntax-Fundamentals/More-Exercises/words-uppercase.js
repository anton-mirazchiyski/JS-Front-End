function solve(text) {
    const pattern = /\b[A-Za-z0-9]+\b/gm;

    const words = text.match(pattern);
    
    if (words) {
        const upperCaseWords = words.map((word) => word.toUpperCase());
        console.log(upperCaseWords.join(', '));
    }
}

solve('Hi, how are you?');
solve('hello');
solve('6 and 7');
