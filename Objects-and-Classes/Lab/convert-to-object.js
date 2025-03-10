function solve(jsonData) {
    const data = JSON.parse(jsonData);
    
    Object.keys(data)
    .forEach(propName => console.log(`${propName}: ${data[propName]}`));
}

solve('{"name": "George", "age": 40, "town": "Sofia"}');
console.log('');

solve('{"name": "Peter", "age": 35, "town": "Plovdiv"}');
