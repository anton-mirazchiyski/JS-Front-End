function solve(commands) {
    let carCleanlinessValue = 0;

    for (let command of commands) {
        switch (command) {
            case 'soap':
                carCleanlinessValue += 10;
                break;
            case 'water':
                carCleanlinessValue += carCleanlinessValue * 0.2;
                break;
            case 'vacuum cleaner':
                carCleanlinessValue += carCleanlinessValue * 0.25;
                break;
            case 'mud':
                carCleanlinessValue -= carCleanlinessValue * 0.1;
                break;
        }
    }

    return `The car is ${carCleanlinessValue.toFixed(2)}% clean.`;
}

console.log(solve(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']));
console.log(solve(["soap", "water", "mud", "mud", "water", "mud", "vacuum cleaner"]));
