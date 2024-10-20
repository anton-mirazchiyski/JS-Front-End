function solve(firstNum, secondNum, thirdNum) {
    const sum = (a, b) => a + b;

    const subtract = (sumFunc, c) => sumFunc - c;
    
    let result = subtract(sum(firstNum, secondNum), thirdNum);
    return result
}

console.log(solve(
    23,
    6,
    10));

console.log(solve(
    1,
    17,
    30));

console.log(solve(
    42,
    58,
    100
));
