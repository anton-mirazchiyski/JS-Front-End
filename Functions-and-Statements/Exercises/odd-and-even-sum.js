function solve(number) {
    const digits = number.toString().split('').map(digit => Number(digit));

    const oddSum = digits
        .filter(digit => digit % 2 !== 0)
        .reduce((a, b) => a + b, 0);

    const evenSum = digits
        .filter(digit => digit % 2 === 0)
        .reduce((a, b) => a + b, 0);

    return `Odd sum = ${oddSum}, Even sum = ${evenSum}`;
}

console.log(solve(1000435));
console.log(solve(3495892137259234));
