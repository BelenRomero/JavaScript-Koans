// module("About Control Structures (topics/about_control_structures.js)");
const { equal } = require('assert')
const { __, test } = require('../support/koans')

const scriptFunction = () => {
	test("if", () => {
		let isPositive = false;
		if (2 > 0) {
			isPositive = true;
		}
		equal(true, isPositive,  'what is the value of isPositive?');
	});

	test("for", () => {
		let counter = 10;
		for (let i = 1; i <= 3; i++) {
			counter = counter + i;		// Y se va sumando en cada iteración y son tres, siendo sus valores: 1, 2 y 3. Es decir: 10 + 1 + 2 + 3
		}
		equal(16, counter, 'what is the value of counter?');
	});

	test("for in", () => {
		// this syntax will be explained in about objects
		const person = {
			name: "Amory Blaine",
			age: 102
		};
		let result = "";

		// for in enumerates the property names of an object
		for (let property_name in person) {
			result = result + property_name;
			// Guarda los nombre de las propiedades del objeto, concatenandolas en result (el valor anterior de result era "", por lo que no afecta al valor final, siendo: nameage)
		}
		equal("nameage", result, 'what is the value of result?');
	});

	test("ternary operator", () => {
		let fruit = true ? "apple" : "orange";
		equal("apple", fruit, 'what is the value of fruit?');

		fruit = false ? "apple" : "orange";
		equal("orange", fruit, 'now what is the value of fruit?');
	});

	test("switch", () => {
		let result = 0;
		switch (2) {
			case 1:
				result = 1;
				break;
			case 1+1:
				result = 2;
				break;
		}
		equal(2, result, 'what is the value of result?');
		// El valor que se ingresa al switch es lo que determina el case al que ir, en este caso, es: switch (2), por lo que el valor de result se determina en el 'case 1+1', siendo este: 2.
	});

	test("switch default case", () => {
		let result = "Pippin";
		switch ("m") {
			case "f":
				result = "Frodo";
				break;
			case "s":
				result = "Samwise";
					break;
			default:
				result = "Merry";
				break;
		}
		equal("Merry", result, 'what is the value of result?');
		// No se tenia un case especifico para el valor ingresado en el switch (que fue 'm'), pero se tiene seteado un default en caso de que no ingrese a los otros case, tomará el valor de result que alli figura, siendo el mismo: "Merry".
	});

	test("null coalescing", () => {
		let result = null || "a value";
		equal("a value", result, 'what is the value of result?');
		// Al ser null || "a value" lo que hace es fusionar los valores por ser nulo uno, siendo el resultado: "a value".
	});
}


// Module export
module.exports = scriptFunction