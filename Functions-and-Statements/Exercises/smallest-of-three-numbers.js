function findSmallestNumber(firstNum, secondNum, thirdNum) {
    const numbers = [firstNum, secondNum, thirdNum];

    let smallestNumber = Number.MAX_SAFE_INTEGER;

    for (let currentNumber of numbers) {
        if (currentNumber < smallestNumber) {
            smallestNumber = currentNumber;
        }
    }

    console.log(smallestNumber);
}

findSmallestNumber(2, 5, 3);
findSmallestNumber(600, 342, 123);
findSmallestNumber(25, 21, 4);


const findTheSmallest = (firstNum, secondNum, thirdNum) => Math.min(firstNum, secondNum, thirdNum);

console.log(findTheSmallest(2, 5, 3));


const anotherSolve = function(firstNum, secondNum, thirdNum) {
    let smallestNumber = firstNum;

    if (secondNum < firstNum && secondNum < thirdNum) {
        smallestNumber = secondNum;
    }

    if (thirdNum < firstNum && thirdNum < secondNum) {
        smallestNumber = thirdNum;
    }

    return smallestNumber;
}

console.log(anotherSolve(2, 5, 3));
console.log(anotherSolve(600, 342, 123));
console.log(anotherSolve(25, 21, 4));
