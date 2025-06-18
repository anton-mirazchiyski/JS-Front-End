function calc() {
    const firstInputElement = document.getElementById('num1');
    const secondInputElement = document.getElementById('num2');
    const resultInputElement = document.querySelector('#sum');

    const numbersSum = Number(firstInputElement.value) + Number(secondInputElement.value);
    
    resultInputElement.value = numbersSum;
}
