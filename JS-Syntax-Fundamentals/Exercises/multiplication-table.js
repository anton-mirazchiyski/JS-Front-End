function solve(number) {
    for (let i = 1; i < 11; i++) {
        let result = number * i;
        console.log(`${number} X ${i} = ${result}`);
    }
}

solve(5);
console.log('');
solve(2);
