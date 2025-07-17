function solve() {
    const tableElement = document.querySelector('table');
    const tableBodyRowElements = document.querySelectorAll('table > tbody > tr');
    const buttonElements = document.getElementsByTagName('button');
    const resultElement = document.querySelector('#check > p');
    const allNumberDataElements = document.querySelectorAll('table > tbody input[type=number]');

    const [quickCheckButtonElement, clearButtonElement] = buttonElements;
    const rowElements = Array.from(tableBodyRowElements);
    const tableSize = rowElements.length;
    
    const determineNumbersRange = () => {
        const numbersRange = [];

        for (let num = 1; num <= tableSize; num++) {
            numbersRange.push(num);
        }

        return numbersRange;
    }

    quickCheckButtonElement.addEventListener('click', checkGame);

    clearButtonElement.addEventListener('click', () => {
        Array.from(allNumberDataElements).forEach(dataElement => {
            dataElement.value = '';
        });
        resultElement.textContent = '';
        tableElement.style.border = 'none';
    });


    function checkGame() {
        const rowsAreCorrect = checkNumbersInRows();
        const columnsAreCorrect = checkNumbersInColumns();

        if (rowsAreCorrect && columnsAreCorrect) {
            tableElement.style.border = '2px solid green';
            resultElement.textContent = 'You solve it! Congratulations!';
            resultElement.style.color = 'green';
        } else {
            tableElement.style.border = '2px solid red';
            resultElement.textContent = 'NOP! You are not done yet...';
            resultElement.style.color = 'red';
        }
    }

    function checkNumbersInRows() {
        let rowsAreCorrect = true;
        const numbersRange = determineNumbersRange();

        rowElements.forEach(rowElement => {
            const numbersCount = numbersRange.reduce((acc, number) => {
                acc[number] = 0;
                return acc;
            }, {});
            
            const inputNumberElements = rowElement.querySelectorAll('input[type=number]');

            Array.from(inputNumberElements).forEach(inputElement => {
                if (numbersCount.hasOwnProperty(inputElement.value)) {
                    numbersCount[inputElement.value] += 1;
                }
            });
            
            Object.values(numbersCount).forEach(value => {
                if (value !== 1) {
                    rowsAreCorrect = false;
                }
            });
        });
        return rowsAreCorrect;
    }
    
    function checkNumbersInColumns() {
        let columnsAreCorrect = true;
        const numbersRange = determineNumbersRange();

        for (let i = 0; i < rowElements.length; i++) {
            const numbersCount = numbersRange.reduce((acc, number) => {
                acc[number] = 0;
                return acc;
            }, {});

            rowElements.forEach(rowElement => {
                const number = rowElement.querySelector(`td:nth-child(${i + 1}) > input[type=number]`).value;
                if (numbersCount.hasOwnProperty(number)) {
                    numbersCount[number] += 1;
                }
            });

            Object.values(numbersCount).forEach(value => {
                if (value !== 1) {
                    columnsAreCorrect = false;
                }
            });
        }
        return columnsAreCorrect;
    }
}
