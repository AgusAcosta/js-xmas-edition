function correrPuebas() {
    probarValidarNombre();
    probarValidarCiudad();
    probarValidarComportamiento();
    probarValidarDescripcionRegalo();
}

correrPuebas();

function probarValidarNombre() {
    console.assert(
        validarNombre("") === "El nombre debe tener al menos 1 caracter",
        "Validar nombre no validó que el nombre no sea vacío"
    );

    console.assert(
        validarNombre("53") === "El nombre debe contener solo letras",
        "Validar nombre no validó que el nombre tenga solo letras"
    );

    console.assert(
        validarNombre("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa") ===
            "El nombre debe tener menos de 50 caracteres",
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
        validarDescripcionRegalo("") ===
            "La descripcion del regalo debe tener al menos 1 caracter",
        "Validar descripcion regalo no valido que haya al menos un caracter en la descripcion"
    );

    console.assert(
        validarDescripcionRegalo(
            "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
        ) ===
            "La descripcion del regalo solo puede contener hasta 100 caracteres",
        "Validar descripcion regalo no valido que la descripcion del regalo tenga menos de 100 caracteres"
    );

    console.assert(
        validarDescripcionRegalo("{") ===
            "La descripcion del regalo solo puede contener letras, numeros, puntos y comas",
        "Validar descripcion regalo no valido que la descripcion del regalo tenga solo letras, numeros, puntos y comas"
    );
}
