function solve(input) {
    const employees = {};

    input.forEach((name) => {
        const personalNumber = name.length;
        employees[name] = personalNumber;
    });

    Object.keys(employees)
        .forEach(employeeName => console.log(`Name: ${employeeName} -- Personal Number: ${employees[employeeName]}`))
}


solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]);
console.log('');

solve([
    'Samuel Jackson',
    'Will Smith',
    'Bruce Willis',
    'Tom Holland'
]);
