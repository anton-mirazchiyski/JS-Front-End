function validate() {
    const emailInputElement = document.getElementById('email');

    emailInputElement.addEventListener('change', (e) => {
        const pattern = /[a-z]+@[a-z]+\.[a-z]+/gm;

        const isValid = pattern.test(e.target.value);
        
        isValid ? e.target.classList.remove('error') 
                : e.target.classList.add('error');
    });
}
