// Generar Array con los scripts, dentro de cada script de los topics incorporar los tests a una funcion, misma que será exportada para ser visible fuera del modulo y ejecutada aquí dentro en el forEach. En el package.json crear un script que ejecute este archivo js (index.js) de nombre "koans".
// Proceder a ejecutar los scripts de pruebas desde la terminal realizando un: node run koans
const scripts = [
    './topics/about_asserts',
    './topics/about_operators',
    './topics/about_equality',
    './topics/about_truthyness',
    './topics/about_assignment',
    './topics/about_control_structures',
    './topics/about_strings',
    './topics/about_numbers',
    './topics/about_objects',
    './topics/about_arrays',
    './topics/about_reflection',
    './topics/about_prototype_chain',
    './topics/about_prototypal_inheritance',
    './topics/about_functions_and_closure',
    './topics/about_this',
    './topics/about_scope',
    './topics/about_regular_expressions'
]

scripts.forEach((script) => {
    const getFuncion = require(script)
    console.log(getFuncion)
    getFuncion()
})