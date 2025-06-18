function colorize() {
    const tableRowElements = document.querySelectorAll('tr:not(:first-child)');

    const tableRows = Array.from(tableRowElements);

    for (let i = 0; i < tableRows.length; i++) {
        if (i % 2 === 0) {
            const evenRowElement = tableRowElements[i];
            evenRowElement.style.backgroundColor = 'teal';
        }
    }
}
