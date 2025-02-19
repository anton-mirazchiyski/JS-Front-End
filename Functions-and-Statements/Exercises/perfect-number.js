function solve(number) {
    let divisorsSum = 0;

    for (let i = 1; i < number; i++) {
        if (number % i === 0) {
            divisorsSum += i;
        }
    }

    return number === divisorsSum ? "We have a perfect number!" : "It's not so perfect."
}

console.log(solve(6));
console.log(solve(28));
console.log(solve(1236498));
