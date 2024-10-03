function solve(miningShift) {
    const bitcoinPrice = 11949.16;
    const gramOfGoldPrice = 67.51;

    let currentMoney = 0;
    let boughtBitcoins = 0;
    let dayOfFirstBitcoin;

    for (let i = 0; i < miningShift.length; i++) {
        const day = i + 1;
        let minedGold = miningShift[i];
        if (day % 3 == 0) {
            minedGold -= minedGold * 0.3;
        }
        currentMoney += minedGold * gramOfGoldPrice;
        while (currentMoney - bitcoinPrice >= 0) {
            currentMoney -= bitcoinPrice;
            boughtBitcoins += 1;
            if (boughtBitcoins === 1) {
                dayOfFirstBitcoin = day;
            }
        }
    }

    console.log(`Bought bitcoins: ${boughtBitcoins}`);
    if (boughtBitcoins) {
        console.log(`Day of the first purchased bitcoin: ${dayOfFirstBitcoin}`);
    }
    console.log(`Left money: ${currentMoney.toFixed(2)} lv.`);
}

solve([100, 200, 300]);
console.log('');
solve([50, 100]);
console.log('');
solve([3124.15, 504.212, 2511.124]);
