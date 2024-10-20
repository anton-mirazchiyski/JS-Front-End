function solve(numbers) {
    for (let number of numbers) {
        number = number.toString();
        console.log(checkForPalindrome(number));
    }

    function checkForPalindrome(num) {
        for (let i = 0; i < num.length; i++) {
            let startDigit = num[i];
            let endDigit = num[num.length - (i + 1)];
    
            if (startDigit !== endDigit) {
                return 'false';
            }
        }
    
        return 'true';
    }
}

solve([123,323,421,121]);
console.log('');
solve([32,2,232,1010]);
