function solve(input) {
    const armyLeaders = [];

    for (const info of input) {
        if (info.includes('arrives')) {
            const leader = info.split(' arrives')[0];
            const armyLeader = {
                ['leader']: leader,
                armies: [],
                totalArmyCount: 0
            };
            armyLeaders.push(armyLeader);

        } else if (info.includes(':')) {
            const [leaderName, armyInfo] = info.split(': ');
            const [armyName, armyCount] = armyInfo.split(', ');
            const count = Number(armyCount);

            const leader = findLeaderByName(leaderName, armyLeaders);
            if (leader) {
                const army = {
                    name: armyName,
                    count,
                };
                leader.armies.push(army);
                leader.totalArmyCount += count;
            }

        } else if (info.includes('+')) {
            const [armyName, armyCount] = info.split(' + ');
            const count = Number(armyCount);

            const [leader, army] = findArmyByName(armyName, armyLeaders);
            
            if (army) {
                army.count += count;  
                leader.totalArmyCount += count;
            }

        } else if (info.includes('defeated')) {
            const leaderName = info.split(' defeated')[0];
            const leaderIdx = armyLeaders.findIndex(leader => leader['leader'] === leaderName);

            armyLeaders.splice(leaderIdx, 1);
        }
    }

    const sortedArmyLeaders = sortArmyLeaders(armyLeaders);
    printArmyLeaders(sortedArmyLeaders);


    function findLeaderByName(leaderName, leaders) {
        return leaders.find(leader => leader['leader'] === leaderName);
    }

    function findArmyByName(armyName, leaders) {
        for (let leader of leaders) {
            const foundArmy = leader.armies.find(army => army.name === armyName);
            if (foundArmy) {
                return [leader, foundArmy];
            }
        }
        return [null, null];
    }

    function sortArmyLeaders(armyLeaders) {
        const result = armyLeaders.toSorted((leaderOne, leaderTwo) =>leaderTwo.totalArmyCount - leaderOne.totalArmyCount);
        result.forEach(leader => leader.armies.sort((armyOne, armyTwo) => armyTwo.count - armyOne.count));

        return result;
    }

    function printArmyLeaders(armyLeaders) {
        armyLeaders.forEach(armyLeader => {
            console.log(`${armyLeader['leader']}: ${armyLeader.totalArmyCount}`);
            armyLeader.armies.forEach(army => console.log(`>>> ${army.name} - ${army.count}`));
        });
    }
}


solve(
    [
    'Rick Burr arrives',
    'Fergus: Wexamp, 30245',
    'Rick Burr: Juard, 50000', 
    'Findlay arrives',
    'Findlay: Britox, 34540',
    'Wexamp + 6000',
    'Juard + 1350',
    'Britox + 4500',
    'Porter arrives',
    'Porter: Legion, 55000',
    'Legion + 302',
    'Rick Burr defeated',
    'Porter: Retix, 3205'
    ]
);

console.log('');
console.log('');

solve(
    [
    'Rick Burr arrives',
    'Findlay arrives',
    'Rick Burr: Juard, 1500',
    'Wexamp arrives',
    'Findlay: Wexamp, 34540',
    'Wexamp + 340',
    'Wexamp: Britox, 1155',
    'Wexamp: Juard, 43423'
    ]
);
