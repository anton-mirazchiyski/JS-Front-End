function toggle() {
    const buttonElement = document.querySelector('span.button');
    const textElement = document.getElementById('extra');

    if (buttonElement.textContent === 'More') {
        textElement.style.display = 'block';
        buttonElement.textContent = 'Less';

    } else if (buttonElement.textContent === 'Less') {
        textElement.style.display = 'none';
        buttonElement.textContent = 'More';
    }
}
