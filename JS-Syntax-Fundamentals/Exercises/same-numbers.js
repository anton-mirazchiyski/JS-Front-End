function solve(number) {
    const digits = number.toString();
    const firstDigit = digits[0];

    let digitsSum = Number(firstDigit);
    let areSame = true;

    for (let i = 1; i < digits.length; i++) {
        let currentDigit = Number(digits[i]);
        if (currentDigit != firstDigit) {
            areSame = false;
        }
        digitsSum += currentDigit;
    }

    console.log(areSame);
    console.log(digitsSum);
}

solve(2222222);
solve(1234);
solve(1115111);
