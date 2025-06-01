function solve(input) {
    const schoolRegister = [];

    for (const info of input) {
        const [studentInfo, gradeInfo, scoreInfo] = info.split(', ');

        const grade = Number(gradeInfo.split(': ')[1]);
        const student = studentInfo.split(': ')[1];
        const score = Number(scoreInfo.split(': ')[1]);

        if (score < 3) {
            continue;
        }

        const registration = findNextGradeRegistration(grade);
        if (registration) {
            registration.students.push(student);
            registration.scores.push(score);
        } else {
            const newRegistration = {
                'grade': grade + 1, // registers for the new school year
                'students': [student,],
                'scores': [score,]
            };
            schoolRegister.push(newRegistration);
        }
    }
    
    const sortedSchoolRegister = schoolRegister.toSorted((a, b) => a.grade - b.grade);
    printSchoolRegister(sortedSchoolRegister);

    function printSchoolRegister(schoolRegister) {
        schoolRegister.forEach(registration => {
            console.log(`${registration.grade} Grade`);
            console.log(`List of students: ${registration.students.join(', ')}`);
            const averageScore = registration.scores.reduce((a, b) => a + b, 0) / registration.scores.length;
            console.log(`Average annual score from last year: ${averageScore.toFixed(2)}`);
            console.log(''); 
        });
    }

    function findNextGradeRegistration(currentGrade) {
        return schoolRegister.find(registration => registration.grade === currentGrade + 1);
    }
}


solve([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00" 
]);

for (let i = 0; i < 3; i++) {
    console.log('');
}

solve([
    'Student name: George, Grade: 5, Graduated with an average score: 2.75',
    'Student name: Alex, Grade: 9, Graduated with an average score: 3.66',
    'Student name: Peter, Grade: 8, Graduated with an average score: 2.83',
    'Student name: Boby, Grade: 5, Graduated with an average score: 4.20',
    'Student name: John, Grade: 9, Graduated with an average score: 2.90',
    'Student name: Steven, Grade: 2, Graduated with an average score: 4.90',
    'Student name: Darsy, Grade: 1, Graduated with an average score: 5.15'
]);
