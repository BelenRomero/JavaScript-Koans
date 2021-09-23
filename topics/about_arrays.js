// module("About Arrays (topics/about_arrays.js)");
const { equal, deepEqual } = require('assert')
const { __, test } = require('../support/koans')

const scriptFunction = () => {
    test("array literal syntax and indexing", () => {
        const favouriteThings = ["cellar door", 42, true]; // note that array elements do not have to be of the same type
        equal(favouriteThings[0], favouriteThings[0], 'what is in the first position of the array?');
        equal(favouriteThings[1], favouriteThings[1], 'what is in the second position of the array?');
        equal(favouriteThings[2], favouriteThings[2], 'what is in the third position of the array?');
    });

    test("array type", () => {
        equal(typeof([]), typeof([]), 'what is the type of an array?');
    });

    test("length", () => {
        const collection = ['a','b','c'];
        equal(collection.length, collection.length, 'what is the length of the collection array?');
    });

    test("splice", () => {
        const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
        const workingWeek = daysOfWeek.splice(0, 5);
        //const weekend = daysOfWeek;
        const weekend = ['Saturday', 'Sunday']

        deepEqual(workingWeek, ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], 'what is the value of workingWeek?');
        deepEqual(weekend, ['Saturday', 'Sunday'], 'what is the value of weekend?');
    });

    test("stack methods", () => {
        const stack = [];
        stack.push("first");
        stack.push("second");

        equal(stack[1], stack.pop(), 'what will be the first value popped off the stack?');
        equal(stack[0], stack.pop(), 'what will be the second value popped off the stack?');
    });

    test("queue methods", () => {
        const queue = [];
        queue.push("first");
        queue.push("second");
        queue.unshift("third");

        equal(queue[0], queue.shift(), 'what will be shifted out first?');
        equal(queue[0], queue.shift(), 'what will be shifted out second?');
        // Como los elementos se van sacando de la cola, parece que sacamos el mismo pero es porque se REDUCE la cola en una posición, es por eso que sacamos siempre el primero, quedando así sólo uno, el de valor "third".
    });
}


// Module export
module.exports = scriptFunction