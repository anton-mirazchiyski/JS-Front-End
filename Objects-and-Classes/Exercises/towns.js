function solve(input) {
    const towns = [];

    for (const townInfo of input) {
        const [townName, latitude, longitude] = townInfo.split(' | ');
        const town = {
            town: townName, 
            latitude: Number(latitude).toFixed(2), 
            longitude: Number(longitude).toFixed(2)
        };
        towns.push(town);
    }

    towns.forEach(town => console.log(town));
}


solve(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
console.log('');
solve(['Plovdiv | 136.45 | 812.575']);
