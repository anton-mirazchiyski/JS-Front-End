function solve(firstName, lastName, hairColor) {
    const personInfo = {
        name: firstName,
        lastName,
        hairColor,
    }

    const jsonData = JSON.stringify(personInfo);
    console.log(jsonData);
}

solve('George', 'Jones', 'Brown');
console.log('');
solve('Peter', 'Smith', 'Blond' );
