function solve(numOne, numTwo, numThree) {
    const numbers = [numOne, numTwo, numThree];

    let multiplicationSign = '';
    let negativeNums = 0;

    for (let number of numbers) {
        if (number > 0) {
            multiplicationSign = '+';
            if (negativeNums == 1) {
                multiplicationSign = '-';
            }
        } else {
            negativeNums += 1
            multiplicationSign = '-';
            if (negativeNums == 2) {
                multiplicationSign = '+';
            }
        }
    }

    multiplicationSign === '+' ? console.log('Positive') : console.log('Negative');
}

solve(5,
    12,
    -15);

solve(-1,
    -2,
    -3);

solve(-5,
    1,
    1);
