function solve(arg) {
    if (typeof arg == 'number') {
        const radius = arg;
        const circleArea = Math.PI * radius ** 2;
        console.log(circleArea.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof arg}.`);
    }
}

solve(5);
solve('name');
