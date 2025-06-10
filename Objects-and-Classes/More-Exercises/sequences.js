function solve(input) {
    const numbersArrays = input.map(element => JSON.parse(element))
                               .map(element => element.sort((numOne, numTwo) => numTwo - numOne));
    
    const uniqueSequences = storeUniqueSequences(numbersArrays);
    uniqueSequences.sort((seqA, seqB) => seqA.length - seqB.length)
                   .forEach(sequence => console.log(`[${sequence.join(', ')}]`));

    
    function storeUniqueSequences(sequences) {
        const uniqueSequences = [];

        for (let i = 0; i < sequences.length; i++) {
            const currentSeq = sequences[i];
            let isUnique = true;

            for (let j = i + 1; j < sequences.length; j++) {
                const nextSeq = sequences[j];
                const areSame = compareSequences(currentSeq, nextSeq);
                if (areSame) {
                    isUnique = false;
                }
            }
            if (isUnique) {
                uniqueSequences.push(currentSeq);
            }
        }
        return uniqueSequences;
    }

    function compareSequences(firstSequence, secondSequence) {
        if (firstSequence.length != secondSequence.length) {
            return false;
        }

        for (let i = 0; i < firstSequence.length; i++) {
            const firstNum = firstSequence[i];
            const secondNum = secondSequence[i];

            if (firstNum !== secondNum) {
                return false;
            }
        }
        return true;
    }
}


solve(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);

console.log('');

solve(
    ["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);

console.log('');

solve(["[1, 2, 3]", "[1, 2, 3]", "[3, 2, 1]"]);

console.log('');


function solve2(input) {
    const uniqueSequences = new Set();

    input.map(element => JSON.parse(element))
         .map(sequence => sequence.sort((a, b) => b - a))
         .map(sequence => JSON.stringify(sequence))
         .forEach(sequence => uniqueSequences.add(sequence));
    
    Array.from(uniqueSequences).map(sequence => JSON.parse(sequence))
                               .sort((a, b) => a.length - b.length)
                               .forEach(sequence => console.log(`[${sequence.join(', ')}]`));
}


solve2(
    ["[-3, -2, -1, 0, 1, 2, 3, 4]",
    "[10, 1, -17, 0, 2, 13]",
    "[4, -3, 3, -2, 2, -1, 1, 0]"]
);

console.log('');

solve2(
    ["[7.14, 7.180, 7.339, 80.099]",
    "[7.339, 80.0990, 7.140000, 7.18]",
    "[7.339, 7.180, 7.14, 80.099]"]
);
