const miInput = document.querySelector('input');

// Quita la validación mientras escribes
miInput.addEventListener('input', () => {
    // Quita el mensaje según escribes
    miInput.setCustomValidity('');
    // Comprueba si debe validarlo
    miInput.checkValidity();
});

// Muestra el mensaje de validación
miInput1.addEventListener('invalid', () => {
    if(miInput.value === '') {
        // Campo vacío
        miInput.setCustomValidity('Si no es molesta... ¿me dices tu nombre?');
    } else {
        // Patrón
        miInput.setCustomValidity('Debes introducir carácteres alfanuméricos');
    }
});

