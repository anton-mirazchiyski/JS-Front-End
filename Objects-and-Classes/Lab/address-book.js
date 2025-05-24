function solve(input) {
    const addressBook = {};

    input.forEach(info => {
        const [name, address] = info.split(':');
        addressBook[name] = address;
    });

    Object.keys(addressBook).sort().forEach(contact => console.log(`${contact} -> ${addressBook[contact]}`));
}


solve(['Tim:Doe Crossing',
    'Bill:Nelson Place',
    'Peter:Carlyle Ave',
    'Bill:Ornery Rd']);

console.log('');

solve(['Bob:Huxley Rd',
    'John:Milwaukee Crossing',
    'Peter:Fordem Ave',
    'Bob:Redwing Ave',
    'George:Mesta Crossing',
    'Ted:Gateway Way',
    'Bill:Gateway Way',
    'John:Grover Rd',
    'Peter:Huxley Rd',
    'Jeff:Gateway Way',
    'Jeff:Huxley Rd']);
