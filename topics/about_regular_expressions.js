// module("About Regular Expressions (topics/about_regular_expressions.js)");
const { equal, ok } = require('assert')
const { __, test } = require('../support/koans')

test("exec", () => {
    const numberFinder = /(\d).*(\d)/;  // Lee hasta que extrae el primer numero, lee después ninguno o alguno (.) la cantidad de veces que sea necesario (*) hasta que encuentre otro numero y lo extraiga, y termina. 
    // De la frase dada debajo, extraería con la expresión regular usando EXEC lo siguiente: "6 turned out to be 9".
    const results = numberFinder.exec("what if 6 turned out to be 9?");
    //console.log(results);     // Para validar
    ok(results.equalTo(['6 turned out to be 9', '6', '9']), 'what is the value of results?');		
});


test("test", () => {
    const containsSelect = /select/.test("  select * from users ");
    equal(true, containsSelect, 'does the string provided contain "select"?');
});


test("match", () => {
    const matches = "what if 6 turned out to be 9?".match(/(\d)/g);
    ok(matches.equalTo(['6', '9']), 'what is the value of matches?');
});


test("replace", () => {
    let pie = "apple pie".replace("apple", "strawberry");
    equal('strawberry pie', pie, 'what is the value of pie?');

    pie = "what if 6 turned out to be 9?".replace(/\d/g, (number) => { // the second parameter can be a string or a function
        const map = {'6': 'six','9': 'nine'};
        return map[number];
    });
    equal('what if six turned out to be nine?', pie, 'what is the value of pie?');
});

// THE END