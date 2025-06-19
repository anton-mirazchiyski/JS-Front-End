function subtract() {
    const firstInputElement = document.getElementById('firstNumber');
    const secondInputElement = document.getElementById('secondNumber');
    const resultElement = document.getElementById('result');

    const firstNumber = Number(firstInputElement.value);
    const secondNumber = Number(secondInputElement.value);

    resultElement.textContent = firstNumber - secondNumber;
}
