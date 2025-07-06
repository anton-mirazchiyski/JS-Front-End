function focused() {
    const textInputElements = document.querySelectorAll('input[type=text]');

    Array.from(textInputElements).forEach(inputElement => {
        inputElement.addEventListener('focus', (e) => {
            e.target.parentElement.classList.add('focused');
        });

        inputElement.addEventListener('blur', (e) => {
            e.target.parentElement.classList.remove('focused');
        });
    });
}
