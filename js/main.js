/* Hacer las funciones de validación de validarCiudad y validarDescripcionRegalo.
Escribir pruebas para esas funciones.

Adicional: Escribir pruebas para las funciones de tareas anteriores. */

const $enviarCarta = document.querySelector("#enviar-carta");
const $formulario = document.querySelector("#carta-a-santa");
const nombre = $formulario.nombre;
const ciudad = $formulario.ciudad;
const comportamiento = $formulario.comportamiento;
const descripcionRegalo = $formulario["descripcion-regalo"];

$enviarCarta.onclick = function () {
    validarFormulario();
    return false;
};

function validarFormulario() {
    const errores = {
        nombre: validarNombre(nombre.value),
        ciudad: validarCiudad(ciudad.value),
        comportamiento: validarComportamiento(comportamiento.value),
        "descripcion-regalo": validarDescripcionRegalo(descripcionRegalo.value),
    };

    manejarErrores(errores);
}

function validarNombre(nombre) {
    if (nombre === "") {
        return "El nombre debe tener al menos 1 caracter";
    } else if (!/^[A-z]+$/.test(nombre)) {
        return "El nombre debe contener solo letras";
    } else if (nombre.length > 50) {
        return "El nombre debe tener menos de 50 caracteres";
    }
}

function validarCiudad(ciudad) {
    if (ciudad === "") {
        return "Seleccione una ciudad";
    }
}

function validarComportamiento(comportamiento) {
    if (comportamiento === "") {
        return "Seleccione como ha sido este año";
    }
}

function validarDescripcionRegalo(descripcionRegalo) {
    if (descripcionRegalo === "") {
        return "La descripcion del regalo debe tener al menos 1 caracter";
    } else if (descripcionRegalo.length > 100) {
        return "La descripcion del regalo solo puede contener hasta 100 caracteres";
    } else if (!/^[A-z0-9,. ]+$/.test(descripcionRegalo)) {
        return "La descripcion del regalo solo puede contener letras, numeros, puntos y comas";
    }
}

function manejarErrores(errores) {
    let hayErrores = false;
    resetearErrores();

    for (const [llave, entrada] of Object.entries(errores)) {
        if (entrada !== undefined) {
            hayErrores = true;
            marcarError(llave);
            mostrarError(entrada);
        } else {
            desmarcarError(llave);
        }
    }

    return hayErrores || manejarExito();
}

function resetearErrores() {
    const listaErrores = document.querySelectorAll(".elementoError");

    for (const error of listaErrores) {
        error.remove();
    }
}

function mostrarError(descripcion) {
    const $elementoLista = document.createElement("li");
    $elementoLista.className = "elementoError";
    $elementoLista.textContent = descripcion;

    document.querySelector("#errores").appendChild($elementoLista);
}

function marcarError(nombre) {
    document.querySelector(`[name=${nombre}]`).className = "error";
}

function desmarcarError(nombre) {
    document.querySelector(`[name=${nombre}]`).className = "";
}

function manejarExito() {
    ocultarFormulario();
    mostrarMensajeDeExito();
    redirigirUsuario();
}

function ocultarFormulario() {
    $formulario.className += "oculto";
}

function mostrarMensajeDeExito() {
    document.querySelector("#exito").className = "";
}

function redirigirUsuario() {
    setTimeout(function () {
        location.href = "./wishlist.html";
    }, 5000);
}
