function correrPuebas() {
    probarValidarNombre();
    probarValidarCiudad();
    probarValidarComportamiento();
    probarValidarDescripcionRegalo();
}

correrPuebas();

function probarValidarNombre() {
    console.assert(
        validarNombre("") === "Este campo debe tener al menos 1 caracter",
        "Validar nombre no validó que el nombre no sea vacío"
    );

    console.assert(
        validarNombre(
            "111111111111111111111111111111111111111111111111111111111111111111111111111111111111111"
        ) === "Este campo debe tener menos de 50 caracteres",
        "Validar nombre no validó que el nombre sea menor a 50 caracteres"
    );
}

function probarValidarCiudad() {
    console.assert(
        validarCiudad("") === "Seleccione una ciudad",
        "Validar ciudad no valido que se haya selecionado una ciudad"
    );
}

function probarValidarComportamiento() {
    console.assert(
        validarComportamiento("") === "Seleccione como ha sido este año",
        "Validar comportamiento no valido que se seleccionara un comportamiento"
    );
}

function probarValidarDescripcionRegalo() {
    console.assert(
        validarDescripcionRegalo("") === "De una descripcion de su regalo",
        "Validar descripcion regalo no valido que haya al menos un caracter en la descripcion"
    );
}
