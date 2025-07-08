function attachEventsListeners() {
    const buttonElements = document.querySelectorAll('input[type=button]');

    const daysInputElement = document.getElementById('days');
    const hoursInputElement = document.getElementById('hours');
    const minutesInputElement = document.getElementById('minutes');
    const secondsInputElement = document.getElementById('seconds');
    const allInputElements = document.querySelectorAll('input[type=text]');

    Array.from(buttonElements).forEach(buttonElement => {
        buttonElement.addEventListener('click', convertTime);
    });

    function convertTime() {
        const days = daysInputElement.value;
        const hours = hoursInputElement.value;
        const minutes = minutesInputElement.value;
        const seconds = secondsInputElement.value;
        
        if (days) {
            hoursInputElement.value = days * 24;
            minutesInputElement.value = days * 1440;
            secondsInputElement.value = days * 86400;
        } else if (hours) {
            daysInputElement.value = hours / 24;
            minutesInputElement.value = hours * 60;
            secondsInputElement.value = hours * 3600;
        } else if (minutes) {
            daysInputElement.value = minutes / 1440;
            hoursInputElement.value = minutes / 60;
            secondsInputElement.value = minutes * 60;
        } else if (seconds) {
            daysInputElement.value = seconds / 86400;
            hoursInputElement.value = seconds / 3600;
            minutesInputElement.value = seconds / 60;
        }

    Array.from(allInputElements).forEach(inputElement => {
        inputElement.value = Number(inputElement.value).toFixed(2);
    });

    }
}
