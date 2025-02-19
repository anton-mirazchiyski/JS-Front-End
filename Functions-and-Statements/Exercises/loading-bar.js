function loadingBar(number) {
    const bar = [];

    for (let i = 0; i < (number / 10); i++) {
        bar.push('%');
    }

    while (bar.length < 10) {
        bar.push('.')
    }

    if (bar.includes('.')) {
        console.log(`${number}% [${bar.join('')}]`);
        console.log('Still loading...');
    } else {
        console.log(`${number}% Complete!`);
        console.log(`[${bar.join('')}]`);
    }
}

loadingBar(30);
console.log('');
loadingBar(100);
