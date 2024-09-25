function solve(firstNum, secondNum) {
    let numbers = '';
    let numbersSum = 0;

    for (let i = firstNum; i <= secondNum; i++) {
        numbers += `${i} `;
        numbersSum += i;
    }

    console.log(numbers.trimEnd());
    console.log(`Sum: ${numbersSum}`);
}

solve(5, 10);
solve(0, 26);
solve(50, 60);