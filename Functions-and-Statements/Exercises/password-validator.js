function validatePassword(password) {
    let isValid = true;

    if (password.length < 6 || password.length > 10) {
        isValid = false;
        console.log('Password must be between 6 and 10 characters');
    }

    const lettersAndDigitsPattern = /^[A-Za-z0-9]+$/gm;

    if (!lettersAndDigitsPattern.test(password)) {
        isValid = false;
        console.log('Password must consist only of letters and digits');
    }

    const digits = password.match(/\d/gm);

    if (!digits || digits.length < 2) {
        isValid = false;
        console.log('Password must have at least 2 digits');
    }

    if (isValid) {
        console.log('Password is valid'); 
    } 
}

validatePassword('logIn');
console.log('');
validatePassword('MyPass123');
console.log('');
validatePassword('Pa$s$s');
