function encodeAndDecodeMessages() {
    const firstTextareaElement = document.querySelector('#main > div:first-of-type textarea');
    const secondTextareaElement = document.querySelector('#main > div:nth-of-type(2) textarea');
    const encodeButtonElement = document.getElementsByTagName('button')[0];
    const decodeButtonElement = document.getElementsByTagName('button')[1];

    encodeButtonElement.addEventListener('click', encodeMessage);
    decodeButtonElement.addEventListener('click', decodeMessage);

    function encodeMessage() {
        const text = firstTextareaElement.value;
        let encodedMessage = '';

        for (let i = 0; i < text.length; i++) {
            const newCode = text.charCodeAt(i) + 1;
            encodedMessage += String.fromCharCode(newCode);
        }

        secondTextareaElement.value = encodedMessage;
        firstTextareaElement.value = '';
    }

    function decodeMessage() {
        const encodedMessage = secondTextareaElement.value;
        let decodedMessage = '';

        for (let i = 0; i < encodedMessage.length; i++) {
            const code = encodedMessage.charCodeAt(i) - 1;
            decodedMessage += String.fromCharCode(code);
        }

        secondTextareaElement.value = decodedMessage;
    }
}
