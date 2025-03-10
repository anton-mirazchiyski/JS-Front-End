function solve(cityInfo) {
    Object.keys(cityInfo)
    .forEach(propName => console.log(`${propName} -> ${cityInfo[propName]}`));
}

solve(
    {
        name: "Sofia",
        area: 492,
        population: 1238438,
        country: "Bulgaria", 
        postCode: "1000"
    }
);
console.log('');

solve(
    {
        name: "Plovdiv",
        area: 389,
        population: 1162358,
        country: "Bulgaria",
        postCode: "4000"
    }
);
