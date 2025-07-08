function lockedProfile() {
    const profileElements = document.getElementsByClassName('profile');

    Array.from(profileElements).forEach(profileElement => {
        const showMoreButtonElement = profileElement.querySelector('button');
        const hiddenInfoElement = profileElement.querySelector('div');
        const unlockButtonElement = profileElement.querySelector('input[type=radio][value=unlock]');

        showMoreButtonElement.addEventListener('click', () => {
            const isHidden = window.getComputedStyle(hiddenInfoElement).display === 'none';

            if (unlockButtonElement.checked && isHidden) {
                hiddenInfoElement.style.display = 'block';
            } else if (unlockButtonElement.checked && !isHidden) {
                hiddenInfoElement.style.display = 'none';
            }
        });
    });
}
