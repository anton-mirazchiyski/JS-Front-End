function solve(number, elements) {
    const result = [];

    for (let i = 0; i < number; i++) {
        result.push(elements[i]);
    }

    console.log(result.reverse().join(' '));
}

solve(3, [10, 20, 30, 40, 50]);
solve(4, [-1, 20, 99, 5]);
solve(2, [66, 43, 75, 89, 47]);


function solve2(number, elements) {
    const result = elements.slice(0, number)
                            .reverse()
                            .join(' ');

    console.log(result);
    
}

solve2(3, [10, 20, 30, 40, 50]);
