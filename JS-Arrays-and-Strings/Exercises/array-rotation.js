function solve(elements, rotationsCount) {
    const result = elements;
    
    for (let i = 1; i <= rotationsCount; i++) {
        const firstElement = result.shift();
        result.push(firstElement);
    }

    console.log(result.join(' '));
}

solve([51, 47, 32, 61, 21], 2);
solve([32, 21, 61, 1], 4);
solve([2, 4, 15, 31], 5);
