// module("About Functions And Closure (topics/about_functions_and_closure.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

const scriptFunction = () => {
    test("defining functions directly", () => {
        var result = "a"; // const result = "a"; 
        //Se modifica el tipo de variable a var debido a error de compilacion: 
        //TypeError: Assignment to constant variable.
        function changeResult() {
            // the ability to access a variables defined in the same scope as the function is known as 'closure'
            result = "b";
        };
        changeResult();
        equal("b", result, 'what is the value of result?');
    });


    test("assigning functions to variables", () => {
        const triple = (input) => {
            return input * 3;       // triple recibe input, siendo imput de valor 4 dado cuando se llama a la funcion, y multiplicado por 3, seria: 12.
        };
        equal(12, triple(4), 'what is triple 4?');
    });


    test("self invoking functions", () => {
        const publicValue = "shared";

        // self invoking functions are used to provide scoping and to alias variables
        (function(pv) {
            const secretValue = "password";
            equal("shared", pv, 'what is the value of pv?');
            equal("string", typeof(secretValue), "is secretValue available in this context?");
            equal("string", typeof(publicValue), "is publicValue available in this context?");
        })(publicValue);    // Se llama a la funcion anonima, enviandole como parametro la constante publicValue de valor "shared".

        equal("undefined", typeof(secretValue), "is secretValue available in this context?");   // No se encuentra definida fuera de la funcion.
        equal("string", typeof(publicValue), "is publicValue available in this context?");
    });



    test("arguments array", () => {
        const add = function() {
            let total = 0;
            for(let i = 0; i < arguments.length; i++) {
                // complete the implementation of this method so that it returns the sum of its arguments
                // Se completa el método, para que realice la suma de los argumentos internos:
                total = total + arguments[i];
            }
            // Se devuelve el valor resultado de la suma realizada:
            return total;
        };

        equal(15, add(1,2,3,4,5), "add 1,2,3,4,5");
        equal(9, add(4,7,-2), "add 4,7,-2");
    });



    test("using call to invoke function", () => {
        const invokee = function(message) {
            return this + message;    // this = contexto, message = argumentos
        };
        //another way to invoke a function is to use the call function which allows 
        //you to set the callers "THIS" CONTEXT.  Call can take any number of arguments: 
        //the FIRST one is always the CONTEXT that this should be set to in the called
        //function, and the ARGUMETS to be sent to the function, multiple arguments are separated by commas.
        const result = invokee.call("I am this!", "Where did it come from?");
            
        equal("I am this!Where did it come from?", result, "what will the value of invokee's this be?");
    });



    test("using apply to invoke function", () => {
        const invokee = function(message1, message2) {
            return this + message1 + message2;    
        };
        //similar to the call function is the apply function.  Apply only has two
        //arguments:  the first is the context that this should be set to in the called
        //function and the second is the array of arguments to be passed into the called function.
        const result = invokee.apply("I am this!", ["I am arg1", "I am arg2"]);
            
        equal("I am this!I am arg1I am arg2", result, "what will the value of invokee's this be?");
        // Devuelve el contenido del mensaje. Lo que se hace al llamarla es darle el contexto (THIS) más un lugar a cada argumento en la funcion y luego aplicarla.
    });
}

// Module export
module.exports = scriptFunction