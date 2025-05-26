function solve(input) {
    const heroes = [];

    for (let heroInfo of input) {
        const [name, level, items] = heroInfo.split(' / ');
        const hero = {
            name,
            level: Number(level),
            items: items.split(', ')
        };

        heroes.push(hero);
    }

    const sortedHeroes = heroes.toSorted((a, b) => a.level - b.level);

    sortedHeroes.forEach(hero => printHeroData(hero));

    function printHeroData(data) {
        for (propName in data) {
            switch (propName) {
                case 'name':
                    console.log(`Hero: ${data[propName]}`);
                    break;
                case 'level':
                    console.log(`level => ${data[propName]}`);
                    break; 
                case 'items':
                    console.log(`items => ${data[propName].join(', ')}`);
                    break;
            }
        }
    }
}


solve([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]);

console.log('');

solve([
    'Batman / 2 / Banana, Gun',
    'Superman / 18 / Sword',
    'Poppy / 28 / Sentinel, Antara'
]);
