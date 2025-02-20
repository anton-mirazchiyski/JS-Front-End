function solve(points) {
    const [x1, y1, x2, y2] = points;
    
    const firstDistance = Math.sqrt(x1 ** 2 + y1 **2);
    validateDistance(firstDistance, x1, y1, 0, 0);

    const secondDistance = Math.sqrt(x2 ** 2 + y2 **2);
    validateDistance(secondDistance, x2, y2, 0, 0);

    const thirdDistance = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);
    validateDistance(thirdDistance, x1, y1, x2, y2);

    function validateDistance(distance, firstPoint, secondPoint, thirdPoint, fourthPoint) {
        let validity;
        Number.isInteger(distance) ? validity = 'valid' : validity = 'invalid';
        
        console.log(`{${firstPoint}, ${secondPoint}} to {${thirdPoint}, ${fourthPoint}} is ${validity}`);     
    }
}

solve([3, 0, 0, 4]);
console.log('');
solve([2, 1, 1, 1]);
