function solve(startingYield) {
    let currentYield = startingYield;

    let totalDaysOfOperation = 0, spiceExtracted = 0;
    const minerConsumption = 26;
    
    while (currentYield >= 100) {
        totalDaysOfOperation += 1;
        spiceExtracted += currentYield;
        if (spiceExtracted >= minerConsumption) {
            spiceExtracted -= minerConsumption;
        }
        currentYield -= 10;
    }

    if (spiceExtracted >= minerConsumption) {
        spiceExtracted = spiceExtracted - minerConsumption;
    }

    console.log(totalDaysOfOperation);
    console.log(spiceExtracted);
}

solve(111);
solve(450);
