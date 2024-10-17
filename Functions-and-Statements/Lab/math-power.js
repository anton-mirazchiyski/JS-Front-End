function solve(number, power) {
    return Math.pow(number, power);
}

console.log(solve(2, 8));


const solve2 = (number, power) => number ** power;

console.log(solve2(3, 4));


function solve3(number, power) {
    let result = 1;

    for (let i = 0; i < power; i++) {
        result *= number
    }

    return result;
}

console.log(solve3(2, 8));
