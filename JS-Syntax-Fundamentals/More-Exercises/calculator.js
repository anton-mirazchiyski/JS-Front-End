function solve(firstNum, operator, secondNum) {
    let result;

    switch (operator) {
        case '+':
            result = firstNum + secondNum;
            break;
        case '-':
            result = firstNum - secondNum;
            break;
        case '*':
            result = firstNum * secondNum;
            break;
        case '/':
            result = firstNum / secondNum;
            break;
    }

    console.log(result.toFixed(2));
}

solve(5, '+', 10);
solve(25.5, '-', 3);


function solve2(firstNum, operator, secondNum) {
    const mathOperations = {
        '+': firstNum + secondNum,
        '-': firstNum - secondNum,
        '*': firstNum * secondNum,
        '/': firstNum / secondNum,
    };

    const result = mathOperations[operator];
    console.log(result.toFixed(2));
}

solve2(5, '+', 10);
solve2(25.5, '-', 3);
