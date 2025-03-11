function solve(contactsInfo) {
    const phoneBook = {};

    for (const info of contactsInfo) {
        const [name, phone] = info.split(' ');
        phoneBook[name] = phone;
    }

    Object.keys(phoneBook)
        .forEach(name => console.log(`${name} -> ${phoneBook[name]}`));
}

solve(
    [   'Tim 0834212554',
        'Peter 0877547887',
        'Bill 0896543112', 
        'Tim 0876566344'
    ]
);

console.log('');

solve(
    [
        'George 0552554',
        'Peter 087587',
        'George 0453112',
        'Bill 0845344'
    ]
);
