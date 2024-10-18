function solve(numOne, numTwo, operator) {
    const operations = {
        multiply: (a, b) => a * b,
        divide: (a, b) => a / b,
        add: (a, b) => a + b,
        subtract: (a, b) => a - b,
    };

    const result = operations[operator](numOne, numTwo);
    console.log(result);
}

solve(5, 5, 'multiply');
solve(40, 8, 'divide');
solve(12, 19, 'add');
solve(50, 13, 'subtract');


function solve2(numOne, numTwo, operator) {

    switch (operator) {
        case 'multiply':
            return numOne * numTwo;
        case 'divide':
            return numOne / numTwo;
        case 'add':
            return numOne + numTwo;
        case 'subtract':
            return numOne - numTwo;
    }
}

console.log(solve2(5, 5, 'multiply'));
