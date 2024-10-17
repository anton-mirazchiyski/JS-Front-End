function solve(grade) {
    let formattedGrade;

    if (grade < 3) {
        formattedGrade = `Fail (2)`;
    } else if (grade < 3.5) {
        formattedGrade = `Poor (${grade.toFixed(2)})`;
    } else if (grade < 4.5) {
        formattedGrade = `Good (${grade.toFixed(2)})`;
    } else if (grade < 5.5) {
        formattedGrade = `Very good (${grade.toFixed(2)})`;
    } else {
        formattedGrade = `Excellent (${grade.toFixed(2)})`;
    }

    return formattedGrade;
}

console.log(solve(3.33));
console.log(solve(4.50));
console.log(solve(2.99));
