const solve = (text, n) => text.repeat(n);

console.log(solve('abc', 3));


function solve2(text, n) {
    let result = '';

    for (let i = 0; i < n; i++) {
        result += text;
    }

    return result;
}

console.log(solve2('String', 2));
