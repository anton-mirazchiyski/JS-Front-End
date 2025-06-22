function solve() {
    const numberInputElement = document.getElementById('input');
    const buttonElement = document.getElementsByTagName('button')[0];
    const resultElement = document.getElementById('result');
    const selectMenuToElement = document.getElementById('selectMenuTo');
    const firstSelectOptionElement = document.querySelector('#selectMenuTo > option');

    firstSelectOptionElement.value = 'binary';
    firstSelectOptionElement.textContent = 'Binary';

    const secondSelectOptionElement = document.createElement('option');
    secondSelectOptionElement.value = 'hexadecimal';
    secondSelectOptionElement.textContent = 'Hexadecimal';

    selectMenuToElement.appendChild(secondSelectOptionElement);

    buttonElement.addEventListener('click', convertNumber);

    function convertNumber() {
        let result;      

        if (selectMenuToElement.value === 'binary') {
            result = convertDecimalToBinary();
        } else if (selectMenuToElement.value === 'hexadecimal') {
            result = convertDecimalToHexadecimal();
        }

        resultElement.value = result;
    }

    function convertDecimalToBinary() { 
        return Number(numberInputElement.value).toString(2);
    }

    function convertDecimalToHexadecimal() { 
        return Number(numberInputElement.value).toString(16).toUpperCase();
    }
}
