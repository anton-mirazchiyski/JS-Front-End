function solve(firstChar, secondChar) {
    let start = firstChar.charCodeAt();
    let end = secondChar.charCodeAt();

    let result = '';

    if (start > end) {
        [start, end] = [end, start];
    }

    for (let i = start + 1; i < end; i++) {
        result += String.fromCharCode(i) + ' ';
    }

    return result.trim();
}

console.log(solve('a', 'd'));
console.log(solve('#', ':'));
console.log(solve('C', '#'));
