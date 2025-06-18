function extractText() {
    const listItemElements = document.querySelectorAll('#items > li');
    const textAreaElement = document.getElementById('result');

    Array.from(listItemElements).forEach(element => {
        textAreaElement.value += element.textContent + '\n';
    });
}
