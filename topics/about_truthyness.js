// module("About Truthyness (topics/about_truthyness.js)");
const { equal, deepEqual } = require('assert')
const { __, test } = require('../support/koans')

const scriptFunction = () => {
    test("truthyness of positive numbers", () => {
        const oneIsTruthy = 1 ? true : false;
        equal(true, oneIsTruthy, 'is one truthy?');
    });

    test("truthyness of negative numbers", () => {
        const negativeOneIsTruthy = -1 ? true : false;
        equal(true, negativeOneIsTruthy, 'is -1 truthy?');
    });

    test("truthyness of zero", () => {
        const zeroIsTruthy = 0 ? true : false;
        equal(false, zeroIsTruthy, 'is 0 truthy?');
        // Cero es false, al igual que nulo
    });

    test("truthyness of null", () => {
        const nullIsTruthy = null ? true : false;
        equal(false, nullIsTruthy, 'is null truthy?');
        // Nulo es false
    });
}

// Module export
module.exports = scriptFunction