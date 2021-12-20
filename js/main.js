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
    const errores = [];

    errores.push(validarNombre(nombre.value));
    errores.push(validarCiudad(ciudad.value));
    errores.push(validarComportamiento(comportamiento.value));
    errores.push(validarDescripcionRegalo(descripcionRegalo.value));

    mostrarErrores(errores);
}

function validarNombre(nombre) {
    if (nombre === "") {
        return "Este campo debe tener al menos 1 caracter";
    } else if (nombre > 50) {
        return "Este campo debe tener menos de 50 caracteres";
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
        return "De una descripcion de su regalo";
    }
}

function mostrarErrores(errores) {
    for (const error of errores) {
        if (error === undefined) continue;
        console.log(error);
    }
}
