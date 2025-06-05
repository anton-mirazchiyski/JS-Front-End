function solve(input) {
    const garages = {};
    
    for (const garageInfo of input) {
        const [garageNumber, carInfo] = garageInfo.split(' - ');

        if (!garages.hasOwnProperty(garageNumber)) {
            garages[garageNumber] = [];
        }

        const car = {};
        carInfo.split(', ').forEach(info => {
            const [key, value] = info.split(': ');
            car[key] = value;
        });
        garages[garageNumber].push(car);
    }

    for (const garageNumber in garages) {
        console.log(`Garage № ${garageNumber}`);

        const cars = garages[garageNumber];
        cars.forEach(car => {
            let printResult = [];
            Object.keys(car).forEach(propName => printResult.push(`${propName} - ${car[propName]}`));
            console.log(`--- ${printResult.join(', ')}`);
        });  
    }
}


solve(
    [
    '1 - color: blue, fuel type: diesel', 
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
    ]
);

console.log('');
console.log('');

solve(
    [
    '1 - color: green, fuel type: petrol',
    '1 - color: dark red, manufacture: WV',
    '2 - fuel type: diesel',
    '3 - color: dark blue, fuel type: petrol'
    ] 
);
