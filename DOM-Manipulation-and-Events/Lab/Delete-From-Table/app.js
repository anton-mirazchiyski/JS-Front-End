function deleteByEmail() {
    const tableRowElements = document.querySelectorAll('table#customers tbody tr');
    const inputElement = document.querySelector('input[name=email]');
    const resultElement = document.getElementById('result');

    const foundRow = Array.from(tableRowElements)
                        .find(tableRowElement => tableRowElement.children[1].textContent === inputElement.value);

    if (foundRow) {
        foundRow.remove();
        resultElement.textContent = 'Deleted.';
    } else {
        resultElement.textContent = 'Not found.';
    }
    
    inputElement.value = '';
}
