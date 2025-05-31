function solve(input) {
    const flightsInfo = input[0];
    const newFlightStatuses = input[1];
    const currentStatus = input[2].join('');
    
    const flights = [];

    flightsInfo.forEach(flightInfo => {
        const [number, ...destination] = flightInfo.split(' ');
        flights.push({
            number: number,
            destination: destination.join(' '),
            status: 'Ready to fly'
        });
    });

    for (const info of newFlightStatuses) {
        const [number, status] = info.split(' ');
        const flight = flights.find(flight => flight.number == number);

        if (flight) {
            flight.status = status;
        }
    }

    let remainingFlights;

    if (currentStatus === 'Ready to fly') {
        remainingFlights = flights.filter(flight => flight.status !== 'Cancelled');
    } else {
        remainingFlights = flights.filter(flight => flight.status === 'Cancelled');
    }

    remainingFlights.forEach(flight => console.log(`{ Destination: '${flight.destination}', Status: '${flight.status}' }`));
}


solve([
    ['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],

    ['Cancelled']
]);

console.log('');


solve([
    ['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],

    ['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK330 Cancelled'],

    ['Ready to fly']
]);
