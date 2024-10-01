function solve(numbers) {
    const sortedNumbers = numbers.toSorted((a, b) => a - b);
    let result = [];

    while (sortedNumbers.length > 0) {
        const firstElement = sortedNumbers.shift();
        const lastElement = sortedNumbers.pop();
        result.push(firstElement, lastElement);
    }

    return result;
}

console.log(solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]));
