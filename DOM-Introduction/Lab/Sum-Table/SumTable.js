function sumTable() {
    const tableDataElements = document.querySelectorAll('table td:nth-of-type(2):not(#sum)');
    const resultElement = document.getElementById('sum');

    const dataSum = Array.from(tableDataElements)
                        .reduce((sum, element) => sum + Number(element.textContent), 0);

    resultElement.textContent = dataSum;
}
