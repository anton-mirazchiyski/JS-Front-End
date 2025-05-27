function solve(input) {
    const cars = {};

    for (const carInfo of input) {
        const [direction, carNumber] = carInfo.split(', ');

        if (direction === 'IN') {
            cars[carNumber] = direction;
        } else if (direction === 'OUT') {
            delete cars[carNumber];
        }
    }

    const carNumbers = Object.keys(cars);
    if (carNumbers.length == 0) {
        return console.log('Parking Lot is Empty');
    }

    carNumbers
        .sort()
        .forEach(carNumber => console.log(carNumber));
}


solve([
    'IN, CA2844AA', 
    'IN, CA1234TA', 
    'OUT, CA2844AA', 
    'IN, CA9999TT', 
    'IN, CA2866HI', 
    'OUT, CA1234TA', 
    'IN, CA2844AA', 
    'OUT, CA2866HI', 
    'IN, CA9876HH', 
    'IN, CA2822UU'
]);

console.log('');

solve([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'OUT, CA1234TA'
]);
