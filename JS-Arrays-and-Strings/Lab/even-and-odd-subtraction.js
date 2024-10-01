function solve(numbers) {
    let evenSum = 0;
    let oddSum = 0;

    for (let number of numbers) {
        if (number % 2 === 0) {
            evenSum += number;
        } else {
            oddSum += number;
        }
    }

    console.log(evenSum - oddSum);
}

solve([1,2,3,4,5,6]);
solve([3,5,7,9]);
solve([2,4,6,8,10]);


function solve2(numbers) {
    const evenNumbers = numbers.filter(num => num % 2 === 0);
    const oddNumbers = numbers.filter(num => num % 2 !== 0);

    const evenSum = evenNumbers.reduce((sum, number) => sum + number, 0);
    const oddSum = oddNumbers.reduce((sum, number) => sum + number, 0);
    
    console.log(evenSum - oddSum);
}

solve2([1,2,3,4,5,6]);
