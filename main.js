/* const variableConst = {
    propiedad1: {
        clave: 'valor'
    },
    otras: [],
    miMetodo: function nombreFunc() {}
    // miMetodo: function () { console.log('Hello') }
};

variableConst.miMetodo(); */

// FUNCIONES SIN NOMBRE (definirlas anónimamente)
/* (function () {
    console.log('Aloha 1')
}); // Sin invocarla

(function () {
    console.log('Aloha 2')
}) ();  // Invocandola, al poner los "()"
 */



/* const variableConst = {
    propiedad1: {
        clave: 'valor'
    },
    otras: [],
    miMetodo: function () { 
        console.log('Hello')
        return [] 
    }
};

console.log( variableConst.miMetodo() ); */




// FUNCIONES, DECLARACIONES
const f1 = function m() {
    console.log('Funcion 1: Mensaje 1.')
}

f1();



const f2 = function m(mensaje ) {
    console.log(mensaje)
}

f2('Funcion 2: Con parametro. Mensaje 2');



// FUNCIONES LAMBDA. FUNCIONES FLECHA. ARROW FUCTION
const f3 = (mensaje3) => {
    console.log(mensaje3)
}

f3('Funcion 3: Lambda. Funcion flecha. Mensaje 3');


const f31 = (mensaje3, numero) => {
    console.log(mensaje3, numero)
}

f31('Funcion 31: Lambda. Funcion flecha. Mensaje 3, parametroS.', 77);


const f32 = (mensaje3, numero) => {
    return numero/10
}

console.log( f32('Funcion 32: Funcion flecha.', 77) );



//const f33 = (mensaje3, numero) => numero/10;    // Forma para expresar que la función, IMPLICITAMENTE devuelve el valor resultado de numero/10.
const f33 = (mensaje3, numero) => (numero%2==0 || 'Impar');
console.log( f33('F33: Funcion flecha.', 77) );

const f34 = (mensaje3, numero) => (numero/10 || {});
console.log( f34('F34: Funcion flecha.', 0) );



