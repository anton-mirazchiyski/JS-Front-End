function printDNA(length) {
    const sequence = ['AT', 'CG', 'TT', 'AG', 'GG'];

    let seqIndex = 0, starDecrease = 2, starIncrease = 1;

    for (let i = 0; i < length; i++) {
        const element = sequence[seqIndex];

        if (starDecrease >= 0) {
            printPart(starDecrease, element);
            starDecrease--;
        } else {
            printPart(starIncrease, element);
            starIncrease++;
            if (starIncrease == 2) {
                starDecrease = 2, starIncrease = 1;
            }
        }

        seqIndex++
        if (seqIndex >= sequence.length) {
            seqIndex = 0;
        }
    }
    
    function printPart(num, element) {
        console.log('*'.repeat(num) + element[0] + '-'.repeat((6 - (num * 2 + 2))) + element[1] + '*'.repeat(num));
    }
}

printDNA(4);
console.log('');
printDNA(10);
