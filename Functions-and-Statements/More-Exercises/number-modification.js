function solve(number) {
    const digits = number.toString().split('').map((digit) => Number(digit));
    let digitsSum = digits.reduce((a, b) => a + b, 0);

    const incrementor = 9;

    while (digitsSum / digits.length < 5) {
        digits.push(incrementor);
        digitsSum += incrementor;
    }
    
    return digits.join('');
}

console.log(solve(5835));
console.log(solve(101));
