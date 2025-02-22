function factorialDivision(num1, num2) {
    const firstFactorial = calcFactorial(num1);
    const secondFactorial = calcFactorial(num2);

    const result = firstFactorial / secondFactorial;

    return result.toFixed(2);

    function calcFactorial(num) {
        if (num === 0) {
            return 1;
        }

        return num * calcFactorial(num - 1);
    }
}

console.log(factorialDivision(5, 2));
console.log(factorialDivision(6, 2));
