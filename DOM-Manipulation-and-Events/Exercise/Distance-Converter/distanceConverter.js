function attachEventsListeners() {
    const convertButtonElement = document.getElementById('convert');

    const inputDistanceElement = document.getElementById('inputDistance');
    const inputUnitsElement = document.querySelector('select#inputUnits');
    const outputDistanceElement = document.getElementById('outputDistance');
    const outputUnitsElement = document.querySelector('select#outputUnits');

    convertButtonElement.addEventListener('click', convertDistance);

    function convertDistance() {
        const currentMeters = convertInputToMeters();
        const result = convertFromMeters(currentMeters);

        outputDistanceElement.value = result;
    }

    function convertInputToMeters() {
        const inputDistanceValue = Number(inputDistanceElement.value);

        switch (inputUnitsElement.value) {
            case 'km':
                return inputDistanceValue * 1000;
            case 'm':
                return inputDistanceValue;
            case 'cm':
                return inputDistanceValue * 0.01;
            case 'mm':
                return inputDistanceValue * 0.001;
            case 'mi':
                return inputDistanceValue * 1609.34;
            case 'yrd':
                return inputDistanceValue * 0.9144;
            case 'ft':
                return inputDistanceValue * 0.3048;
            case 'in':
                return inputDistanceValue * 0.0254;
        }
    }

    function convertFromMeters(meters) {
        switch (outputUnitsElement.value) {
            case 'km':
                return meters / 1000;
            case 'm':
                return meters / 1;
            case 'cm':
                return meters / 0.01;
            case 'mm':
                return meters / 0.001;
            case 'mi':
                return meters / 1609.34;
            case 'yrd':
                return meters / 0.9144;
            case 'ft':
                return meters / 0.3048;
            case 'in':
                return meters / 0.0254;
        }
    }
}
