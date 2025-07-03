function addItem() {
    const listElement = document.getElementById('items');
    const textInputElement = document.getElementById('newItemText');

    const listItemElement = document.createElement('li');
    listItemElement.textContent = textInputElement.value;

    listElement.appendChild(listItemElement);

    textInputElement.value = '';
}
