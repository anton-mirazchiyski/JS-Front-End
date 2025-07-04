function solve(input) {
    const register = [];

    for (const row of input) {
        if (row.includes(':')) {
            const [courseName, courseCapacity] = row.split(': ');
            const capacity = Number(courseCapacity);

            const course = findCourseInRegister(courseName, register);

            if (!course) {
                const registration = {
                    courseName,
                    courseCapacity: capacity,
                    students: []
                };
                register.push(registration);
            } else {
                course.courseCapacity += capacity;
            }

        } else if (row.includes('joins')) {
            const [userInfo, courseName] = row.split(' joins ');
            const [usernameAndCredits, email] = userInfo.split(' with email ');

            const [username, credits] = extractUserInfo(usernameAndCredits);
            const course = findCourseInRegister(courseName, register);

            if (course && course.courseCapacity > 0) {
                const student = {
                    credits,
                    username,
                    email,
                };
                course.students.push(student);
                course.courseCapacity--;
            }
        }
    }

    sortRegister(register);
    printRegister(register);


    function findCourseInRegister(courseName, register) {
        return register.find(registration => registration.courseName === courseName);
    }

    function extractUserInfo(usernameAndCredits) {
        const creditsInfo = usernameAndCredits.match(/\[\d+\]/gm).join('');
        const credits = creditsInfo.substring(1, creditsInfo.length - 1);
        const username = usernameAndCredits.split(`${creditsInfo}`)[0];
        
        return [username, Number(credits)];
    }

    function sortRegister(register) {
        register.sort((courseA, courseB) => courseB.students.length - courseA.students.length);

        register.forEach(course => course.students.sort((studentA, studentB) => studentB.credits - studentA.credits));
    }

    function printRegister(register) {
        register.forEach(registration => {
            console.log(`${registration.courseName}: ${registration.courseCapacity} places left`);
            registration.students.forEach(student => console.log(`--- ${student.credits}: ${student.username}, ${student.email}`));
        });
    }
}


solve(
    [
    'JavaBasics: 2',
    'user1[25] with email user1@user.com joins C#Basics',
    'C#Advanced: 3',
    'JSCore: 4',
    'user2[30] with email user2@user.com joins C#Basics',
    'user13[50] with email user13@user.com joins JSCore',
    'user1[25] with email user1@user.com joins JSCore',
    'user8[18] with email user8@user.com joins C#Advanced',
    'user6[85] with email user6@user.com joins JSCore',
    'JSCore: 2',
    'user11[3] with email user11@user.com joins JavaBasics',
    'user45[105] with email user45@user.com joins JSCore',
    'user007[20] with email user007@user.com joins JSCore',
    'user700[29] with email user700@user.com joins JSCore',
    'user900[88] with email user900@user.com joins JSCore'
]
);

console.log('');
console.log('');

solve(
    [
    'JavaBasics: 15',
    'user1[26] with email user1@user.com joins JavaBasics',
    'user2[36] with email user11@user.com joins JavaBasics',
    'JavaBasics: 5',
    'C#Advanced: 5',
    'user1[26] with email user1@user.com joins C#Advanced',
    'user2[36] with email user11@user.com joins C#Advanced',
    'user3[6] with email user3@user.com joins C#Advanced',
    'C#Advanced: 1',
    'JSCore: 8',
    'user23[62] with email user23@user.com joins JSCore'
]
);
