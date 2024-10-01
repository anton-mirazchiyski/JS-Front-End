function solve(numbers) {
    const firstElement = numbers[0];
    const lastElement = numbers[numbers.length - 1];

    console.log(firstElement + lastElement);
}

solve([20, 30, 40]);
solve([10, 17, 22, 33]);
solve([11, 58, 69]);


function solve2(numbers) {
    if (numbers.length > 1) {
        const firstElement = numbers.shift();
        const lastElement = numbers.pop();
        return console.log(firstElement + lastElement);
    }

    const [onlyElement] = numbers;
    console.log(onlyElement * 2);
}

solve2([20, 30, 40]);
solve2([10, 17, 22, 33]);
solve2([11, 58, 69]);
solve2([20]);