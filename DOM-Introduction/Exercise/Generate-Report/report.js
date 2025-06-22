function generateReport() {
    const tableHeaderElements = document.getElementsByTagName('th');
    const tableCheckboxElements = document.querySelectorAll('th > input[type="checkbox"]');
    const tableBodyRowElements = document.querySelectorAll('tbody > tr');
    const textAreaElement = document.getElementById('output');
    
    const result = [];

    const tableCheckboxes = Array.from(tableCheckboxElements);
    const tableRows = Array.from(tableBodyRowElements);

    for (let i = 0; i < tableRows.length; i++) {
        const rowDataElements = tableRows[i].children;
        const employeeData = {};

        for (let j = 0; j < tableCheckboxes.length; j++) {
            const currentHeader = tableHeaderElements[j];
            const currentCheckbox = tableCheckboxes[j];

            if (currentCheckbox.checked) {
                employeeData[currentHeader.textContent.toLowerCase().trim()] = rowDataElements[j].textContent;
            }
        }
        result.push(employeeData);
    }

    textAreaElement.value = JSON.stringify(result, null, 2);
}
