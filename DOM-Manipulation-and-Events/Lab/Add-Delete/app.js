function addItem() {
    const textInputElement = document.getElementById('newItemText');
    const listElement = document.getElementById('items');

    const listItemElement = document.createElement('li');
    listItemElement.textContent = textInputElement.value;

    const linkElement = document.createElement('a');
    linkElement.textContent = '[Delete]';
    linkElement.setAttribute('href', '#');
    listItemElement.appendChild(linkElement);

    linkElement.addEventListener('click', (e) => {
        e.target.parentElement.remove();
    });

    listElement.appendChild(listItemElement);

    textInputElement.value = '';
}
