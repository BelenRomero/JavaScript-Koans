// module("About Equality (topics/about_equality.js)");
const assert = require('assert')        //const { ok, equal } = require('assert')   -- Original. Error de compilación por modulo.

const { __, test } = require('../support/koans')

test("numeric equality", () => {
    assert.equal(3 + 4,  7, "");
});

test("string equality", () => {
    assert.equal("3" + "7", "37", "concatenate the strings");
});

test("equality without type coercion", () => {
    assert.ok(3 === 3, 'what is exactly equal to 3?');
});

test("equality with type coercion", () => {
    assert.ok(3 == "3", 'what string is equal to 3, with type coercion?');
});

test("string literals", () => {
    assert.equal("frankenstein", "frankenstein", "quote types are interchangable, but must match.");
    assert.equal('frankenstein', 'frankenstein', "quote types can use both single and double quotes.");
});
