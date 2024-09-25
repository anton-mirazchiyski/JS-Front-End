function solve(number) {
    const digits = number.toString();
    let digitsSum = 0;

    for (let i = 0; i < digits.length; i++) {
        let digit = Number(digits[i]);
        digitsSum += digit
    }

    console.log(digitsSum);
}

solve(97561);
solve(245678);
