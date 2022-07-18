


//teclado

let input1 = document.getElementById("nombre y apellido")
let input2 = document.getElementById("Correo")
let input3 = document.getElementById("Telefono")
let input4 = document.getElementById("mensaje")


//Enviar

let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);

function validarFormulario(e){
e.preventDefault();
console.log("Formulario Enviado");    
}


// Muestra el mensaje de validación
input1.addEventListener('invalid', () => {
    if(input1.value === '') {
        // Campo vacío
        input1.setCustomValidity('Si no es molesta... ¿me dices tu nombre?');
    } else {
        // Patrón
        input3.setCustomValidity('Debes introducir carácteres alfanuméricos');
    }
});


