function solve(age) {
    if (age > 65) {
        console.log('elder');
    } else if (age >= 20) {
        console.log('adult');
    } else if (age >= 14) {
        console.log('teenager');
    } else if (age >= 3) {
        console.log('child');
    } else if (age >= 0) {
        console.log('baby');
    } else {
        console.log('out of bounds');  
    }
}

solve(20);
solve(1);
solve(100);
solve(-1);
