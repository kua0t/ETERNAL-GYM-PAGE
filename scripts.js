//abrir/cerrar aside
const toggleButton = document.getElementById("toggleButton");
const dropdownMenu = document.getElementById("dropdownMenu");
const closeButton = document.getElementById("closeButton");

toggleButton.addEventListener("click", () => {
    if (dropdownMenu.style.right === "-300px" || dropdownMenu.style.right === "") {
        dropdownMenu.style.right = "0";
    } else {
        dropdownMenu.style.right = "-300px";
    }
});

closeButton.addEventListener("click", () => {
    dropdownMenu.style.right = "-300px";
});
//abrir/cerrar aside

//efecto maquina de escribir




//efecto maquina de escribir

//Cambiar frase motivadora
const frasesMotivadoras = [
    "La mejor forma de fracasar, es nunca haberlo intentado. - Desconocido.",
    "No se trata de intensidad, se trata de consistencia. - Simon Sinek.",
    "No es lo mismo actuar sin hablar, que hablar sin actuar. - Desconocido.",
    "Si tú no cambias, nada en tu vida cambiará. - Desconocido.",
    "Siempre orgulloso, pero nunca satisfecho. - Desconocido.",
    "Tienes que estar dispuesto a aceptar el fracaso para poder mejorar. - LeBron James.",
    "Todo campeón fue alguna vez un contendiente que se rehusó a dar por vencido. - Sylvester Stallone.",
    "No limites tus desafíos, desafía tus límites. - Desconocido.",
    "La motivación es lo que te inicia. El hábito es lo que te mantiene. - Jim Ryun."
];


const fraseMotivadoraElement = document.getElementById("frase-motivadora");

function cambiarFraseMotivadora() {
    const randomIndex = Math.floor(Math.random() * frasesMotivadoras.length);
    const nuevaFrase = frasesMotivadoras[randomIndex];
    fraseMotivadoraElement.textContent = nuevaFrase;
}

function cambiarFraseCadaMinuto() {
    cambiarFraseMotivadora();
    setTimeout(cambiarFraseCadaMinuto, 60000);
}

cambiarFraseMotivadora();

cambiarFraseCadaMinuto();
//Cambiar frase motivadora

//validacion form
function validateForm() {
    var nombre = document.getElementById('nombre').value;
    var apellido = document.getElementById('apellido').value;
    var email = document.getElementById('email').value;
    var telefono = document.getElementById('telefono').value;
    var edad = document.getElementById('edad').value;
    var objetivo = document.getElementById('objetivo').value;
    var horario = document.getElementById('horario').value;

    if (nombre === '' || apellido === '' || email === '' || telefono === '' || edad === '' || horario === '') {
        mostrarError('Por favor, complete todos los campos.');
        return false;
    }

    if (!validarTexto(nombre) || !validarTexto(apellido)) {
        mostrarError('El nombre y el apellido solo deben contener letras y espacios.');
        return false;
    }

    if (parseInt(edad) <= 18) {
        mostrarError('Debe ser mayor de 18 años para inscribirse.');
        return false;
    }

    limpiarFormulario();
    mostrarMensaje('Validación exitosa.'); 

    return false;
}

function mostrarMensaje(mensaje) {
    var mensajeDiv = document.getElementById('mensaje');
    mensajeDiv.innerHTML = mensaje;
}

function mostrarError(mensaje) {
    alert(mensaje);
}
function validarTexto(texto) {
    var regex = /^[a-zA-Z\s]+$/;
    return regex.test(texto);
}

function validarEmail(email) {
    return email.includes('@');
}

function validarNumero(numero) {
    var regex = /^[0-9]+$/;
    return regex.test(numero);
}

function validarEdad(edad) {
    var numeroEdad = parseInt(edad);
    return !isNaN(numeroEdad) && numeroEdad > 18 && numeroEdad < 100;
}


