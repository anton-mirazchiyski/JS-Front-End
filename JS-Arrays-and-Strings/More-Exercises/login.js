function solve(userInfo) {
    const username = userInfo[0];
    const possiblePasswords = userInfo.slice(1,);
    let attempts = 0;

    for (let password of possiblePasswords) {
        let reversedPassword = password.split('').reverse().join('');
        if (username === reversedPassword) {
            return console.log(`User ${username} logged in.`);
        }
        attempts += 1;
        if (attempts == 4) {
            return console.log(`User ${username} blocked!`);
        }
        console.log('Incorrect password. Try again.');
    }
}

solve(['Acer','login','go','let me in','recA']);
solve(['momo','omom']);
solve(['sunny','rainy','cloudy','sunny','not sunny']);
